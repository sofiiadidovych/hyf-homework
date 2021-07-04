-- ADDITIONAAL QUERIES
SELECT * FROM meal;
-- 	1	superb nordic dinner	open-faced sandwich, caramel potatoes and roast pork with crackling	Copenhagen, Valby	2021-02-01 19:00:00	4	1000	2021-01-26
INSERT INTO meal VALUES (2, 'ukrainian dinner', 'mushroom soup, varenyky with sour cream, medovyk', 'Kyiv', '2021-02-05 20:00:00.000', 6, 1250, '2021-01-29');
INSERT INTO meal VALUES (3, 'falafel', 'falafel served with hummus and tahini sauce', 'Tel Aviv', '2021-02-06 15:00:00.000', 5, 375, '2021-02-01');
INSERT INTO meal VALUES (4, 'lebanese mezze', 'a variety of mediterranean small dishes', 'Beirut', '2021-02-02 17:00:00.000', 10, 2000, '2021-01-30');
INSERT INTO meal VALUES (5, 'italian supper', 'pasta with seafood, arancini and canolli', 'Katania', '2021-02-07 21:00:00.000', 5, 750, '2021-01-25');
INSERT INTO meal VALUES (6, 'his majesty - borsch', 'perfect ukrainian borsch served with rye bread, garlic and salo (lard)', 'Lviv', '2021-02-08 18:00:00.000', 4, 850, '2021-01-19');
INSERT INTO meal VALUES (7, 'sushi time', 'sushi and rolls', 'Tokyo', '2021-02-10 17:00:00.000', 8, 1350, '2021-02-02');

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
	WHERE price < 500;
-- 	3	falafel	falafel served with hummus and tahini sauce	Tel Aviv	2021-02-06 15:00:00	5	375	2021-01-26

SELECT * FROM reservation;
-- 	1	3	1	2021-01-26	938865982	Sofiia	sofiia.d@gmail.com
INSERT INTO reservation VALUES (2, 4, 1, '2021-01-25', '0938865982', 'Helen', 'helen@gmail.com');
INSERT INTO reservation VALUES (3, 5, 3, '2021-02-01', '0938865984', 'Katia', 'katia@gmail.com');
INSERT INTO reservation VALUES (4, 10, 4, '2021-01-29', '0938865985', 'Oleg', 'oleg@gmail.com');
INSERT INTO reservation VALUES (5, 4, 5, '2021-01-26', '0938865986', 'Peter', 'peter@gmail.com');
INSERT INTO reservation VALUES (6, 3, 7, '2021-01-30', '0938865987', 'Maria', 'maria@gmail.com');
INSERT INTO reservation VALUES (7, 3, 2, '2021-01-31', '0938865988', 'Ivar', 'ivar@gmail.com');

-- Get meals that still have available reservations
SELECT meal.title, SUM(number_of_guests), max_reservations FROM meal
	LEFT JOIN reservation ON meal_id = meal.id
	GROUP BY meal_id
	HAVING max_reservations > SUM(number_of_guests);
-- 	ukrainian dinner	3	6
-- 	italian supper	4	5
-- 	sushi time	3	8

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT id, title FROM meal
    WHERE title LIKE '%dinner%';
-- 	1	superb nordic dinner
--  2	ukrainian dinner

-- Get meals that have been created between two dates
SELECT id, title, created_date FROM meal
	WHERE created_date >= '2021-01-25' AND created_date <= '2021-01-27';
--  1	superb nordic dinner	2021-01-26
--  5	italian supper	2021-01-25

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
	LIMIT 5;

-- Get the meals that have good reviews
SELECT * FROM review;
-- 	1	perfectly splendid	everything was super tasty	1	3	2021-01-26
INSERT INTO review VALUES (2, 'splendid', 'everything was exquisite', 3, 3, '2021-01-25');
INSERT INTO review VALUES (3, 'good', 'tasty and fresh', 5, 2, '2021-02-02');
INSERT INTO review VALUES (4, 'ok', 'it was not bad', 7, 1, '2021-01-31');
INSERT INTO review VALUES (5, 'good', 'everything was good, except wine', 3, 2, '2021-01-27');
INSERT INTO review VALUES (6, 'splendid', 'everything was tasty', 2, 3, '2021-01-26');
INSERT INTO review VALUES (7, 'ok', 'it was just ok', 6, 1, '2021-01-29');

SELECT DISTINCT meal.title FROM review
	JOIN meal ON meal_id = meal.id
	WHERE review.stars = 3;
--  superb nordic dinner
--  falafel
--  ukrainian dinner

-- Get reservations for a specific meal sorted by created_date
SELECT reservation.id, reservation.contact_name, meal.title, reservation.created_date FROM reservation
	JOIN meal ON meal_id = meal.id
	WHERE meal_id = 1
    ORDER BY reservation.created_date;
-- 	2	Helen	superb nordic dinner	2021-01-25
--  1	Sofiia	superb nordic dinner	2021-01-26

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(stars) FROM review
	JOIN meal ON meal_id = meal.id
	GROUP BY meal_id
	ORDER BY AVG(stars);
--  sushi time	1.0000
--  his majesty - borsch	1.0000
--  italian supper	2.0000
--  falafel	2.5000
--  superb nordic dinner	3.0000
--  ukrainian dinner	3.0000