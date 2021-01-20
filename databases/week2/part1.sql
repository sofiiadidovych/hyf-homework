-- Part 1: Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task VALUES('36', 'finish homework', 'read several articles, do some extra exersices', '2021-01-18', '2021-01-19', '2021-01-22', '2', '11');
-- 36	finish homework	read several articles, do some extra exersices	2021-01-18 00:00:00	2021-01-19 00:00:00	2021-01-22 00:00:00	2	11

-- Change the title of a task
UPDATE task
	SET title = 'Finish hyf-homework db/w2'
    WHERE id = 36;
-- 	36	Finish hyf-homework db/w2	read several articles, do some extra exersices	2021-01-18 00:00:00	2021-01-19 00:00:00	2021-01-22 00:00:00	2	11

-- Change a task due date
UPDATE task
	SET due_date = '2021-01-21'
    WHERE id = 36;
-- 	36	Finish hyf-homework db/w2	read several articles, do some extra exersices	2021-01-18 00:00:00	2021-01-19 00:00:00	2021-01-21 00:00:00	2	11

-- Change a task status
UPDATE task
	SET status_id = '1'
    WHERE id = 36;
-- 	36	Finish hyf-homework db/w2	read several articles, do some extra exersices	2021-01-18 00:00:00	2021-01-19 00:00:00	2021-01-21 00:00:00	1	11    

-- Mark a task as complete
UPDATE task
	SET status_id = (SELECT id FROM status WHERE name = 'Done')
    WHERE id = 36;
-- 	36	Finish hyf-homework db/w2	read several articles, do some extra exersices	2021-01-18 00:00:00	2021-01-19 00:00:00	2021-01-21 00:00:00	3	11	3	Done

-- Delete a task
DELETE 
	FROM task
    WHERE id = 36;