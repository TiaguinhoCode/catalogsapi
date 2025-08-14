// Nest
import { forwardRef, Module } from '@nestjs/common';

// Controler
import { AppController } from './app.controller';

// Data
import { DatabaseModule } from './database/database.module';

// Modulo
import { RulesModule } from './rules/rules.module';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './users/auth/auth.module';

// Service
import { MailService } from './mail/mail.service';
import { WarehousesModule } from './warehouses/warehouses.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { StocksModule } from './stocks/stocks.module';

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
  ],
  controllers: [AppController],
  providers: [MailService],
})
export class AppModule {}
