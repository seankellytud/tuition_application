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