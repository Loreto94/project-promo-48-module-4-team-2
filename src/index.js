const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

const port = 5001;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

const fakeProjects = [
    {
      name: "EcoMarket",
      slogan: "Compra sostenible, viu millor",
      repo: "https://github.com/usuari/ecomarket",
      demo: "https://ecomarket-demo.netlify.app",
      technologies: "HTML, CSS, JavaScript, React",
      desc: "Aplicació web per comprar productes ecològics de proximitat amb filtres personalitzats.",
      autor: "Mafe",
      job: "Frontend Developer",
      image: "https://example.com/images/ecomarket.png",
      photo: "https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg"
    },
    {
      name: "TaskTrackr",
      slogan: "Organitza't com un pro",
      repo: "https://github.com/usuari/tasktrackr",
      demo: "https://tasktrackr.app",
      technologies: "Vue, Node.js, MongoDB",
      desc: "Gestor de tasques amb sistema de notificacions i vista per projectes col·laboratius.",
      autor: "Begoña",
      job: "Full Stack Developer",
      image: "https://example.com/images/tasktrackr.png",
      photo: "https://img.freepik.com/premium-photo/female-developer-background_665280-9650.jpg"
    },
    {
      name: "FitYou",
      slogan: "La teva rutina, el teu estil",
      repo: "https://github.com/usuari/fityou",
      demo: "https://fityou.app",
      technologies: "Angular, Firebase",
      desc: "App de seguiment d'exercicis i nutrició amb recomanacions personalitzades.",
      autor: "Loreto",
      job: "Frontend Developer",
      image: "https://example.com/images/fityou.png",
      photo: "https://c8.alamy.com/comp/KCCEFC/software-language-programmer-avatar-KCCEFC.jpg"
    },
    {
      name: "CulturaViva",
      slogan: "Descobreix, comparteix, viu la cultura",
      repo: "https://github.com/usuari/culturaviva",
      demo: "https://culturaviva.cat",
      technologies: "React, Express, PostgreSQL",
      desc: "Plataforma per trobar i promocionar esdeveniments culturals locals.",
      autor: "Laia",
      job: "Backend Developer",
      image: "https://example.com/images/culturaviva.png",
      photo: "https://cdn.vectorstock.com/i/preview-1x/67/31/programmer-icon-profession-and-job-vector-33186731.jpg"
    }
  ];  

server.get("/project/list",(req, res) => {
    if (fakeProjects.length === 0) {
        res.status(404).json({
            status: "error",
            message: "No se han encontrado resultados"
        }) 
    } else {
        res.status(200).json({
            status:"success",
            result: fakeProjects
        })
    }
})
