/*
  Warnings:

  - The required column `id` was added to the `stocks` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "public"."products" DROP CONSTRAINT "products_stock_id_fkey";

-- DropIndex
DROP INDEX "public"."stocks_warehouse_id_key";

-- AlterTable
ALTER TABLE "public"."stocks" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "stocks_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "public"."stocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
