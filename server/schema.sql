CREATE DATABASE chat;

USE chat;
  /* Describe your table here.*/
  /* id, text, foreign key user, foreign key room*/
/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  UserID int NOT NULL AUTO_INCREMENT,
  UserName varchar(255) NOT NULL,
  PRIMARY KEY (UserID)
);

CREATE TABLE messages (
  MessageID int NOT NULL AUTO_INCREMENT,
  TextMessage varchar(255) NOT NULL,
  Room varchar(255) NOT NULL,
  User int NOT NULL,
  PRIMARY KEY (MessageID),
  FOREIGN KEY (User) REFERENCES users(UserID)
);



-- CREATE TABLE rooms (
--   RoomID int NOT NULL,
--   RoomName varchar(255) NOT NULL,
--   PRIMARY KEY (RoomID)
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

