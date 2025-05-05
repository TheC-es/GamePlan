/*
  Warnings:

  - You are about to drop the `Stuff` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Sport" AS ENUM ('Volleyball', 'Basketball');

-- CreateEnum
CREATE TYPE "Day" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');

-- DropTable
DROP TABLE "Stuff";

-- DropEnum
DROP TYPE "Condition";

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,
    "sport" "Sport" NOT NULL,
    "day" "Day" NOT NULL,
    "time" INTEGER NOT NULL,
    "team_num" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
