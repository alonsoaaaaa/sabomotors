-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarOffers" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "mileage" DOUBLE PRECISION,
    "make" TEXT,
    "image" TEXT[],
    "vin" TEXT,
    "FactureType" TEXT NOT NULL,
    "insurance" TEXT,
    "platenum" TEXT,
    "contact_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CarOffers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableCars" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "downpayment" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "image" TEXT[],
    "FactureType" TEXT,
    "credit" TEXT,
    "features" TEXT[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "AvailableCars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
