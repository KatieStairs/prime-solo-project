
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
    "unfinished_recording" VARCHAR (1000),
    "recipe_author" VARCHAR(255),
    "recipe_name" VARCHAR (500),
    "recipe_ingredients" VARCHAR (1000),
    "recipe_directions" VARCHAR (1000),
    "recipe_notes" VARCHAR (1000),
    "user_id" INTEGER REFERENCES "user" 
);

CREATE TABLE "finalized_recipes" (
    "id" SERIAL PRIMARY KEY,
    "finalized_recording" VARCHAR (1000),
    "finalized_author" VARCHAR (500) NOT NULL,
    "finalized_recipe_name" VARCHAR (500) NOT NULL,
    "finalized_ingredients" VARCHAR (1000) NOT NULL,
    "finalized_directions" VARCHAR (1000) NOT NULL,
    "finalized_notes" VARCHAR (1000),
    "finalized_photos" VARCHAR (1000),
    "finalized_user_id" INTEGER REFERENCES "user"
);

INSERT INTO "user" ("id", "username", "password")
VALUES 
('2', 'Kstairs2', '2Ryan9521'),
('3', 'Kstairs3', '3Ryan9521'),
('4', 'Kstairs4', '4Ryan9521'),
('5', 'Kstairs5', '5Ryan9521');

INSERT INTO "unfinished_recipes" ("id", "unfinished_recording", "recipe_author", "recipe_name", "recipe_ingredients", "recipe_directions", "recipe_notes")
VALUES 
('2', '2N/A ..yet!', '2testauthor', '2testName','2testIngredients', '2testDirections', '2testNotes'), 
('3', '3N/A ..yet!', '3testauthor', '3testName', '3testIngredients', '3testDirections', '3testNotes'),
('4', '4N/A ..yet!', '4testauthor', '4testName', '4testIngredients', '4testDirections', '4testNotes'),
('5', '5N/A ..yet!', '5testauthor', '5testName','5testIngredients', '5testDirections', '5testNotes');

INSERT INTO "finalized_recipes" ("id", "finalized_recording", "finalized_author", "finalized_recipe_name", "finalized_ingredients", "finalized_directions", "finalized_notes")
VALUES 
('2', '2N/A ..yet!', '2testauthor', '2testName','2testIngredients', '2testDirections', '2testNotes'), 
('3', '3N/A ..yet!', '3testauthor', '3testName', '3testIngredients', '3testDirections', '3testNotes'),
('4', '4N/A ..yet!', '4testauthor', '4testName', '4testIngredients', '4testDirections', '4testNotes'),
('5', '5N/A ..yet!', '5testauthor', '5testName','5testIngredients', '5testDirections', '5testNotes');

SELECT * from "unfinished_recipes";

INSERT INTO "unfinished_recipes" ("recipe_ingredients")
VALUES ('1');

DROP TABLE "user";
DROP TABLE "unfinished_recipes";
DROP TABLE "finalized_recipes";