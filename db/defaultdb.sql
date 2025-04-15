USE defaultdb;

CREATE TABLE projectsData (
	idProject INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
    slogan VARCHAR(150) NOT NULL,
    repo VARCHAR(250) NOT NULL,
    demo VARCHAR(250) NOT NULL,
    technologies VARCHAR(150) NOT NULL,
    description TINYTEXT NOT NULL,
    image VARCHAR(250) NOT NULL
);

CREATE TABLE userData (
	idUser INT AUTO_INCREMENT PRIMARY KEY,
    autor VARCHAR(45) NOT NULL,
    job VARCHAR(45) NOT NULL,
    photo VARCHAR(250) NOT NULL
);

SELECT * FROM projectsData, userData;

USE defaultdb;

ALTER TABLE projectsData ADD COLUMN fk_userData INT NOT NULL;
ALTER TABLE projectsData ADD FOREIGN KEY (fk_userData) REFERENCES userData(idUser);