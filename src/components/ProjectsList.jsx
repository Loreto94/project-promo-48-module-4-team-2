import ProjectCard from "./ProjectCard";
import Hero from "./Hero";

function ProjectsList({ project }) {
  return (
    <>
      <Hero textButton="Nuevo proyecto" linkButton="/" />
      <section className="cardList--container">
        <ul className="cardList">
          <li>
            <ProjectCard project={project} />
          </li>
          <li>
            <ProjectCard project={project} />
          </li>
          <li>
            <ProjectCard project={project} />
          </li>
          <li>
            <ProjectCard project={project} />
          </li>
          <li>
            <ProjectCard project={project} />
          </li>
        </ul>
      </section>
    </>
  );
}

export default ProjectsList;
