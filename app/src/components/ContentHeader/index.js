import React, { useState, useEffect } from "react"
import ResumeDiv from "../ResumeDiv"
import "./style.css"

export default function ContentHeader() {

    // state = {
        // action: "show",
        // heading: ""
    // }
    const [ headingText, setHeadingText ] = useState("");

    // toggle = () => {
    //     this.state.action === "show" ? this.toggleShow() : this.toggleHide()
    //     this.state.action === "show" ? this.setState({ action: "hide" }) : this.setState({ action: "show" })
    // }

    // cant use component will mount... fix this
    // componentWillMount = () => {
// 
    // }
// 

    useEffect(() => {
        const sendMeLocation = document.location.href.substring(document.location.href.lastIndexOf("/") + 1, document.location.href.length)
        if (sendMeLocation === "projects") setHeadingText("Projects")
        else if (sendMeLocation === "contact") setHeadingText("Conact")
        else setHeadingText("Antonio")
        // return () => {
            // cleanup
        // }
    }, [])

    const makethething = (link, description) => {
        if (description === "Resume") return <ResumeDiv />
        else {
            const div = document.createElement("div")
            div.innerHTML = `<a href="${link}" target="_blank"><p>${description}</p></a>`
            return div
        }
    }

    return <div id="content-header">
        <h2 className="text-dark display-4">{headingText}</h2>
        <div id="btn-div">
            <button className="close text-dark" id="vert-ellipsis" aria-hidden="true" value={headingText} onClick={makethething}>&#8942;</button>
        </div>
    </div>
}

// export default ContentHeader