-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "projects";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "roley_chat";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "stripe";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "threads";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "users";

-- CreateTable
CREATE TABLE "roley_chat"."roley_message" (
    "id" SERIAL NOT NULL,
    "roley_chat_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ai_generated" BOOLEAN NOT NULL,

    CONSTRAINT "roley_message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roley_chat"."roley_chat" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "step" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "roley_chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."auth" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "auth_provider" TEXT NOT NULL,

    CONSTRAINT "auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."subscription" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "stripe_id" TEXT NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."user" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "last_login" TIMESTAMP(6),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."application" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "driver_application_id" TEXT NOT NULL,
    "cover_letter" TEXT NOT NULL,
    "driver" TEXT NOT NULL,
    "application_url" TEXT NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."Actor" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "cover_letter" TEXT,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."backstage_applied" (
    "backstage_id" INTEGER NOT NULL,
    "application_id" INTEGER NOT NULL,

    CONSTRAINT "backstage_applied_pkey" PRIMARY KEY ("backstage_id","application_id")
);

-- CreateTable
CREATE TABLE "users"."castingnetworks_applied" (
    "castingnetworks_id" INTEGER NOT NULL,
    "application_id" INTEGER NOT NULL,

    CONSTRAINT "castingnetworks_applied_pkey" PRIMARY KEY ("castingnetworks_id","application_id")
);

-- CreateTable
CREATE TABLE "users"."backstage" (
    "id" SERIAL NOT NULL,
    "actor_id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "backstage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."castingnetworks" (
    "id" SERIAL NOT NULL,
    "actor_id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "castingnetworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."actor_age" (
    "id" SERIAL NOT NULL,
    "actor_id" INTEGER NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,

    CONSTRAINT "actor_age_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."actor_role_type" (
    "actor_id" INTEGER NOT NULL,
    "role_type_id" INTEGER NOT NULL,

    CONSTRAINT "actor_role_type_pkey" PRIMARY KEY ("actor_id","role_type_id")
);

-- CreateTable
CREATE TABLE "users"."actor_project_type" (
    "actor_id" INTEGER NOT NULL,
    "project_type_id" INTEGER NOT NULL,

    CONSTRAINT "actor_project_type_pkey" PRIMARY KEY ("actor_id","project_type_id")
);

-- CreateTable
CREATE TABLE "users"."actor_gender" (
    "actor_id" INTEGER NOT NULL,
    "gender_id" INTEGER NOT NULL,

    CONSTRAINT "actor_gender_pkey" PRIMARY KEY ("actor_id","gender_id")
);

-- CreateTable
CREATE TABLE "users"."actor_ethnicity" (
    "actor_id" INTEGER NOT NULL,
    "ethnicity_id" INTEGER NOT NULL,

    CONSTRAINT "actor_ethnicity_pkey" PRIMARY KEY ("actor_id","ethnicity_id")
);

-- CreateTable
CREATE TABLE "users"."actor_location" (
    "actor_id" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,

    CONSTRAINT "actor_location_pkey" PRIMARY KEY ("actor_id","location_id")
);

-- CreateTable
CREATE TABLE "projects"."user_role" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "projects"."role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "project_id" INTEGER,
    "driver_role_id" TEXT NOT NULL,
    "min_age" INTEGER NOT NULL,
    "max_age" INTEGER NOT NULL,
    "deadline" TIMESTAMP(6) NOT NULL,
    "role_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."ethnicity" (
    "id" SERIAL NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "driver_ethnicity" TEXT,

    CONSTRAINT "ethnicity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."ethnicity_match" (
    "role_id" INTEGER NOT NULL,
    "ethnicity_id" INTEGER NOT NULL,

    CONSTRAINT "ethnicity_match_pkey" PRIMARY KEY ("role_id","ethnicity_id")
);

-- CreateTable
CREATE TABLE "projects"."gender" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "driver_gender" TEXT,

    CONSTRAINT "gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."gender_match" (
    "role_id" INTEGER NOT NULL,
    "gender_id" INTEGER NOT NULL,

    CONSTRAINT "gender_match_pkey" PRIMARY KEY ("role_id","gender_id")
);

-- CreateTable
CREATE TABLE "projects"."genre" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,
    "driver_genre" TEXT,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."genre_match" (
    "project_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "genre_match_pkey" PRIMARY KEY ("project_id","genre_id")
);

-- CreateTable
CREATE TABLE "projects"."location" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "country" TEXT,
    "location_type" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."location_match" (
    "role_id" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,

    CONSTRAINT "location_match_pkey" PRIMARY KEY ("role_id","location_id")
);

-- CreateTable
CREATE TABLE "projects"."production_type_match" (
    "role_id" INTEGER NOT NULL,
    "production_type_id" INTEGER NOT NULL,

    CONSTRAINT "production_type_match_pkey" PRIMARY KEY ("role_id","production_type_id")
);

-- CreateTable
CREATE TABLE "projects"."productiontype" (
    "id" SERIAL NOT NULL,
    "production_type" TEXT NOT NULL,
    "driver_production_type" TEXT,

    CONSTRAINT "productiontype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "driver_origin" TEXT NOT NULL,
    "driver_project_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "project_url" TEXT NOT NULL,
    "project_info" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."rate" (
    "id" SERIAL NOT NULL,
    "rate" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "rate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."role_type_match" (
    "role_id" INTEGER NOT NULL,
    "role_type_id" INTEGER NOT NULL,

    CONSTRAINT "role_type_match_pkey" PRIMARY KEY ("role_id","role_type_id")
);

-- CreateTable
CREATE TABLE "projects"."roletype" (
    "id" SERIAL NOT NULL,
    "role_type" TEXT NOT NULL,
    "driver_role_type" TEXT,

    CONSTRAINT "roletype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects"."role_thread" (
    "role_id" INTEGER NOT NULL,
    "thread_id" INTEGER NOT NULL,

    CONSTRAINT "role_thread_pkey" PRIMARY KEY ("role_id","thread_id")
);

-- CreateTable
CREATE TABLE "threads"."thread" (
    "id" SERIAL NOT NULL,
    "driver_thread_id" INTEGER NOT NULL,
    "driver_origin" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "driver_thread_url" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "thread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threads"."attachment" (
    "id" SERIAL NOT NULL,
    "message_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "sizeKb" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "file_name" TEXT,

    CONSTRAINT "attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threads"."client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "driver_id" INTEGER NOT NULL,
    "driver_origin" TEXT NOT NULL,
    "profile_url" TEXT,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threads"."message" (
    "id" SERIAL NOT NULL,
    "thread_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),
    "driver_message_id" TEXT,
    "index_in_thread" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "being_sent" BOOLEAN,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threads"."sender" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "client_id" INTEGER,

    CONSTRAINT "sender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."contract" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "contract_version_number" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "application_id" INTEGER NOT NULL,

    CONSTRAINT "contract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roley_message_roley_chat_id_key" ON "roley_chat"."roley_message"("roley_chat_id");

-- CreateIndex
CREATE UNIQUE INDEX "roley_chat_user_id_key" ON "roley_chat"."roley_chat"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_user_id_key" ON "users"."subscription"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_stripe_id_key" ON "users"."subscription"("stripe_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "users"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "users"."user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "application_role_id_key" ON "users"."application"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "application_driver_application_id_key" ON "users"."application"("driver_application_id");

-- CreateIndex
CREATE UNIQUE INDEX "application_application_url_key" ON "users"."application"("application_url");

-- CreateIndex
CREATE UNIQUE INDEX "Actor_user_id_key" ON "users"."Actor"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "backstage_actor_id_key" ON "users"."backstage"("actor_id");

-- CreateIndex
CREATE UNIQUE INDEX "castingnetworks_actor_id_key" ON "users"."castingnetworks"("actor_id");

-- CreateIndex
CREATE UNIQUE INDEX "actor_age_actor_id_key" ON "users"."actor_age"("actor_id");

-- CreateIndex
CREATE UNIQUE INDEX "role_driver_role_id_key" ON "projects"."role"("driver_role_id");

-- CreateIndex
CREATE UNIQUE INDEX "ethnicity_driver_ethnicity_key" ON "projects"."ethnicity"("driver_ethnicity");

-- CreateIndex
CREATE UNIQUE INDEX "gender_driver_gender_key" ON "projects"."gender"("driver_gender");

-- CreateIndex
CREATE UNIQUE INDEX "genre_driver_genre_key" ON "projects"."genre"("driver_genre");

-- CreateIndex
CREATE UNIQUE INDEX "location_longitude_latitude_key" ON "projects"."location"("longitude", "latitude");

-- CreateIndex
CREATE UNIQUE INDEX "productiontype_driver_production_type_key" ON "projects"."productiontype"("driver_production_type");

-- CreateIndex
CREATE UNIQUE INDEX "project_driver_project_id_key" ON "projects"."project"("driver_project_id");

-- CreateIndex
CREATE UNIQUE INDEX "project_project_url_key" ON "projects"."project"("project_url");

-- CreateIndex
CREATE UNIQUE INDEX "rate_role_id_key" ON "projects"."rate"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "roletype_driver_role_type_key" ON "projects"."roletype"("driver_role_type");

-- CreateIndex
CREATE UNIQUE INDEX "thread_driver_thread_id_key" ON "threads"."thread"("driver_thread_id");

-- CreateIndex
CREATE UNIQUE INDEX "attachment_url_key" ON "threads"."attachment"("url");

-- CreateIndex
CREATE UNIQUE INDEX "client_driver_id_key" ON "threads"."client"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_profile_url_key" ON "threads"."client"("profile_url");

-- CreateIndex
CREATE UNIQUE INDEX "message_driver_message_id_key" ON "threads"."message"("driver_message_id");

-- CreateIndex
CREATE UNIQUE INDEX "sender_user_id_key" ON "threads"."sender"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "sender_client_id_key" ON "threads"."sender"("client_id");

-- AddForeignKey
ALTER TABLE "roley_chat"."roley_message" ADD CONSTRAINT "roley_message_roley_chat_id_fkey" FOREIGN KEY ("roley_chat_id") REFERENCES "roley_chat"."roley_chat"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roley_chat"."roley_chat" ADD CONSTRAINT "roley_chat_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."auth" ADD CONSTRAINT "auth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."subscription" ADD CONSTRAINT "subscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."application" ADD CONSTRAINT "application_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."application" ADD CONSTRAINT "application_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."Actor" ADD CONSTRAINT "Actor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."backstage_applied" ADD CONSTRAINT "backstage_applied_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "users"."application"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."backstage_applied" ADD CONSTRAINT "backstage_applied_backstage_id_fkey" FOREIGN KEY ("backstage_id") REFERENCES "users"."backstage"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."castingnetworks_applied" ADD CONSTRAINT "castingnetworks_applied_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "users"."application"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."castingnetworks_applied" ADD CONSTRAINT "castingnetworks_applied_castingnetworks_id_fkey" FOREIGN KEY ("castingnetworks_id") REFERENCES "users"."castingnetworks"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."backstage" ADD CONSTRAINT "backstage_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."castingnetworks" ADD CONSTRAINT "castingnetworks_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_age" ADD CONSTRAINT "actor_age_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_role_type" ADD CONSTRAINT "actor_role_type_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_role_type" ADD CONSTRAINT "actor_role_type_role_type_id_fkey" FOREIGN KEY ("role_type_id") REFERENCES "projects"."roletype"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_project_type" ADD CONSTRAINT "actor_project_type_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_project_type" ADD CONSTRAINT "actor_project_type_project_type_id_fkey" FOREIGN KEY ("project_type_id") REFERENCES "projects"."productiontype"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_gender" ADD CONSTRAINT "actor_gender_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_gender" ADD CONSTRAINT "actor_gender_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "projects"."gender"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_ethnicity" ADD CONSTRAINT "actor_ethnicity_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_ethnicity" ADD CONSTRAINT "actor_ethnicity_ethnicity_id_fkey" FOREIGN KEY ("ethnicity_id") REFERENCES "projects"."ethnicity"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_location" ADD CONSTRAINT "actor_location_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"."Actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."actor_location" ADD CONSTRAINT "actor_location_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "projects"."location"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."role" ADD CONSTRAINT "role_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"."project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."ethnicity_match" ADD CONSTRAINT "ethnicity_match_ethnicity_id_fkey" FOREIGN KEY ("ethnicity_id") REFERENCES "projects"."ethnicity"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."ethnicity_match" ADD CONSTRAINT "ethnicity_match_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."gender_match" ADD CONSTRAINT "gender_match_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "projects"."gender"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."gender_match" ADD CONSTRAINT "gender_match_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."genre_match" ADD CONSTRAINT "genre_match_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "projects"."genre"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."genre_match" ADD CONSTRAINT "genre_match_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"."project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."location_match" ADD CONSTRAINT "location_match_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "projects"."location"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."location_match" ADD CONSTRAINT "location_match_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."production_type_match" ADD CONSTRAINT "production_type_match_production_type_id_fkey" FOREIGN KEY ("production_type_id") REFERENCES "projects"."productiontype"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."production_type_match" ADD CONSTRAINT "production_type_match_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."rate" ADD CONSTRAINT "rate_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."role_type_match" ADD CONSTRAINT "role_type_match_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."role_type_match" ADD CONSTRAINT "role_type_match_role_type_id_fkey" FOREIGN KEY ("role_type_id") REFERENCES "projects"."roletype"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."role_thread" ADD CONSTRAINT "role_thread_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects"."role_thread" ADD CONSTRAINT "role_thread_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"."thread"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "threads"."thread" ADD CONSTRAINT "thread_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "threads"."client"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "threads"."thread" ADD CONSTRAINT "thread_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "threads"."attachment" ADD CONSTRAINT "attachment_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "threads"."message"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "threads"."message" ADD CONSTRAINT "message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "threads"."sender"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "threads"."message" ADD CONSTRAINT "message_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"."thread"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "threads"."sender" ADD CONSTRAINT "sender_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "threads"."client"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "threads"."sender" ADD CONSTRAINT "sender_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."contract" ADD CONSTRAINT "contract_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "users"."application"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."contract" ADD CONSTRAINT "contract_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "threads"."client"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."contract" ADD CONSTRAINT "contract_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "projects"."role"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."contract" ADD CONSTRAINT "contract_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
