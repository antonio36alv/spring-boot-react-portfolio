import React, { useState, useEffect } from "react"
import DropdownMenu from "../DropdownMenu"
import "./style.css"

export default function ContentHeader() {

    const [ headingText, setHeadingText ] = useState("");

    useEffect(() => {
        const sendMeLocation = document.location.href.substring(document.location.href.lastIndexOf("/") + 1, document.location.href.length)
        if (sendMeLocation === "projects") setHeadingText("Projects")
        else if (sendMeLocation === "contact") setHeadingText("Conact")
        else setHeadingText("Antonio")
    }, [])
    return <div id="content-header" className="d-flex flex-column flex-sm-row">
        <h2 className="text-dark display-4 col-10 col-sm-8 col-lg-10 mx-auto px-sm-0">{headingText}</h2>
        <DropdownMenu/>
    </div>
}
