CREATE TABLE meal (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(100),
description TEXT,
location VARCHAR(100),
when_col DATETIME,
max_reservations INT,
price DECIMAL,
created_date DATE
);

CREATE TABLE reservation (
id INT PRIMARY KEY AUTO_INCREMENT,
number_of_guests INT,
meal_id INT,
created_date DATE,
contact_phonenumber VARCHAR(10),
contact_name VARCHAR(50),
contact_email VARCHAR(50),
FOREIGN KEY (meal_id) REFERENCES meal(id)
);

CREATE TABLE review (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(100),
description TEXT,
meal_id INT,
stars INT,
created_date DATE,
FOREIGN KEY (meal_id) REFERENCES meal(id)
);

-- MEAL
SELECT * FROM meal;
INSERT INTO meal VALUES (1, 'nordic dinner', 'open-faced sandwich, caramel potatoes and roast 
pork with crackling', 'Copenhagen', '2021-02-01 19:00:00.000', 4, 1000, '2021-01-26');
INSERT INTO meal VALUES (2, 'pizza time', 'cheese pizza with basil and tomatoes', 'Amager',
'2021-02-02 19:00:00.000', 3, 350, '2021-01-26');
SELECT * FROM meal
	WHERE id = 1;
UPDATE  meal
	SET title = 'superb nordic dinner', location = 'Copenhagen, Valby'
	WHERE id = 1;
-- 	1	superb nordic dinner	open-faced sandwich, caramel potatoes and roast pork with crackling	Copenhagen, Valby	2021-02-01 19:00:00	4	1000	2021-01-26
-- 	2	pizza time	cheese pizza with basil and tomatoes	Amager	2021-02-02 19:00:00	3	350	2021-01-26
DELETE FROM meal 
	WHERE id = 2;

-- RESERVATION 
SELECT * FROM reservation;
INSERT INTO reservation VALUES (1, 3, 1, '2021-01-26', '0938865982', 'Sofiia', 'sofiia@gmail.com');
INSERT INTO reservation VALUES (2, 3, 1, '2021-01-26', '0938865983', 'Olga', 'olga@gmail.com');
SELECT * FROM reservation
	WHERE id = 1;
UPDATE reservation 
	SET contact_phonenumber = '938865982', contact_email = 'sofiia.d@gmail.com'
	WHERE id = 1;
-- 	1	3	1	2021-01-26	938865982	Sofiia	sofiia.d@gmail.com
--  2	3	1	2021-01-26	0938865983	Olga	olga@gmail.com
DELETE FROM reservation
	WHERE id = 2;

-- REVIEW
SELECT * FROM review;
INSERT INTO review VALUES (1, 'perfectly splendid', 'everything was super tasty', 1, 3, '2021-01-26');
INSERT INTO review VALUES (2, 'good', 'it was not bad', 1, 1, '2021-01-26');
SELECT * FROM review
	WHERE id = 1;
UPDATE review
	SET title = 'very good', stars = 2, description = 'I liked it so much!'
	WHERE id = 2;
-- 	1	perfectly splendid	everything was super tasty	1	3	2021-01-26
--  2	very good	I liked it so much!	1	2	2021-01-26
DELETE FROM review
	WHERE id = 2;