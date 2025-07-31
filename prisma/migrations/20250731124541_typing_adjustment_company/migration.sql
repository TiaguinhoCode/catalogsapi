/*
  Warnings:

  - Changed the type of `company_number` on the `companies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."companies" DROP COLUMN "company_number",
ADD COLUMN     "company_number" INTEGER NOT NULL;
