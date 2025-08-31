-- CreateTable
CREATE TABLE "public"."links" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "id_music" TEXT NOT NULL,
    "id_type" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."links" ADD CONSTRAINT "links_id_music_fkey" FOREIGN KEY ("id_music") REFERENCES "public"."musics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."links" ADD CONSTRAINT "links_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "public"."types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
