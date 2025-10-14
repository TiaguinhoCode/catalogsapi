/*
  Warnings:

  - You are about to drop the column `display_order` on the `brands` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[display_order]` on the table `banners` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "banners" ADD COLUMN     "display_order" INTEGER;

-- AlterTable
ALTER TABLE "brands" DROP COLUMN "display_order";

-- CreateIndex
CREATE UNIQUE INDEX "banners_display_order_key" ON "banners"("display_order");
