import avatarImg from "../images/avatar.webp";

function ProjectCard({ project }) {
  return (
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div className="card__authorPhoto">
          <img src={project.photo || avatarImg} alt="Imagen autora" />
        </div>
        <p className="card__job">{project.job || "Profesión"}</p>
        <h3 className="card__name">{project.autor || "Nombre"}</h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{project.name || "Nombre del proyecto"}</h3>
        <p className="card__slogan">{project.slogan || "Slogan"}</p>
        <p className="card__description">{project.description || "Descripción"}</p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {project.technologies || "Tecnologías"}
          </p>

          <a
            className="icon icon__www"
            href={project.demo || "Demo"}
            title="Haz click para ver el proyecto online"
            target="_blank"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={project.repo || "Repositorio"}
            title="Haz click para ver el código del proyecto"
            target="_blank"
          >
            GitHub link
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
