-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "company_fantasy" TEXT NOT NULL,
    "company_reason" TEXT NOT NULL,
    "company_acronym" TEXT NOT NULL,
    "logo_company" TEXT,
    "cnpj" TEXT NOT NULL,
    "cep_address" TEXT NOT NULL,
    "phone" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "opening_hours" TIME(6) NOT NULL,
    "close_hours" TIME(6) NOT NULL,
    "session_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "company_number" INTEGER NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cep" TEXT,
    "photo_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "email" TEXT,
    "passoword" TEXT,
    "enterprise_id" TEXT,
    "rules" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_session_id_key" ON "companies"("session_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_enterprise_id_fkey" FOREIGN KEY ("enterprise_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
