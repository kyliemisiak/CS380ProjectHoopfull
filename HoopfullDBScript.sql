-- MySQL Script generated by MySQL Workbench
-- Thu May  9 15:22:35 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hoopfulDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hoopfulDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hoopfulDB` DEFAULT CHARACTER SET utf8 ;
USE `hoopfulDB` ;

-- -----------------------------------------------------
-- Table `hoopfulDB`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoopfulDB`.`account` (
  `userName` VARCHAR(45) NOT NULL,
  `pass` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userName`, `pass`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoopfulDB`.`Coach`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoopfulDB`.`Captain` (
  `captainID` VARCHAR(9) NOT NULL,
  `captainName` VARCHAR(45) NOT NULL,
  `teamID` VARCHAR(45) NOT NULL,
  `userName` VARCHAR(45) NOT NULL,
  `pass` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`captainID`),
  INDEX `fk_Captain_account_idx` (`userName` ASC, `pass` ASC) VISIBLE,
  CONSTRAINT `fk_Captain_account`
    FOREIGN KEY (`userName` , `pass`)
    REFERENCES `hoopfulDB`.`account` (`userName` , `pass`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoopfulDB`.`Teams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoopfulDB`.`Teams` (
  `teamID` VARCHAR(9) NOT NULL,
  `teamName` VARCHAR(45) NOT NULL,
  `amountOfPlayers` INT NOT NULL,
  `captainID` VARCHAR(9) NOT NULL,
  `captainName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`teamID`),
  INDEX `fk_Teams_Captain1_idx` (`captainID` ASC) VISIBLE,
  CONSTRAINT `fk_Teams_Captain1`
    FOREIGN KEY (`captainID`)
    REFERENCES `hoopfulDB`.`Captain` (`captainID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoopfulDB`.`Players`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoopfulDB`.`Players` (
  `playerID` VARCHAR(9) NOT NULL,
  `teamID` VARCHAR(9) NOT NULL,
  `playerName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`playerID`, `teamID`),
  INDEX `fk_Players_Teams1_idx` (`teamID` ASC) VISIBLE,
  CONSTRAINT `fk_Players_Teams1`
    FOREIGN KEY (`teamID`)
    REFERENCES `hoopfulDB`.`Teams` (`teamID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoopfulDB`.`Touranments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoopfulDB`.`Touranments` (
  `tournamentID` VARCHAR(9) NOT NULL,
  `tournamentName` VARCHAR(45) NOT NULL,
  `amountOfTeams` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tournamentID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoopfulDB`.`Plays_In`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoopfulDB`.`Plays_In` (
  `tournamentID` VARCHAR(9) NOT NULL,
  `teamID` VARCHAR(9) NOT NULL,
  PRIMARY KEY (`tournamentID`),
  INDEX `fk_Plays_In_Touranments1_idx` (`tournamentID` ASC) VISIBLE,
  INDEX `fk_Plays_In_Teams1_idx` (`teamID` ASC) VISIBLE,
  CONSTRAINT `fk_Plays_In_Touranments1`
    FOREIGN KEY (`tournamentID`)
    REFERENCES `hoopfulDB`.`Touranments` (`tournamentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Plays_In_Teams1`
    FOREIGN KEY (`teamID`)
    REFERENCES `hoopfulDB`.`Teams` (`teamID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
