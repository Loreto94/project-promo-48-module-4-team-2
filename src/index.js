const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

const port = 5001;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

const fakeProjects = [
    {
      name: "EcoMarket",
      slogan: "Compra sostenible, viu millor",
      repo: "https://github.com/usuari/ecomarket",
      demo: "https://ecomarket-demo.netlify.app",
      technologies: "HTML, CSS, JavaScript, React",
      desc: "Aplicació web per comprar productes ecològics de proximitat amb filtres personalitzats.",
      autor: "Laura Martí",
      job: "Frontend Developer",
      image: "https://example.com/images/ecomarket.png",
      photo: "https://example.com/photos/laura.png"
    },
    {
      name: "TaskTrackr",
      slogan: "Organitza't com un pro",
      repo: "https://github.com/usuari/tasktrackr",
      demo: "https://tasktrackr.app",
      technologies: "Vue, Node.js, MongoDB",
      desc: "Gestor de tasques amb sistema de notificacions i vista per projectes col·laboratius.",
      autor: "Joan Serra",
      job: "Full Stack Developer",
      image: "https://example.com/images/tasktrackr.png",
      photo: "https://example.com/photos/joan.png"
    },
    {
      name: "FitYou",
      slogan: "La teva rutina, el teu estil",
      repo: "https://github.com/usuari/fityou",
      demo: "https://fityou.app",
      technologies: "Angular, Firebase",
      desc: "App de seguiment d'exercicis i nutrició amb recomanacions personalitzades.",
      autor: "Carla Ruiz",
      job: "Frontend Developer",
      image: "https://example.com/images/fityou.png",
      photo: "https://example.com/photos/carla.png"
    },
    {
      name: "CulturaViva",
      slogan: "Descobreix, comparteix, viu la cultura",
      repo: "https://github.com/usuari/culturaviva",
      demo: "https://culturaviva.cat",
      technologies: "React, Express, PostgreSQL",
      desc: "Plataforma per trobar i promocionar esdeveniments culturals locals.",
      autor: "Marc Dalmau",
      job: "Backend Developer",
      image: "https://example.com/images/culturaviva.png",
      photo: "https://example.com/photos/marc.png"
    }
  ];  

server.get("http://localhost:5001/project/list",(req, res) => {
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