TRUNCATE users, habits, frequency, subhabits RESTART IDENTITY;

INSERT INTO users (username, email, password_digest)
VALUES
('test1', 'test1@gmail.com', 'yestest'),
('test2', 'test2@gmail.com', 'notest'),
('test3', 'test3@gmail.com', 'maybetest');

INSERT INTO habits (name, frequency_id, complete, streak, user_id)
VALUES
('Drink water', 1, 0, 5, 1),
('Eat veg', 2, 0, 5, 1),
('Work out', 3, 0, 3, 2),
('Sleep out', 3, 0, 3, 3),
('Drink water', 3, 0, 3, 2);


INSERT INTO frequency (monday, tuesday, wednesday, thursday, friday, saturday, sunday)
VALUES
(FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, TRUE),
(TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
(TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, FALSE);


INSERT INTO subhabits (name, complete, habit_id)
VALUES
('9am', 0, 1),
('10am', 0, 3),
('9am', 0, 2);
