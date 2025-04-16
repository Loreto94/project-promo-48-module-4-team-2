import ProjectCard from "./ProjectCard";
import Hero from "./Hero";

function ProjectsList({ projects }) {
  return (
    <>
      <Hero textButton="Nuevo proyecto" linkButton="/" />
      <section className="cardList--container">
        <ul className="cardList">
          {projects.map(
            (project, index) =>
              `<li key=${index}>
             ${(<ProjectCard project={project} />)}
            </li>`
          )}
        </ul>
      </section>
    </>
  );
}

export default ProjectsList;
