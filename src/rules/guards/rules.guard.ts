// Nest
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// Decorater
import { RULES_KEY } from '../decorators/rules.decorator';

// Enumerator
import { rules } from '../rules.enum';

@Injectable()
export class RulesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRules = this.reflector.getAllAndOverride<rules[]>(RULES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRules) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const userRule = user?.rule?.name;

    const hasRule = requiredRules.includes(userRule);

    if (!hasRule) {
      throw new ForbiddenException('Acesso não permitido');
    }

    return true;
  }
}
