import React from "react"
import "./style.css"
import icon from "./info-icon.png"
import ReactTooltip from "react-tooltip"

export default function InfoIcon(props) {
 
    // return <img alt="long" src={icon} data-for="main" data-tip="Hello<br />multiline<br />tooltip" data-iscapture="true" currentitem="false" />
    return <>
        <img className="iconImage gitImage" alt="long" src={icon} data-for={props.name} data-tip={props.name} data-iscapture="true" currentitem="false" />
<ReactTooltip id={props.name} className="tooltip" aria-haspopup='true' >
<p>{`${props.toolTip}`}</p>
</ReactTooltip>
        </>
}