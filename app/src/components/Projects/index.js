import React from "react"
import ContentHeader from "../ContentHeader"
import Project from "../Project"
import teamProjects from "./team.json"
import soloProjects from "./solo.json"
import "./style.css" 
 
export default function Projects() {
 
 return <div className="container border border-primary mr-auto ml-auto" id="marginBottom">
 <div className="col-sm-12">
     <div id="contentHeader">
         <ContentHeader />
         
     </div>
     <hr className="my-4 bg-primary" />

     <div id="projectsDiv">
         
        <div className="row mb-4">

        <h2 className="text-dark">Team Projects</h2>

        <Project styles="col-md-8 one-direction"
                deployedLink={teamProjects[0].deployedLink}
                name={teamProjects[0].name} 
                screenshotLink={teamProjects[0].screenshotLink}
                githubLink={teamProjects[0].githubLink}
                tooltipText={teamProjects[0].tooltipText}/>
        </div> 

         <div className="row mb-4">
             {/* ADD STATS */}
            <Project styles="col-md-6"
                deployedLink={teamProjects[1].deployedLink}
                name={teamProjects[1].name} 
                screenshotLink={teamProjects[1].screenshotLink}
                githubLink={teamProjects[1].githubLink}
                tooltipText={teamProjects[1].tooltipText}/>
            
            <Project styles="col-md-6"
                deployedLink={teamProjects[2].deployedLink}
                name={teamProjects[2].name} 
                screenshotLink={teamProjects[2].screenshotLink}
                githubLink={teamProjects[2].githubLink}
                tooltipText={teamProjects[2].tooltipText}/>
         </div> 
         
         <h2 className="text-dark">Solo Projects</h2>

        <div className="row mb-4">
            <Project styles="col-md-6"
                deployedLink={soloProjects[0].deployedLink}
                name={soloProjects[0].name} 
                screenshotLink={soloProjects[0].screenshotLink}
                githubLink={soloProjects[0].githubLink}
                tooltipText={soloProjects[0].tooltipText}/>

            <Project styles="col-md-6"
                deployedLink={soloProjects[1].deployedLink}
                name={soloProjects[1].name} 
                screenshotLink={soloProjects[1].screenshotLink}
                githubLink={soloProjects[1].githubLink}
                tooltipText={soloProjects[1].tooltipText}/>
        </div>

        <div className="row mb-4">
            <Project styles="col-md-6"
                deployedLink={soloProjects[2].deployedLink}
                name={soloProjects[2].name} 
                screenshotLink={soloProjects[2].screenshotLink}
                githubLink={soloProjects[2].githubLink}
                tooltipText={soloProjects[2].tooltipText}/>

            <Project styles="col-md-6"
                deployedLink={soloProjects[3].deployedLink}
                name={soloProjects[3].name} 
                screenshotLink={soloProjects[3].screenshotLink}
                githubLink={soloProjects[3].githubLink}
                tooltipText={soloProjects[3].tooltipText}/>
        </div>
         
     </div>
 </div>
</div>
}