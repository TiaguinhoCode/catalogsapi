-- DropForeignKey
ALTER TABLE "banner" DROP CONSTRAINT "banner_product_id_fkey";

-- AddForeignKey
ALTER TABLE "banner" ADD CONSTRAINT "banner_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
