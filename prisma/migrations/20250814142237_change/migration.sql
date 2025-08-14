-- DropForeignKey
ALTER TABLE "public"."products" DROP CONSTRAINT "products_stock_id_fkey";

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "public"."stocks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
