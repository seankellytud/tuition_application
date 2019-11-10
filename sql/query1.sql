CREATE DATABASE grinds;
 
CREATE TABLE `grinds`.`t_grinds` (
  `GRIND_ID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `PRICE_PER_HOUR` DECIMAL NOT NULL,
  `GRIND_ADDRESS` VARCHAR(2000) NOT NULL,
  `GRIND_TYPE` INT,
  `GRIND_LEVEL` VARCHAR(2000) NOT NULL
);
  
CREATE TABLE `grinds`.`tr_grind_type` (
  `GRIND_TYPE_ID` INT NOT NULL PRIMARY KEY,
  `GRIND_TYPE_DESC` VARCHAR(500) NOT NULL);

INSERT INTO `grinds`.`tr_grind_type` (GRIND_TYPE_ID, GRIND_TYPE_DESC) VALUES(1, 'MATHEMATICS'),(2, 'ENGLISH'),(3,'SPANISH'), (4,'MUSIC'), (5,'IRISH'), (6,'BIOLOGY'), (7,'CHEMISTRY'), (8,'PHYSICS'),(9, 'TECHNICAL_DRAWING');

CREATE TABLE `grinds`.`tr_role` (
  `ROLE_ID` INT NOT NULL PRIMARY KEY,
  `ROLE_DESC` VARCHAR(500) NOT NULL);
  
INSERT INTO `grinds`.`tr_role` (ROLE_ID, ROLE_DESC) VALUES(1, 'ADMIN'),(2, 'STUDENT'),(3,'TEACHER');

INSERT INTO `grinds`.`t_grinds` (PRICE_PER_HOUR, GRIND_ADDRESS, GRIND_TYPE, GRIND_LEVEL) VALUES 
(35,`123 Fake Street Blanchardstown Dublin 15`, 1, `JUNIOR CERTIFICATE`),
(25,`111 Fake Street Dundrum Dublin 8`, 3, `LEAVING CERTIFICATE`),
(45,`145 Fake Street Tallaght Dublin 18`, 6, `UNIVERSITY LEVEL`);


alter table t_grinds
add `GRIND_LEVEL` VARCHAR(2000) NOT NULL;

update t_grinds set grind_level= 'junior certificate' where grind_id =1;
 update t_grinds set grind_level= 'leaving certificate' where grind_id =2;
 update t_grinds set grind_level= 'university level' where grind_id =3;



drop table if exists t_user;
create table t_user (ID bigint not null auto_increment, PASSWORD varchar(255), FIRST_NAME varchar(255), LAST_NAME varchar(255), USERNAME varchar(255), EMAIL_ADDRESS varchar(255) , `USER_ROLE` INT,primary key (ID)) engine=MyISAM

INSERT INTO t_user (ID, USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS) VALUES (1, 'user1', '$2a$04$Ye7/lJoJin6.m9sOJZ9ujeTgHEVM4VXgI2Ingpsnf9gXyXEXf/IlW', 'John', 'Doe', 'john.doe@yahoo.com');
INSERT INTO t_user (ID, USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS) VALUES (2, 'user2', '$2a$04$StghL1FYVyZLdi8/DIkAF./2rz61uiYPI3.MaAph5hUq03XKeflyW', 'Michael', 'Michael', 'michael.michael@gmail.com');
INSERT INTO t_user (ID, USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS) VALUES (3, 'user3', '$2a$04$Lk4zqXHrHd82w5/tiMy8ru9RpAXhvFfmHOuqTmFPWQcUhBD8SSJ6W', 'Cristian', 'Suia', 'cristian.suia@yahoo.ie');




