/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `warehouses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "warehouses_name_key" ON "public"."warehouses"("name");
