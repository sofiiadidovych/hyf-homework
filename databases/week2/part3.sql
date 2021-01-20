-- Part 3: More queries
-- You should do these queries on the database hyf_lesson2, which we created last class. You can find the data here if you need to create the DB again.

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.email
	FROM user
    JOIN task ON user_id = user.id
    WHERE email LIKE '%@spotify.com';
-- Walk the dog	pgoldsworthy1@spotify.com
-- Sign up for linkedin	pgoldsworthy1@spotify.com
-- Backup databases to external disk	pgoldsworthy1@spotify.com

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT * 
	FROM task
    JOIN user ON user.id = task.user_id
    JOIN status ON status.id = task.status_id
    WHERE user.name = 'Donald Duck' AND status.name = 'Not started';
-- No tasks assigned to Donald Duck were found

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT *
	FROM task 
    JOIN user ON user.id = task.user_id
    JOIN status ON status.id = task.status_id
    WHERE user.name = 'Maryrose Meadows' AND month(created) = 9;
-- 	2	Become a billionaire	This should not take long, just invent a time machine, travel back to 2010 and buy bitcoin	2017-09-26 03:06:46	2017-10-08 06:14:31	2017-12-22 20:58:03	3	6	6	Maryrose Meadows	mmeadows5@comcast.net	251-524-6594	3	Done
--  6	Fix the flat tire on the bike	Tools are in the garage	2017-09-13 23:16:30	2017-10-06 04:03:52	2017-12-07 11:51:11	2	6	6	Maryrose Meadows	mmeadows5@comcast.net	251-524-6594	2	In progress

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTHNAME(created), COUNT(*)
	FROM task
    GROUP BY month(created);
-- October	18
-- September	17