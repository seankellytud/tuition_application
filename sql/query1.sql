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
  
INSERT INTO `grinds`.`t_grinds` (PRICE_PER_HOUR, GRIND_ADDRESS, GRIND_TYPE, GRIND_LEVEL) VALUES 
(35,`123 Fake Street Blanchardstown Dublin 15`, 1, `JUNIOR CERTIFICATE`),
(25,`111 Fake Street Dundrum Dublin 8`, 3, `LEAVING CERTIFICATE`),
(45,`145 Fake Street Tallaght Dublin 18`, 6, `UNIVERSITY LEVEL`);


alter table t_grinds
add `GRIND_LEVEL` VARCHAR(2000) NOT NULL;

update t_grinds set grind_level= 'junior certificate' where grind_id =1;
 update t_grinds set grind_level= 'leaving certificate' where grind_id =2;
 update t_grinds set grind_level= 'university level' where grind_id =3;

insert into `grinds`.`t_grinds` (grind_id,price_per_hour,grind_address,grind_type,grind_level) values
(4,30,'88 New Street Killester Dublin 5', 9, `beginner`);



 create table `grinds`.`grind_level` (
    `grind_level_id` INT NOT NULL PRIMARY KEY,
     `grind_level` VARCHAR (2000) NOT NULL);

insert into `grinds`.`grind_level` (grind_level_id,grind_level) values
     (1,'junior certicate'),
     (2,'leaving certificate'),
     (3,'university level'),
     (4, 'beginner');

