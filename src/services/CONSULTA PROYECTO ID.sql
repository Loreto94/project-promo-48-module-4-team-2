USE defaultdb;
INSERT INTO userData (autor, job, photo)
VALUES ('Ada', 'desarrolladora', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/960px-Ada_Lovelace_portrait.jpg');

INSERT INTO projectsData (name, slogan, repo, demo, technologies, description, image, fk_userData)
VALUES ('Proyectos molones', 'Confía en el proceso', 'https://github.com/Loreto94/project-promo-48-module-4-team-2.git', 'https://loreto94.github.io/project-promo-48-module-4-team-2/', 'html, react, scss', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu felis tempor, consequat leo in, faucibus tellus. Suspendisse potenti.', 'https://es.unesco.org/youth/toptips/user/pages/images/home-feature-two_mobile.png', 1);

SELECT * FROM projectsData
INNER JOIN userData ON userData.idUser=projectsData.fk_userData
WHERE projectsData.idProject=1;