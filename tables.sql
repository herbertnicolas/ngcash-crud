CREATE TABLE `Users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`));

CREATE TABLE `Accounts` (
	`idAccount` INT NOT NULL AUTO_INCREMENT,
	`idUser` INT NOT NULL,
	`balance` float(24) NOT NULL,
	PRIMARY KEY (`idAccount`),
	CONSTRAINT fk_Accounts FOREIGN KEY (idAccounts) REFERENCES Accounts(idUser)
);

ALTER TABLE accounts ADD INDEX `fk_Accounts_idx` (`idUser` ASC) VISIBLE;

ALTER TABLE accounts ADD CONSTRAINT fk_Accounts FOREIGN KEY(idAccount) REFERENCES accounts (idUser);

CREATE TABLE `Transactions` (
	`idTrans` INT NOT NULL AUTO_INCREMENT,
	`value` float(64)  NOT NULL default '100',
	`createdAt` DATE NOT NULL,
    `debitedAccountId` INT NOT NULL,
    `creditedAccountId` INT NOT NULL,
	CONSTRAINT fk_debitedAccountId FOREIGN KEY (debitedAccountId) REFERENCES Accounts(idAccount),
	CONSTRAINT fk_creditedAccountId FOREIGN KEY (debitedAccountId) REFERENCES Accounts(idAccount),
	PRIMARY KEY (`idTrans`)	
);
