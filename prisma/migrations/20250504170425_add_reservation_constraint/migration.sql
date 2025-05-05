/*
  Warnings:

  - A unique constraint covering the columns `[owner,day,time]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reservation_owner_day_time_key" ON "Reservation"("owner", "day", "time");
