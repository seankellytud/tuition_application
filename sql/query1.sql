CREATE DATABASE grinds;

drop table if exists t_user;
create table t_user (ID bigint not null auto_increment, PASSWORD varchar(255), FIRST_NAME varchar(255), LAST_NAME varchar(255), USERNAME varchar(255), EMAIL_ADDRESS varchar(255) , `USER_ROLE` INT,primary key (ID)) engine=MyISAM

#student
INSERT INTO t_user (USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, USER_ROLE) VALUES ('user1', '$2a$10$LLse0LiDHExWxxdYOuADu.Ocg.AuxTDNhfNu2HFUBPCZ6ifStCKJu', 'John', 'Doe', 'john.doe@yahoo.com',2);
#teacher
INSERT INTO t_user (USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, USER_ROLE) VALUES ('user2', '$2a$10$LLse0LiDHExWxxdYOuADu.Ocg.AuxTDNhfNu2HFUBPCZ6ifStCKJu', 'Michael', 'Michael', 'michael.michael@gmail.com',3);
#student
INSERT INTO t_user (USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, USER_ROLE) VALUES ('user3', '$2a$10$LLse0LiDHExWxxdYOuADu.Ocg.AuxTDNhfNu2HFUBPCZ6ifStCKJu', 'Cristian', 'Suia', 'cristian.suia@yahoo.ie',2);

drop table if exists `grinds`.`tr_grind_type`;
CREATE TABLE `grinds`.`tr_grind_type` (
  `GRIND_TYPE_ID` INT NOT NULL PRIMARY KEY,
  `GRIND_TYPE_DESC` VARCHAR(500) NOT NULL);

INSERT INTO `grinds`.`tr_grind_type` (GRIND_TYPE_ID, GRIND_TYPE_DESC) VALUES(1, 'MATHEMATICS'),(2, 'ENGLISH'),(3,'SPANISH'), (4,'MUSIC'), (5,'IRISH'), (6,'BIOLOGY'), (7,'CHEMISTRY'), (8,'PHYSICS'),(9, 'TECHNICAL_DRAWING');

drop table if exists `grinds`.`tr_role`;
CREATE TABLE `grinds`.`tr_role` (
  `ROLE_ID` INT NOT NULL PRIMARY KEY,
  `ROLE_DESC` VARCHAR(500) NOT NULL);
  
INSERT INTO `grinds`.`tr_role` (ROLE_ID, ROLE_DESC) VALUES(1, 'ADMIN'),(2, 'STUDENT'),(3,'TEACHER');
commit;


drop table if exists `grinds`.`t_grind`;
commit;

CREATE TABLE `grinds`.`t_grind` (
  `GRIND_ID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `PRICE_PER_HOUR` DECIMAL NOT NULL,
  `GRIND_TYPE` INT,
  `BUILDING_NO` INT NOT NULL,
  `STREET` VARCHAR(2000) NOT NULL,
  `COUNTY` VARCHAR (100) NOT NULL,
  `EIRCODE` VARCHAR (100) NOT NULL,
  `USERNAME` VARCHAR(100)
);
commit;
 
#POPULATE WITH NEW INFO
#user2 is the username of a teacher
 INSERT INTO `GRINDS`.`T_GRIND` (PRICE_PER_HOUR,GRIND_TYPE, BUILDING_NO, STREET, COUNTY, EIRCODE, USERNAME) VALUES
(35, 1, 123,'FAKE STREET', 'DUBLIN','D05HK71','user2'),
(35, 1, 123,'NEW STREET', 'CARLOW','C06ABC','user2'),
(40, 3, 33,'OLD STREET', 'KILKENNY','K03ERC','user2'),
 (35, 4, 69,'JAMES STREET', 'CLARE','K05HK78','user2');
 commit;
  


