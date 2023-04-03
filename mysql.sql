-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema game_store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema game_store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `game_store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `game_store` ;

-- -----------------------------------------------------
-- Table `game_store`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(120) NOT NULL,
  `last_name` VARCHAR(120) NOT NULL,
  `phone_number` VARCHAR(15) NULL DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  `passcode` VARCHAR(64) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `deletedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NOT NULL,
  `address2` VARCHAR(45) NOT NULL,
  `clients_id` INT NOT NULL,
  `district` VARCHAR(45) NOT NULL,
  `city` INT NOT NULL,
  `postal_code` VARCHAR(20) NULL DEFAULT NULL,
  `last_update` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `clients_id` (`clients_id` ASC) VISIBLE,
  CONSTRAINT `address_ibfk_1`
    FOREIGN KEY (`clients_id`)
    REFERENCES `game_store`.`clients` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`administradores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(120) NOT NULL,
  `last_name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `passcode` VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categories_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(7,2) NULL DEFAULT NULL,
  `categories_id` INT NOT NULL,
  `new_released` BINARY(1) NOT NULL,
  `promotion` BINARY(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `categories_id` (`categories_id` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `game_store`.`categories` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `img_path_stored` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `products_id` (`products_id` ASC) VISIBLE,
  CONSTRAINT `images_ibfk_1`
    FOREIGN KEY (`products_id`)
    REFERENCES `game_store`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`items_orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`items_orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_price` DECIMAL(10,2) NOT NULL,
  `discount` DECIMAL(10,2) NULL DEFAULT NULL,
  `product_id` INT NOT NULL,
  `obs` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `product_id` (`product_id` ASC) VISIBLE,
  CONSTRAINT `items_orders_ibfk_1`
    FOREIGN KEY (`product_id`)
    REFERENCES `game_store`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`payment_methods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`payment_methods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `payment_method_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `game_store`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_store`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address_id` INT NOT NULL,
  `clients_id` INT NOT NULL,
  `payment_methods_id` INT NOT NULL,
  `delivery_fee` DECIMAL(10,2) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `deletedAt` TIMESTAMP NULL DEFAULT NULL,
  `payAt` TIMESTAMP NULL DEFAULT NULL,
  `deliveredAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `payment_methods_id` (`payment_methods_id` ASC) VISIBLE,
  INDEX `clients_id` (`clients_id` ASC, `address_id` ASC) VISIBLE,
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`payment_methods_id`)
    REFERENCES `game_store`.`payment_methods` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2`
    FOREIGN KEY (`clients_id` , `address_id`)
    REFERENCES `game_store`.`address` (`clients_id` , `id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
