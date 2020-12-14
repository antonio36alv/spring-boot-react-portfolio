import React from "react"
import ContentHeader from "../ContentHeader"
import { Link } from "react-router-dom"
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
        
        <div className="row flex-wrap mx-auto mx-sm-0" id="bio-content">
            
            
            <img className="picture img-thumbnail float-left" alt="Placeholder for my profile pic" src={me}/>
            

            <div className="col-12 col-md-8" id="bio">
                <p className="text-dark">Hello, I am Antonio Alvarado. I am an aspiring web developer and just 
                recently graduated from the <a className="text-success" href="https://bootcamp.sas.upenn.edu/coding/" 
                target="_blank" rel='noreferrer noopener'>UPenn Coding Bootcamp</a>. I also have an Associate Degree 
                in Information Science, from Bucks County Coummunity College. Within my time at Bucks County Community 
                College I took classes in which I have learned HTML, Java, and CSS. Practically all the Javascript I 
                know I learned at my time in the Bootcamp, including learning a lot of backend Javascript. My resume 
                has more details about my experiences and skills. Take a look at my <Link to="/Projects" 
                className="text-success">projects</Link> for some things I have worked on recently. If you would like 
                to reach out to my my phone number is: 267-503-3510 and my e-mail: <a className="text-success" 
                href="mailto:ant.36alv@gmail.com">ant.36alv@gmail.com</a>. Also if you would like to check out how 
                I built my portfolio check out <a className="text-success" rel="noopener noreferrer" target="_blank" 
                href="https://github.com/antonio36alv/spring-boot-react-portfolio">here</a>. It is built with React 
                and Spring Boot, and deployed onto AWS. Thanks for visiting!</p>
                
                <div id="bio-details">
                    <div id="check-div">
                        <p className="text-dark">
                            <span id="check-text">Check out my</span>
                            <a href="https://github.com/antonio36alv" target="_blank" rel='noreferrer noopener'><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
                            
                            <a href="https://www.linkedin.com/in/antonio-alv/" target="_blank" rel='noreferrer noopener'><img className="iconImage" alt="LinkedIn Logo" src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png" /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
}
