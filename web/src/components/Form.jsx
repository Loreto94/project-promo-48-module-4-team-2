import GetAvatar from "./GetAvatar";
import Loader from "./Loader";

function Form(props) {
  const handleChangeProjectName = (ev) => {
    const projectNameValue = ev.target.value;
    props.onChangeProjectName(projectNameValue);
  };

  const handleChangeSlogan = (ev) => {
    const sloganValue = ev.target.value;
    props.onChangeSlogan(sloganValue);
  };

  const handleChangeRepo = (ev) => {
    const repoValue = ev.target.value;
    props.onChangeRepo(repoValue);
  };

  const handleChangeDemo = (ev) => {
    const demoValue = ev.target.value;
    props.onChangeDemo(demoValue);
  };

  const handleChangeTech = (ev) => {
    const techValue = ev.target.value;
    props.onChangeTech(techValue);
  };

  const handleChangeDesc = (ev) => {
    const descValue = ev.target.value;
    props.onChangeDesc(descValue);
  };

  const handleChangeName = (ev) => {
    const nameValue = ev.target.value;
    props.onChangeName(nameValue);
  };

  const handleChangeJob = (ev) => {
    const jobValue = ev.target.value;
    props.onChangeJob(jobValue);
  };

  const onChangeImageProject = (avatar) => {
    props.onChangeImageProject(avatar);
  };

  const onChangeUserImage = (avatar) => {
    props.onChangeUserImage(avatar);
  };

  const handleSaveProject = (ev) => {
    ev.preventDefault();
    props.onSaveProject();
  };

  const handleResetButton = () => {
    props.onReset();
  };

  return (
    <form className="addForm" onSubmit={handleSaveProject}>
      <h2 className="title">Información</h2>
      <input
        type="reset"
        value="Reset"
        onClick={handleResetButton}
        className="button reset"
      />
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          onChange={handleChangeProjectName}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          value={props.project.name}
          required
        />
        <input
          onChange={handleChangeSlogan}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={props.project.slogan}
          required
        />
        <div className="addForm__2col">
          <input
            onChange={handleChangeRepo}
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            value={props.project.repo}
            required
          />
          <input
            onChange={handleChangeDemo}
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            value={props.project.demo}
            required
          />
        </div>
        <input
          onChange={handleChangeTech}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          value={props.project.technologies}
          required
        />
        <textarea
          onChange={handleChangeDesc}
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          value={props.project.desc}
          required
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          onChange={handleChangeName}
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          value={props.project.autor}
          required
        />
        <input
          onChange={handleChangeJob}
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          value={props.project.job}
          required
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar
          updateAvatar={onChangeImageProject}
          text="Subir foto del proyecto"
        />
        <GetAvatar
          updateAvatar={onChangeUserImage}
          text="Subir foto de la autora"
        />
        <button type="submit" className="button--large">
          Guardar proyecto
        </button>
      </fieldset>
      <Loader classLoader={props.isLoading === true ? "loader" : ""} />
      <p className={`resultUrl ${props.isHidden ? "resultHidden" : ""}`}>
        {props.url === undefined ? (
          "Ha habido un error"
        ) : (
          <a href={props.url}>Mira el resultado de tu proyecto aquí</a>
        )}
      </p>
    </form>
  );
}

export default Form;
