import React, { Component } from "react"
import ResumeDiv from "../ResumeDiv"
import "./style.css"

class ContentHeader extends Component {

    state = {
        action: "show",
        heading: ""
    }

    toggle = () => {
        this.state.action === "show" ? this.toggleShow() : this.toggleHide()
        this.state.action === "show" ? this.setState({ action: "hide" }) : this.setState({ action: "show" })
    }

    componentWillMount = () => {
        const sendMeLocation = document.location.href.substring(document.location.href.lastIndexOf("/") + 1, document.location.href.length)

        if (sendMeLocation === "projects") this.setState({ heading: "Projects" })
        else if (sendMeLocation === "contact") this.setState({ heading: "Conact" })
        else this.setState({ heading: "Antonio" })
    }

    toggleShow = () => {

        const header = document.querySelector("#content-header h2")

        const menu = document.getElementById("btn-div")

        menu.firstChild.textContent = "X"

        const res = document.querySelector(".resumeDiv")
        menu.style.backgroundColor = "gray"

        let md = 4
        let heading = 50
        let timer = setInterval(() => {
            if (md !== 100) {
                if (md === 18) menu.appendChild(this.makethething("https://github.com/antonio36alv", "GitHub"))
                else if (md === 34) {
                    res.style.display = "flex"

                }
                else if (md === 80) menu.appendChild(this.makethething("https://www.linkedin.com/in/antonio-alvarado-4223aa1a0/", "LinkedIn"))
                md++;

                menu.style.width = `${md}%`

                if (heading > 0) {
                    heading--;
                    header.style.width = `${heading}%`
                }

            } else clearInterval(timer)
        }, 4)

        setTimeout(timer, 1000)
    }

    toggleHide = () => {

        const header = document.querySelector("#content-header h2")

        const menu = document.getElementById("btn-div")

        menu.firstChild.innerHTML = "&#8942;"

        const res = document.querySelector(".resumeDiv")

        let md = 100
        let heading = 0

        let timer = setInterval(() => {
            if (md !== 4) {

                if (md === 30) {
                    menu.style.backgroundColor = "#cfc6ba"
                    res.style.display = "none"
                }
                else if (md === 62) {
                    menu.removeChild(menu.childNodes[2])
                }
                else if (md === 88) {
                    menu.removeChild(menu.childNodes[2])
                }
                md--;
                menu.style.width = `${md}%`

                if (heading < 50) {
                    heading++;
                    header.style.width = `${heading}%`
                }
            } else clearInterval(timer)
        }, 4)

        setTimeout(timer, 1000)
    }

    makethething = (link, description) => {

        if (description === "Resume") return <ResumeDiv />
        else {
            const div = document.createElement("div")
            div.innerHTML = `<a href="${link}" target="_blank"><p>${description}</p></a>`
            return div
        }
    }

    render = () => <div id="content-header">
        <h2 className="text-dark display-4">{this.state.heading}</h2>
        <div id="btn-div">
            <button className="close text-dark" id="vert-ellipsis" aria-hidden="true" value={this.state.action} onClick={this.toggle}>&#8942;</button>
            <ResumeDiv />
        </div>
    </div>
}

export default ContentHeader