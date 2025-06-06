/* global process */
import "../scss/App.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";
import Hero from "./Hero";
import ls from "../services/localStorage";
import ProjectsList from "./ProjectsList";
import { Route, Routes } from "react-router-dom";

const URL_PRODUCTION = "https://project-promo-48-module-4-team-2.onrender.com";
const URL_LOCAL = "http://localhost:5001";
const URL = process.env.NODE_ENV === "development" ? URL_LOCAL : URL_PRODUCTION;

function App() {
  const [projectInfo, setProjectInfo] = useState(
    ls.get("User info", {
      name: "",
      slogan: "",
      repo: "",
      demo: "",
      technologies: "",
      description: "",
      autor: "",
      job: "",
      image: "",
      photo: "",
    })
  );
  const [url, setUrl] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [fakeProjects, setFakeProjects] = useState([]);

  useEffect(() => {
    ls.set("User info", projectInfo);
  }, [projectInfo]);

  const changeProjectName = (value) => {
    setProjectInfo({
      ...projectInfo,
      name: value,
    });
  };
  const changeSlogan = (value) => {
    setProjectInfo({
      ...projectInfo,
      slogan: value,
    });
  };
  const changeRepo = (value) => {
    setProjectInfo({
      ...projectInfo,
      repo: value,
    });
  };
  const changeDemo = (value) => {
    setProjectInfo({
      ...projectInfo,
      demo: value,
    });
  };
  const changeTech = (value) => {
    setProjectInfo({
      ...projectInfo,
      technologies: value,
    });
  };
  const changeDesc = (value) => {
    setProjectInfo({
      ...projectInfo,
      description: value,
    });
  };
  const changeName = (value) => {
    setProjectInfo({
      ...projectInfo,
      autor: value,
    });
  };
  const changeJob = (value) => {
    setProjectInfo({
      ...projectInfo,
      job: value,
    });
  };

  const onChangeImage = (value) => {
    setProjectInfo({
      ...projectInfo,
      image: value,
    });
  };

  const onChangeUserImage = (value) => {
    setProjectInfo({
      ...projectInfo,
      photo: value,
    });
  };

  const handleSubmitProject = () => {
    setIsLoading(true);
    fetch(`${URL}/api/newproject`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projectInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.cardUrl);
      })
      .catch((error) => console.log(`Ha sucedido un error: ${error}`));

    setTimeout(() => setIsHidden(false), 2000);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleReset = () => {
    setProjectInfo({
      name: "",
      slogan: "",
      repo: "",
      demo: "",
      technologies: "",
      description: "",
      autor: "",
      job: "",
      image: "",
      photo: "",
    });
    setIsHidden(true);
  };

  useEffect(() => {
    fetch(`${URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        const fakeProjects = data.result;
        setFakeProjects(fakeProjects);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section className="main">
                <Hero textButton="Ver proyectos" linkButton="/projects" />
                <Preview project={projectInfo} />
                <Form
                  project={projectInfo}
                  onChangeProjectName={changeProjectName}
                  onChangeSlogan={changeSlogan}
                  onChangeRepo={changeRepo}
                  onChangeDemo={changeDemo}
                  onChangeTech={changeTech}
                  onChangeDesc={changeDesc}
                  onChangeName={changeName}
                  onChangeJob={changeJob}
                  onChangeImageProject={onChangeImage}
                  onChangeUserImage={onChangeUserImage}
                  onSaveProject={handleSubmitProject}
                  url={url}
                  isHidden={isHidden}
                  onReset={handleReset}
                  isLoading={isLoading}
                />
              </section>
            }
          />
          <Route
            path="/projects"
            element={
              <section className="second--main">
                <ProjectsList projects={fakeProjects} />
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
