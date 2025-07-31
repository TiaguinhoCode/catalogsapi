-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "email" TEXT,
ADD COLUMN     "enterprise_id" TEXT,
ADD COLUMN     "passoword" TEXT;

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_enterprise_id_fkey" FOREIGN KEY ("enterprise_id") REFERENCES "public"."companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
