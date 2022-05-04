-- DropForeignKey
ALTER TABLE "Workload" DROP CONSTRAINT "Workload_partyId_fkey";

-- DropForeignKey
ALTER TABLE "WorkloadDependency" DROP CONSTRAINT "WorkloadDependency_dependencyId_fkey";

-- DropForeignKey
ALTER TABLE "WorkloadDependency" DROP CONSTRAINT "WorkloadDependency_dependentId_fkey";

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkloadDependency" ADD CONSTRAINT "WorkloadDependency_dependentId_fkey" FOREIGN KEY ("dependentId") REFERENCES "Workload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkloadDependency" ADD CONSTRAINT "WorkloadDependency_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Workload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
