/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `Stocks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `product_id` to the `Stocks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_stock_id_fkey";

-- AlterTable
ALTER TABLE "Stocks" ADD COLUMN     "product_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stocks_product_id_key" ON "Stocks"("product_id");

-- AddForeignKey
ALTER TABLE "Stocks" ADD CONSTRAINT "Stocks_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
