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
    <div className="menu-container">
        <button onClick={onClick} className="menu-trigger text-white">
            Resume
            {/* add image here */}
        </button>
        {/* TODO change back to active : inactive */}
        <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
            <ul>
                <li className="d-flex flex-row">
                    <a id="pdf-download-link" href={pdf} download="resume-copy-antonio-alvardo" 
                    className="text-dark">PDF Copy</a>
{/* className="pdfImage iconImage" */}
                    <img alt="PDF"
                    src="https://freeiconshop.com/wp-content/uploads/edd/pdf-solid.png" />
                </li>
                <li className="d-flex flex-row">
                    <a id="google-drive-link" className="text-dark" target="_blank"
                    href="https://docs.google.com/document/d/1zXoLlYv1AzDE_7oIJIpmF2vPbeeY8ocA1jwnV5cHufA/edit?usp=sharing">
                    Google Drive</a>
{/* className="iconImage driveImage" */}
                    <img alt="Google Drive"
                    src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Drive-icon.png" />
                </li>
            </ul>
        </nav>
    </div>
    );
}