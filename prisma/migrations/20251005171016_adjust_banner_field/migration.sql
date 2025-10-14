-- DropForeignKey
ALTER TABLE "public"."banners" DROP CONSTRAINT "banners_product_id_fkey";

-- AlterTable
ALTER TABLE "public"."banners" ALTER COLUMN "product_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."banners" ADD CONSTRAINT "banners_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
