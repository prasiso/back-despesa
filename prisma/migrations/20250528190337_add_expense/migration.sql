-- CreateTable
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE "expense" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" VARCHAR NOT NULL,
    "amount" REAL NOT NULL,
    "category" VARCHAR NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "norm_title" VARCHAR NOT NULL DEFAULT '',
    "norm_category" VARCHAR NOT NULL DEFAULT '',

    CONSTRAINT "expense_pk" PRIMARY KEY ("id")
);
