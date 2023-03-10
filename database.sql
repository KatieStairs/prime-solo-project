
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
    "recipe_id" SERIAL PRIMARY KEY,
    "unfinished_recording" VARCHAR (1000),
    "recipe_author" VARCHAR(255),
    "recipe_name" VARCHAR (500),
    "recipe_ingredients" VARCHAR (10000),
    "recipe_directions" VARCHAR (10000),
    "recipe_notes" VARCHAR (1000),
    "user_id" INTEGER REFERENCES "user" 
);

CREATE TABLE "finalized_recipes" (
    "recipe_id" SERIAL PRIMARY KEY,
    "finalized_recording" VARCHAR (1000),
    "finalized_author" VARCHAR (500) NOT NULL,
    "finalized_recipe_name" VARCHAR (500) NOT NULL,
    "finalized_ingredients" VARCHAR (10000) NOT NULL,
    "finalized_directions" VARCHAR (10000) NOT NULL,
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

INSERT INTO "unfinished_recipes" ("recipe_id", "unfinished_recording", "recipe_author", "recipe_name", "recipe_ingredients", "recipe_directions", "recipe_notes")
VALUES 
('20', '2N/A ..yet!', 'Katie Stairs', 'Tacos','Beef, tortillas, cheese', 'Cook', 'Eat'), 
('30', '3N/A ..yet!', 'Ryan Stairs', 'Scrambled Eggs', '2 Eggs, 2 Tbsp of butter split into 1 Tbsp each', 'Cook the eggs in the pan and toast the bread and then butter it', 'Spoken/Written by Ryan Stairs'),
('40', '4N/A ..yet!', 'Katie Stairs', 'Thai Curry Chicken', '4 bone in skinless chicken thighs, rice, thai curry paste, 1 can of coconut milk', 'Cook chicken, make sauce, cook rice, put together', 'I need to find the bomb recipe I found for the first time I made this!'),
('50', '5N/A ..yet!', 'Jamie Oliver', 'Family spaghetti Bolognese','3 red onions, 2 cloves of garlic, 3 carrots, 3 sticks of celery, 2 sprigs of fresh rosemary, 2 rashers of higher-welfare smoked streaky bacon , or pancetta, olive oil, 500 g lean beef mince, 1 x 400 g tin of quality chopped tomatoes, 1 tablespoon tomato purée, 1 tablespoon balsamic vinegar , or red wine vinegar, 3 fresh bay leaves, 1 organic low-salt beef stock cube, 500 g dried spaghetti, 40 g Parmesan cheese , optional', 'On a chopping board, peel and finely chop the onions, garlic and carrots, then trim and finely chop the celery. Pick and finely chop the rosemary leaves, then finely slice the bacon or pancetta. Put a large saucepan on a medium-high heat and add 1 tablespoon olive oil. Add the bacon, rosemary, garlic and veg, then cook with the lid ajar for 10 to 15 minutes, or until softened and just turning golden, stirring occasionally. Stir in the mince, turn the heat up to high and cook for 5 to 10 minutes, or until browned all over,stirring and breaking it up with a spoon as you go. Add the tomatoes, tomato purée, vinegar and bay leaves. Fill and boil the kettle. Crumble in the stock cube and pour in 400ml boiling water. Stir well, turn the heat up to high and bring to the boil. Season with pepper, reduce to a low heat, then cover and simmer for around 1 hour, stirring occasionally. Remove the lid and continue cooking for 15 to 20 minutes, or until thickened and reduced. Meanwhile... Re-fill and boil the kettle. Carefully fill a large pot three quarters of the way up with boiling water, add a tiny pinch of salt and bring back to the boil. Add the spaghetti and cook according to packet instructions – you want to cook your pasta until it is al dente. This translates as ‘to the tooth’ and means that it should be soft enough to eat, but still have a bit of a bite and firmness to it. Use the timings on the packet instructions as a guide, but try some just before the time is up to make sure it’s perfectly cooked. Using a microplane, finely grate the Parmesan cheese onto a clean chopping board (if using). Once the spaghetti is done, ladle out and reserve a cup of cooking water and keep it to one side, then drain in a colander over the sink. Taste the Bolognese sauce and season with a little more pepper or vinegar, if you think it needs it. Carefully pick out and discard the bay leaves. Put half the sauce into a container, leave to cool, then freeze for another day. Stir the spaghetti into the remaining sauce, adding a splash of pasta water to loosen, if needed. Divide between bowls and sprinkle with Parmesan cheese (if using), then serve', 'Website: https://www.jamieoliver.com/recipes/pasta-recipes/family-spaghetti-bolognese/');

INSERT INTO "finalized_recipes" ("recipe_id", "finalized_recording", "finalized_author", "finalized_recipe_name", "finalized_ingredients", "finalized_directions", "finalized_notes")
VALUES 
('22', '2N/A ..yet!', 'Katie Stairs', 'Enchiladas','tortillas, chicken', 'Cook', '2testNotes'), 
('33', '3N/A ..yet!', 'Ryan Stairs', 'Chocolate Mug Cake', 'Cocoa powder, flour', '3testDirections', '3testNotes'),
('55', '5N/A ..yet!', 'Katie Stairs', 'Sausage Pasta with Broccoli and Tomatoes', '350 g broccoli, 4 higher-welfare chipolata sausages, 1-2 fresh red chillies, olive oil, 2 teaspoons fennel seeds, 4 cloves of garlic, 2 onions, ½ a bunch of fresh oregano, (15g), 2 tablespoons red wine vinegar, 1 x 400 g tin of plum tomatoes, 300 g dried wholewheat tagliatelle, 40 g Parmesan cheese', 'Chop the broccoli florets off the stalk. Cut the woody end off the stalk, halve the stalk lengthways and put into a large pan of boiling salted water with the sausages and whole chilli(es). Pop the lid on, boil for 5 minutes, then remove, leaving the water on the lowest heat. Meanwhile, chop the broccoli florets into nice bite-sized chunks and put aside for later. Once cool enough to handle, finely slice the sausages, broccoli stalk and chilli and place in a large frying pan on a medium heat with 1 tablespoon of oil, the fennel seeds and a pinch of sea salt and black pepper. Stir and fry while you peel and finely slice the garlic and onions. Once the sausage is lightly golden, stir in the garlic, followed a minute later by the onions, then pick in the oregano leaves. Cook for 15 minutes, or until softened, stirring occasionally. Add the vinegar and cook completely away, then pour in the tomatoes, breaking them up with a wooden spoon. Half-fill the tin with water, swirl around and pour into the pan. Simmer for 15 more minutes, or until thickened, then taste and season to perfection. Meanwhile, bring the pan of water back up to boil, and cook the pasta according to the packet instructions, adding the broccoli florets for the last 4 minutes. Drain the pasta and broccoli, reserving a mugful of cooking water. Toss through the sauce, loosening with a little reserved water, if needed. Finely grate in most of the Parmesan and toss together, then serve with the rest of the Parmesan grated over the top.', 'Go for spicy, it is so much better!'),
('44', '4N/A ..yet!', 'Wesley Rolf', 'Guacamole', '2 Avacados, 1 red onion, 1 large clove of garlic, salt, pepper, red pepper flakes', 'Mix together and serve', '4testNotes');