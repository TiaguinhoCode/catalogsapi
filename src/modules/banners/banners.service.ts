// Nest
import { Injectable } from '@nestjs/common';

// Services
import { PrismaService } from './../../database/prisma.service';
import { createBanner } from './services/create.banner.service';
import { listBanners } from './services/list.banners.service';
import { updateBanners } from './services/update.banners.service';
import { removeBanners } from './services/remove.banner.service';

// Tipagem
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Injectable()
export class BannersService {
  constructor(private readonly client: PrismaService) {}

  create(data: CreateBannerDto) {
    return createBanner({ data, client: this.client });
  }

  findAll() {
    return listBanners({ client: this.client });
  }

  findOne(id: string) {
    return listBanners({ client: this.client, id });
  }

  update({ id, data }: { id: string; data: UpdateBannerDto }) {
    return updateBanners({ client: this.client, id, data });
  }

  remove(id: string) {
    return removeBanners({ client: this.client, id });
  }
}
