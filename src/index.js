const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const server = express();

server.use(cors());
server.use(express.json());

async function getDBConnection() {
  const connection = await mysql.createConnection({
   
  });
  connection.connect();
  return connection;
}

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

const port = 5001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

server.get("/api/projects", async (req, res) => {
  const connection = await getDBConnection();
  let query = "SELECT * FROM projectsData, userData WHERE projectsData.fk_userData = userData.idUser";
  const { idProject, name, slogan, repo, demo, technologies, description, image, fk_userData, idUser, job, photo } = req.query;

  const [projectsResult] = await connection.query(query, idProject, name, slogan, repo, demo, technologies, description, image, fk_userData, idUser, job, photo)

  res.status(200).json({
    success: true,
    result: projectsResult,
  });
});

server.post("/api/newproject", async (req, res) => {
  const connection = await getDBConnection();
  const projectInfo = req.body;

  const queryAuthor = "INSERT INTO userData (autor, job, photo) VALUES (?, ?, ?)";
  
  const [authorResult] = await connection.query(queryAuthor, [projectInfo.autor, projectInfo.job, projectInfo.photo])

  const queryProject = "INSERT INTO projectsData (name, slogan, repo, demo, technologies, description, image, fk_userData) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const [projectResult] = await connection.query(queryProject, [
    projectInfo.name,
    projectInfo.slogan,
    projectInfo.repo,
    projectInfo.demo,
    projectInfo.technologies,
    projectInfo.description,
    projectInfo.image,
    authorResult.insertId
  ])

  connection.end();
  res.status(201).json({
    success: true,
    cardUrl: ""
  })
})