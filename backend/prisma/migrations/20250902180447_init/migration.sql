-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "observation" TEXT,
    "id_user" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."musics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url_image" TEXT NOT NULL,
    "link_CifraClub" TEXT NOT NULL,
    "id_youtube" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."levites" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "levites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."typesLevites" (
    "id" TEXT NOT NULL,
    "id_type" TEXT NOT NULL,
    "id_levite" TEXT NOT NULL,

    CONSTRAINT "typesLevites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."eventsMusics" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "id_category" TEXT,
    "id_music" TEXT NOT NULL,
    "id_event" TEXT NOT NULL,

    CONSTRAINT "eventsMusics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."eventsLevites" (
    "id" TEXT NOT NULL,
    "id_type" TEXT NOT NULL,
    "id_levite" TEXT NOT NULL,
    "id_event" TEXT NOT NULL,

    CONSTRAINT "eventsLevites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."links" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "id_music" TEXT NOT NULL,
    "id_type" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."events" ADD CONSTRAINT "events_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."musics" ADD CONSTRAINT "musics_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "public"."categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."typesLevites" ADD CONSTRAINT "typesLevites_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "public"."types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."typesLevites" ADD CONSTRAINT "typesLevites_id_levite_fkey" FOREIGN KEY ("id_levite") REFERENCES "public"."levites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."eventsMusics" ADD CONSTRAINT "eventsMusics_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "public"."events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."eventsMusics" ADD CONSTRAINT "eventsMusics_id_music_fkey" FOREIGN KEY ("id_music") REFERENCES "public"."musics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."eventsMusics" ADD CONSTRAINT "eventsMusics_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "public"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."eventsLevites" ADD CONSTRAINT "eventsLevites_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "public"."events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."eventsLevites" ADD CONSTRAINT "eventsLevites_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "public"."types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."eventsLevites" ADD CONSTRAINT "eventsLevites_id_levite_fkey" FOREIGN KEY ("id_levite") REFERENCES "public"."levites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."links" ADD CONSTRAINT "links_id_music_fkey" FOREIGN KEY ("id_music") REFERENCES "public"."musics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."links" ADD CONSTRAINT "links_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "public"."types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
