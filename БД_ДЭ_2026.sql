drop database db_trenirovka;
create database db_trenirovka;
use db_trenirovka;

CREATE TABLE IF NOT EXISTS `db_trenirovka`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(150) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `fio` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE);

insert into user(login, password, fio, email, phone) values
("user1", "123", "Иванов Иван Иванович", "user1@mail.ru", "8(999)111-11-11"),
("user2", "123", "Петров Петр Петрович", "user2@mail.ru", "8(999)222-22-22"),
("user3", "123", "Сидоров Алексей Сергеевич", "user3@mail.ru", "8(999)333-33-33"),
("user4", "123", "Кузнецов Дмитрий Андреевич", "user4@mail.ru", "8(999)444-44-44");
select * from user;