/*
  Warnings:

  - You are about to drop the column `assigneeId` on the `Workload` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Workload" DROP CONSTRAINT "Workload_assigneeId_fkey";

-- AlterTable
ALTER TABLE "Workload" DROP COLUMN "assigneeId",
ADD COLUMN     "maxAssignees" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "_UserToWorkload" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWorkload_AB_unique" ON "_UserToWorkload"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWorkload_B_index" ON "_UserToWorkload"("B");

-- AddForeignKey
ALTER TABLE "_UserToWorkload" ADD CONSTRAINT "_UserToWorkload_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkload" ADD CONSTRAINT "_UserToWorkload_B_fkey" FOREIGN KEY ("B") REFERENCES "Workload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
