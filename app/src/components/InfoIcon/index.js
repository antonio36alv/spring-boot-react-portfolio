import React from "react"
import "./style.css"
import icon from "./info-icon.png"
import ReactTooltip from "react-tooltip"

export default function InfoIcon(props) {
 
    return <>
        <img className="info-icon gitImage" alt={props.name} src={icon} data-for={props.name} data-tip="true" data-iscapture="true" currentitem="false" />
        
        <ReactTooltip id={props.name} className="tooltip" aria-haspopup='true' >
                <p>{`${props.tooltipText}`}</p>
        </ReactTooltip>
        </>
}