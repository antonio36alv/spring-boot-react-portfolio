import React from "react"
import ContentHeader from "../ContentHeader"
import Project from "../Project"
import teamProjects from "./team.json"
import soloProjects from "./solo.json"
import "./style.css" 

const renderProjects = (arr, projectsType) => {
    return (
        <>
        <div className="row mb-4">
            {arr.map((project, index) => 
                <>
                {index === 0 ? <h2 className="text-dark">{projectsType}</h2> : null}
                <Project styles={index === 0 && arr.length % 2 > 0 ? "col-md-8 one-direction" : "col-md-6"}
                    deployedLink={project.deployedLink}
                    name={project.name} 
                    screenshotLink={project.screenshotLink}
                    githubLink={project.githubLink}
                    tooltipText={project.tooltipText}/>
                </>
            )}
        </div>
        </>
    )
}
 
export default function Projects() {
 
 return <div className="container border border-primary mr-auto ml-auto" id="marginBottom">
 <div className="col-sm-12">
     <div id="contentHeader">
         <ContentHeader />
         
     </div>
     <hr className="my-4 bg-primary" />
     <div id="projectsDiv">
        {                
            renderProjects(teamProjects, "Team Projects")
        }
        {
            renderProjects(soloProjects, "Solo Projects")
        } 
     </div>
 </div>
</div>
}