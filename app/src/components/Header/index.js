import React from "react"
import { HashRouter, Link } from "react-router-dom"
import "./style.css" 
 
export default function Header() {

 return     <nav className="navbar-expand bg-primary">
    <div id="header-div">
        <div id="name-div">
            <h1 className="navbar-brand col-sm-12 col-md-9">Antonio Alvarado</h1>
        </div>
        <div id="links-div">
            <HashRouter basename="/">
                <ul className="navbar-nav">
                    <li className="nav-link"><Link to="/">About</Link></li>
                    <li className="nav-link">|</li>
                    <li className="nav-link"><Link to="/projects">Projects</Link></li>
                    <li className="nav-link">|</li>
                    <li className="nav-link"><Link to="/contact">Contact</Link></li>
                </ul>
            </HashRouter>
        </div>
    </div>
 </nav>
}