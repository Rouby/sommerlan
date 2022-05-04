-- AlterTable
ALTER TABLE "User" ADD COLUMN     "notificationSubscriptions" TEXT[];

-- AlterTable
ALTER TABLE "Workload" ADD COLUMN     "order" SERIAL NOT NULL,
ADD COLUMN     "scheduledOnDays" INTEGER[];

-- CreateTable
CREATE TABLE "WorkloadDependency" (
    "dependentId" TEXT NOT NULL,
    "dependencyId" TEXT NOT NULL,

    CONSTRAINT "WorkloadDependency_pkey" PRIMARY KEY ("dependentId","dependencyId")
);

-- AddForeignKey
ALTER TABLE "WorkloadDependency" ADD CONSTRAINT "WorkloadDependency_dependentId_fkey" FOREIGN KEY ("dependentId") REFERENCES "Workload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkloadDependency" ADD CONSTRAINT "WorkloadDependency_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Workload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
