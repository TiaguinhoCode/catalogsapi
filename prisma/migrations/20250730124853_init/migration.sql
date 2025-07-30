-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cep" TEXT,
    "photo" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "rule_id" TEXT NOT NULL,
    "validation_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."rules" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."companies" (
    "id" TEXT NOT NULL,
    "company_fantasy" TEXT NOT NULL,
    "company_reason" TEXT NOT NULL,
    "company_acronym" TEXT NOT NULL,
    "logo_company" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cep_address" TEXT NOT NULL,
    "company_number" TEXT NOT NULL,
    "phone" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "warehouse_id" TEXT,
    "opening_hours" TIME NOT NULL,
    "close_hours" TIME NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."warehouses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "warehouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."stocks" (
    "warehouse_id" TEXT NOT NULL,
    "current_quantity" INTEGER NOT NULL,
    "minimium_quantity" INTEGER NOT NULL,
    "maximum_quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "purchase_price" DOUBLE PRECISION NOT NULL,
    "cost_price" DOUBLE PRECISION NOT NULL,
    "has_discount" BOOLEAN NOT NULL DEFAULT false,
    "discount_percentage" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "public"."products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stock_id" TEXT NOT NULL,
    "brand_id" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "description" TEXT,
    "sales_unit" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "url_imagem" TEXT NOT NULL,
    "date_of_inactivation" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."brands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."suppliers" (
    "id" TEXT NOT NULL,
    "company_fantasy" TEXT NOT NULL,
    "company_reason" TEXT NOT NULL,
    "company_acronym" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."orders" (
    "id" TEXT NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "completion_date" TIMESTAMP(3) NOT NULL,
    "status_id" TEXT NOT NULL,
    "cancellation_date" TIMESTAMP(3),
    "delivery_date" TIMESTAMP(3),
    "gross_value" DOUBLE PRECISION NOT NULL,
    "net_value" DOUBLE PRECISION NOT NULL,
    "shipping_price" DOUBLE PRECISION NOT NULL,
    "type_sale" TEXT NOT NULL,
    "cep_addres" TEXT,
    "addres_number" TEXT,
    "delivery_code" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."status" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."method_payments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "method_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."orders_itens" (
    "orders_id" TEXT NOT NULL,
    "products_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."_ProductsToSuppliers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductsToSuppliers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_Method_PaymentsToOrders" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Method_PaymentsToOrders_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_validation_id_key" ON "public"."users"("validation_id");

-- CreateIndex
CREATE UNIQUE INDEX "companies_warehouse_id_key" ON "public"."companies"("warehouse_id");

-- CreateIndex
CREATE UNIQUE INDEX "stocks_warehouse_id_key" ON "public"."stocks"("warehouse_id");

-- CreateIndex
CREATE UNIQUE INDEX "products_product_code_key" ON "public"."products"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "orders_itens_orders_id_key" ON "public"."orders_itens"("orders_id");

-- CreateIndex
CREATE UNIQUE INDEX "orders_itens_products_id_key" ON "public"."orders_itens"("products_id");

-- CreateIndex
CREATE INDEX "_ProductsToSuppliers_B_index" ON "public"."_ProductsToSuppliers"("B");

-- CreateIndex
CREATE INDEX "_Method_PaymentsToOrders_B_index" ON "public"."_Method_PaymentsToOrders"("B");

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "public"."rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."companies" ADD CONSTRAINT "companies_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "public"."warehouses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."stocks" ADD CONSTRAINT "stocks_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "public"."warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "public"."stocks"("warehouse_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "public"."status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."orders_itens" ADD CONSTRAINT "orders_itens_orders_id_fkey" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."orders_itens" ADD CONSTRAINT "orders_itens_products_id_fkey" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProductsToSuppliers" ADD CONSTRAINT "_ProductsToSuppliers_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProductsToSuppliers" ADD CONSTRAINT "_ProductsToSuppliers_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_Method_PaymentsToOrders" ADD CONSTRAINT "_Method_PaymentsToOrders_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."method_payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_Method_PaymentsToOrders" ADD CONSTRAINT "_Method_PaymentsToOrders_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
