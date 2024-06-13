/*
  Warnings:

  - You are about to drop the column `position` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `workPlace` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RolePermission` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `positionId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workPlaceId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RolePermission" DROP CONSTRAINT "_RolePermission_A_fkey";

-- DropForeignKey
ALTER TABLE "_RolePermission" DROP CONSTRAINT "_RolePermission_B_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "position",
DROP COLUMN "workPlace",
ADD COLUMN     "positionId" INTEGER NOT NULL,
ADD COLUMN     "workPlaceId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Permission";

-- DropTable
DROP TABLE "_RolePermission";

-- DropEnum
DROP TYPE "Privilege";

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkPlace" (
    "id" SERIAL NOT NULL,
    "place" VARCHAR(150) NOT NULL,
    "address" VARCHAR(255),

    CONSTRAINT "WorkPlace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Position_title_key" ON "Position"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_workPlaceId_fkey" FOREIGN KEY ("workPlaceId") REFERENCES "WorkPlace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
