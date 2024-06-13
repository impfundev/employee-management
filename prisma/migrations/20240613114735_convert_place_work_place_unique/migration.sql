/*
  Warnings:

  - A unique constraint covering the columns `[place]` on the table `WorkPlace` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WorkPlace_place_key" ON "WorkPlace"("place");
