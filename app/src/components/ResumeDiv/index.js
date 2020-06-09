import React from "react"
import pdf from "./resume-2-2020.pdf"
import "./style.css"
 
export default function ResumeDiv() {
 
 return <div className="resumeDiv">
    <p>Resume</p>
    {/* PDF Resume */}
    <a href={pdf} download="resume-copy-Antonio-Alvarado">
        <img className="pdfImage iconImage" alt="PDF" src="https://freeiconshop.com/wp-content/uploads/edd/pdf-solid.png" />
    </a>
    {/* Link to resume on google drive */}
    <a href="https://docs.google.com/document/d/1zXoLlYv1AzDE_7oIJIpmF2vPbeeY8ocA1jwnV5cHufA/edit?usp=sharing">
        <img className="iconImage driveImage" alt="Google Drive" src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Drive-icon.png" />
    </a>
</div>
}