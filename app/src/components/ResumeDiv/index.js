import React from "react"
import "./style.css"
 
export default function ResumeDiv() {
 
 return <div className="resumeDiv">
     <p>Resume</p>
 {/* <a href="/resume-2-2020.pdf" download="resume-copy-Antonio-Alvarado">
     <img className="pdfImage iconImage" alt="PDF" src="https://freeiconshop.com/wp-content/uploads/edd/pdf-solid.png" />
 </a> */}
 <a href="https://drive.google.com/file/d/1uHEM3fGM7D5ESMbsAlJTvFBHTYLm0rc_/view?usp=sharing">
     <img className="iconImage driveImage" alt="Google Drive" src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Drive-icon.png" />
 </a>
</div>
}