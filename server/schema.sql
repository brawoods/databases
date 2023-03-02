CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE messages (
  /* Describe your table here.*/
  /* id, text, foreign key user, foreign key room*/
  MessageID int NOT NULL,
  TextMessage varchar(255) NOT NULL,
  User varchar(255) NOT NULL,
  Room varchar(255) NOT NULL,
  PRIMARY KEY (MessageID)
);

-- CREATE TABLE rooms (
--   RoomID int NOT NULL,
--   RoomName varchar(255) NOT NULL,
--   PRIMARY KEY (RoomID)
-- );

-- CREATE TABLE users (
--   UserID int NOT NULL,
--   UserName varchar(255) NOT NULL,
--   PRIMARY KEY (UserID)
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   /* id, text, foreign key user, foreign key room*/
--   MessageID int NOT NULL,
--   TextMessage varchar(255) NOT NULL,
--   User int NOT NULL,
--   Room int NOT NULL,
--   PRIMARY KEY (MessageID),
--   FOREIGN KEY (User) REFERENCES users(UserID),
--   FOREIGN KEY (Room) REFERENCES rooms(RoomID)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

