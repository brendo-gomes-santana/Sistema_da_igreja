/*
  Warnings:

  - Added the required column `order` to the `eventsMusics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."eventsMusics" ADD COLUMN     "id_category" TEXT,
ADD COLUMN     "order" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."eventsMusics" ADD CONSTRAINT "eventsMusics_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "public"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
