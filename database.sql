
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "unfinished_recipes" (
    "id" SERIAL PRIMARY KEY,
    "unfinished_recording" VARCHAR (1000) NOT NULL,
    "recipe_ingredients" VARCHAR (1000) NOT NULL,
    "recipe_directions" VARCHAR (1000) NOT NULL,
    "recipe_notes" VARCHAR (1000),
    "user_id" INTEGER REFERENCES "user"
);

CREATE TABLE "finalized_recipes" (
    "id" SERIAL PRIMARY KEY,
    "finalized_recording" VARCHAR (1000) NOT NULL,
    "finalized_ingredients" VARCHAR (1000) NOT NULL,
    "finalized_directions" VARCHAR (1000) NOT NULL,
    "finalized_notes" VARCHAR (1000),
    "finalized_photos" VARCHAR (1000),
    "finalized_user_id" INTEGER REFERENCES "user"
);

DROP TABLE "user";
DROP TABLE "unfinished_recipes";
DROP TABLE "finalized_recipes";