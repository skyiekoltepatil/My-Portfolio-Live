CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
