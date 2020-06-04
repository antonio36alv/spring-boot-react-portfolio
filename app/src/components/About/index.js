import React from "react"
import ContentHeader from "../ContentHeader"
import ResumeDiv from "../ResumeDiv"
import "./style.css" 
import me from "./me.jpg"
 
export default function About() {

 return <div className="container border border-primary mr-auto ml-auto" id="marginBottom">
 <div className="col-sm-12">
     
     <div id="contentHeader">
         <ContentHeader />
     </div>
     <hr className="my-4 bg-primary"/>
     
    <div className="col-md-12" id="cont">
        
        <div className="row flex-wrap" id="bio-content">
             
             <div className="col-12 col-md-4" id="portrait">
                <img className="img-thumbnail mb-3 picture" alt="Placeholder for my profile pic" src={me}/>
             </div>

             <div className="col-12 col-md-8" id="bio">
                 <p className="text-dark">Hello, I am Antonio Alvarado. I am an aspiring web developer and currently a student in the <a className="text-success" href="https://bootcamp.sas.upenn.edu/coding/" target="_blank" rel='noreferrer noopener'>Penn Coding Bootcamp</a>. I
                 have an Associate's Degree in Information Science, from Bucks County Coummunity College. Within my time at Bucks County Community College I have taken classes in which I have learned HTML, Java, and CSS. Javascript is another language I also know. Take a look at my <a className="text-success" href="portfolio.html">Portfolio</a> for some things I have worked on recently. If you would like to reach out to my my phone number is: 267-503-3510 My e-mail: <a className="text-success" href="mailto:ant.36alv@gmail.com">ant.36alv@gmail.com</a></p>
                
                <div id="bio-details">
                    <div id="check-div">
                        <p className="text-dark">
                            <span id="check-text">Check out my</span>
                            <a href="https://github.com/antonio36alv" target="_blank" rel='noreferrer noopener'><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
                            
                            <a href="https://www.linkedin.com/in/antonio-alvarado-4223aa1a0/" target="_blank" rel='noreferrer noopener'><img className="iconImage" alt="LinkedIn Logo" src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png" /></a>
                        </p>
                    </div>
                <ResumeDiv />
             </div>
        
            </div>

        </div>
    </div>

</div>
</div>
}