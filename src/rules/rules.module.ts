// Nest
import { Module } from '@nestjs/common';

// Services
import { RulesService } from './rules.service';

// Controller
import { RulesController } from './rules.controller';

@Module({
  controllers: [RulesController],
  providers: [RulesService],
})
export class RulesModule {}
