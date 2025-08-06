// Nest
import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';

// Service
import { AuthService } from './../auth.service';
import { PrismaService } from './../../../database/prisma.service';

// Biblioteca
import { compare } from 'bcrypt';

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

describe('AuthService', () => {
  let authService: AuthService;
  let prisma: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            users: {
              findFirst: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockResolvedValue('signed_token'),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should return user payload and token when credentials are valid', async () => {
    const mockUser = {
      id: '1',
      name: 'Foo',
      surname: 'Bar',
      phone: '123',
      email: 'foo@bar.com',
      cep: '00000-000',
      photo: null,
      is_active: true,
      checked: true,
      enterprise: {
        id: 'ent1',
        company_acronym: 'ACR',
        company_fantasy: 'Fantasy',
      },
      rule: { id: 'r1', name: 'USER' },
      validation_id: null,
      created_at: new Date(),
      updated_at: new Date(),
      passoword: 'hashed',
    };
    (prisma.users.findFirst as jest.Mock).mockResolvedValue(mockUser);
    (compare as jest.Mock).mockResolvedValue(true);

    const data = { email: 'foo@bar.com', password: 'plain' };

    const result = await authService.signIn(data);

    expect(prisma.users.findFirst).toHaveBeenCalledWith({
      where: { email: data.email },
      include: {
        enterprise: expect.any(Object),
        rule: expect.any(Object),
      },
    });
    expect(compare).toHaveBeenCalledWith(data.password, mockUser.passoword);
    expect(jwtService.signAsync).toHaveBeenCalled();
    expect(result).toEqual({
      user: expect.objectContaining({
        id: mockUser.id,
        email: mockUser.email,
        enterprise: mockUser.enterprise,
        rule: mockUser.rule,
      }),
      access_token: 'signed_token',
    });
  });

  it('should throw NotFoundException when user does not exist', async () => {
    (prisma.users.findFirst as jest.Mock).mockResolvedValue(null);

    await expect(
      authService.signIn({ email: 'no@user.com', password: 'any' }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should throw UnauthorizedException when user is inactive', async () => {
    const mockUser = {
      id: '1',
      name: 'Foo',
      surname: 'Bar',
      phone: '123',
      email: 'foo@bar.com',
      cep: '00000-000',
      photo: null,
      is_active: false, // ⛔ inativo
      checked: true,
      enterprise: {
        id: 'ent1',
        company_acronym: 'ACR',
        company_fantasy: 'Fantasy',
      },
      rule: { id: 'r1', name: 'USER' },
      validation_id: null,
      created_at: new Date(),
      updated_at: new Date(),
      passoword: 'hashed',
    };

    (prisma.users.findFirst as jest.Mock).mockResolvedValue(mockUser);
    (compare as jest.Mock).mockResolvedValue(true);

    await expect(
      authService.signIn({ email: 'foo@bar.com', password: 'plain' }),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException when password mismatch', async () => {
    const mockUser = { email: 'foo@bar.com', passoword: 'hashed' } as any;
    (prisma.users.findFirst as jest.Mock).mockResolvedValue(mockUser);
    (compare as jest.Mock).mockResolvedValue(false);

    await expect(
      authService.signIn({ email: 'foo@bar.com', password: 'wrong' }),
    ).rejects.toThrow(UnauthorizedException);
  });
});
