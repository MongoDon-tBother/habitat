DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS habits;
DROP TABLE IF EXISTS frequency;
DROP TABLE IF EXISTS subhabits;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar NOT NULL,
  email varchar NOT NULL,
  password_digest varchar NOT NULL
);

CREATE TABLE habits (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    frequency_id int NOT NULL,
    complete bigint NOT NULL,
    streak int NOT NULL,
    user_id int NOT NULL
);

CREATE TABLE frequency (
  id serial PRIMARY KEY,
  monday boolean NOT NULL,
  tuesday boolean NOT NULL,
  wednesday boolean NOT NULL,
  thursday boolean NOT NULL,
  friday boolean NOT NULL,
  saturday boolean NOT NULL,
  sunday boolean NOT NULL
);

CREATE TABLE subhabits (
  id serial PRIMARY KEY,
  name varchar NOT NULL,
  complete bigint NOT NULL,
  habit_id int NOT NULL
);
