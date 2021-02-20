-- Part 2: School database
-- Create a new database containing the following tables:

-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(15),
    begins DATE,
    ends DATE
);

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
 CREATE TABLE student (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(15), 
    email TEXT, 
    phone VARCHAR(15), 
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id)
);

-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
CREATE INDEX student_name_index
	ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD (
status ENUM('not-started', 'ongoing', 'finished')
);