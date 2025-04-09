import "../scss/App.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";
import ls from "../services/localStorage";
import ProjectsList from "./ProjectsList";
import ButtonProjects from "./ButtonProjects";
import { Route, Routes, Link } from "react-router-dom";



function App() {
  const [projectInfo, setProjectInfo] = useState(ls.get("User info", {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  }));
  const [url, setUrl] = useState("");
  const [isHidden, setIsHidden] = useState(true);

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
      desc: value,
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
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projectInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.cardURL);
      });
    setIsHidden(false);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={
            <>
              <section className="hero">
                <h2 className="title">Proyectos molones</h2>
                <p className="hero__text">
                  Escaparate en línea para recoger ideas a través de la tecnología
                </p>
                <ButtonProjects textButton="Ver proyectos" linkButton="" />
              </section>
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
              />
            </>
          } />
        </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;
