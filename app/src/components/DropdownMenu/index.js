import React, { useState, useEffect, useRef } from "react"
import pdf from "./resume.pdf"
import "./style.css" 
 
export default function DropdownMenu() {
    // https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
    const dropdownRef = useRef(null);
    const [ isActive, setIsActive ] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {

        const pageClickEvent = (e) => {
            console.log(e);
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        if(isActive) window.addEventListener("click", pageClickEvent);

        return () => {
            window.removeEventListener("click", pageClickEvent);
        }

    }, [ isActive ])

    return (
        // old 
        // <div className="menu-container">
        // <button onClick={onClick} className="menu-trigger text-white">
    // <div className="menu-container col-sm-3 col-md-2 mx-auto mx-sm-0">
    <div className="menu-container col-10 col-sm-4 col-lg-2 mx-auto mx-sm-0 px-0">
        <button onClick={onClick} className="menu-trigger text-white text-center">
            <span>Resume</span>
            {/* add image here */}
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
            <ul>
                <li className="d-flex flex-row">
                    <a id="pdf-download-link" href={pdf} download="resume-copy-antonio-alvardo" 
                    className="text-dark">
                    <img alt="PDF"
                    src="https://freeiconshop.com/wp-content/uploads/edd/pdf-solid.png" />
                    PDF Copy
                    </a>
{/* className="pdfImage iconImage" */}
                </li>
                <li className="d-flex flex-row">
                    <a id="google-drive-link" className="text-dark" target="_blank" rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/1zXoLlYv1AzDE_7oIJIpmF2vPbeeY8ocA1jwnV5cHufA/edit?usp=sharing">
                    <img alt="Google Drive"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" />
                    Google Drive
                    </a>
{/* className="iconImage driveImage" */}
                </li>
            </ul>
        </nav>
    </div>
    );
}
