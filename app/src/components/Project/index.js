import React from "react"
import InfoIcon from "../InfoIcon"
import "./style.css"

export default function Project(props) {

    return (
    <div className={`col-12 ${props.styles}`}>
        <a href={props.deployedLink} className="img-fluid">
    <h3 className="text-dark">{props.name}</h3>
            <img className="projectScreenshot" alt={props.name} src={props.screenshotLink} />
        </a>
        <div className="project-icons-div">
            <a href={props.githubLink}><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
            <InfoIcon name={props.name} tooltipText={props.tooltipText}/>
        </div>
    </div>
    )
}