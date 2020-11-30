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

    return <div id="content-header">
        <h2 className="text-dark display-4">{headingText}</h2>
        <DropdownMenu/>
    </div>
}
