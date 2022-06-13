/*
  Warnings:

  - A unique constraint covering the columns `[endpoint]` on the table `PushNotification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PushNotification_endpoint_key" ON "PushNotification"("endpoint");
