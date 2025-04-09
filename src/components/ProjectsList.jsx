import ProjectCard from "./ProjectCard";
import ButtonProjects from "./ButtonProjects";

function ProjectsList () {
    return (
        <section>
            
            <ul>
                <li><ProjectCard /></li>
                <li><ProjectCard /></li>
                <li><ProjectCard /></li>
                <li><ProjectCard /></li>
            </ul>
        </section>
    )
}

export default ProjectsList;