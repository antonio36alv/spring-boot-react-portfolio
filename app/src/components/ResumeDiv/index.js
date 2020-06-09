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
    <a href="https://drive.google.com/file/d/1uHEM3fGM7D5ESMbsAlJTvFBHTYLm0rc_/view?usp=sharing">
        <img className="iconImage driveImage" alt="Google Drive" src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Drive-icon.png" />
    </a>
</div>
}