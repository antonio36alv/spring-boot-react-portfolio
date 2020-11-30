import React, { useState, useEffect, useRef } from "react"
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
            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul>
                    <li className="text-dark">PDF</li>
                    <li className="text-dark">Word</li>
                    <li className="text-dark">Google Drive</li>
                </ul>
            </nav>
        </div>
    );
}