CREATE DATABASE grinds;
 
CREATE TABLE `grinds`.`grind table` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `price` DECIMAL NOT NULL,
  `address` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
  
INSERT INTO grind (price, address) VALUES (35,'123 Fake Street Blanchardstown Dublin 15');