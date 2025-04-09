import logoCoolProjects from "../images/laptop-code-solid.svg";
import LogoAdalab from "./LogoAdalab";
import "../scss/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src={logoCoolProjects}
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <LogoAdalab />
    </header>
  );
}

export default Header;
