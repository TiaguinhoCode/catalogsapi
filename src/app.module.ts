// Nest
import { forwardRef, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

// Controler
import { AppController } from './app.controller';

// Data
import { DatabaseModule } from './database/database.module';

// Modulo
import { RulesModule } from './modules/rules/rules.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/users/auth/auth.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { BrandsModule } from './modules/brands/brands.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { StocksModule } from './modules/stocks/stocks.module';
import { ChatsModule } from './modules/chats/chats.module';

// Service
import { MailService } from './modules/mail/mail.service';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    RulesModule,
    CompaniesModule,
    forwardRef(() => AuthModule),
    WarehousesModule,
    BrandsModule,
    CategoriesModule,
    ProductsModule,
    StocksModule,
    ChatsModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [MailService],
})
export class AppModule {}
