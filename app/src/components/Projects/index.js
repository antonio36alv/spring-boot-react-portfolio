import React from "react"
import ContentHeader from "../ContentHeader"
import InfoIcon from "../InfoIcon"
import "./style.css" 
 
export default function Projects() {
 
 return <div className="container border border-primary mr-auto ml-auto" id="marginBottom">
 <div className="col-sm-12">
     <div id="contentHeader">
         <ContentHeader />
         
     </div>
     <hr className="my-4 bg-primary" />

     {/* <!-- <a href="https://antonio36alv.github.io/Stats-On-The-Fly" className="img-fluid col-12 col-md-6">
         <h3 className="text-dark">Stats On The Fly - Team Project 1</h3>
         <img src="https://antonio36alv.github.io/Stats-On-The-Fly/images/stats-on-the-fly-screenshot.png">
     </a>

     <a href="https://collab-hub.herokuapp.com/" className="img-fluid col-12 col-md-6">
         <h3 className="text-dark">CollabHub - Team Project 2</h3>
         <img src="./images/login.jpg">
     </a> --> */}
     <div id="projectsDiv">


        <div className="row mb-4">

        <h2 className="text-dark">Team Projects</h2>

        <div className="col-12 col-md-8 one-direction">
                 <a href="https://asteria-app.herokuapp.com/" className="img-fluid">
                     <h3 className="text-dark">Asteria | MERN</h3>
                     <img className="projectScreenshot" alt="Stats On The Fly" src="https://raw.githubusercontent.com/cil5345/Asteria/master/screenshot.png" />
                 </a>
                 <div className="project-icons-div">
                     <a href="https://github.com/antonio36alv/Asteria"><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
                    <InfoIcon toolTip="Asteria"/>
                 </div>
             </div>
        </div> 

         <div className="row mb-4">
             <div className="col-12 col-md-6"> 
                 <a href="https://antonio36alv.github.io/Stats-On-The-Fly" className="img-fluid">
                     <h3 className="text-dark">Stats On The Fly</h3>
                     <img className="projectScreenshot" alt="Stats On The Fly" src="https://antonio36alv.github.io/Stats-On-The-Fly/images/stats-on-the-fly-screenshot.png" />
                 </a>
                 <a href="https://github.com/antonio36alv/Stats-On-The-Fly"><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
             </div>

             <div className="col-12 col-md-6"> 
                 <a href="https://collab-hub.herokuapp.com/" className="img-fluid">
                     <h3 className="text-dark">CollabHub</h3>
                     <img className="projectScreenshot" alt="CollabHub" src="https://collab-hub.herokuapp.com/screenshot" />
                 </a>
                 <a href="https://github.com/antonio36alv/collabHub"><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
             </div>                    
         </div> 
         
         <h2 className="text-dark">Solo Projects</h2>

         <div className="row mb-4">
             <div className="col-12 col-md-6"> 
                 <a href="https://antonio36alv.github.io/Password-Generator/" className="img-fluid col-xs-12 col-md-6">
                     <h3 className="text-dark">Password-Generator</h3>
                     <img className="projectScreenshot" alt="Password Generator" src="https://antonio36alv.github.io/Password-Generator/images/origin.PNG" />
                 </a>
                 <a href="https://github.com/antonio36alv/Password-Generator"><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
             </div>

            <div className="col-12 col-md-6"> 
                 <a href="https://antonio36alv.github.io/SportsQuiz/" className="img-fluid col-xs-12 col-md-6">
                     <h3 className="text-dark">Sports Quiz</h3>    
                     <img className="projectScreenshot" alt="Sports Quiz" src="https://antonio36alv.github.io/SportsQuiz/Images/quiz.PNG" />
                 </a>
                 <a href="https://github.com/antonio36alv/SportsQuiz"><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
             </div>
         </div>

         <div className="row mb-4">
            <div className="col-12 col-md-6">
                <a href="https://vast-citadel-14289.herokuapp.com/" className="img-fluid col-xs-12 col-md-6">
                    <h3 className="text-dark">Note Taker</h3>
                    <img className="projectScreenshot" alt="Note Taker" src="https://vast-citadel-14289.herokuapp.com/images/screenshot.png" />
                </a>
                <a href="https://github.com/antonio36alv/note-taker"><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
             </div>
             {/* <!-- Until we update looks, don't include -->
             <!--a href="https://antonio36alv.github.io/weather-dashboard/" className="img-fluid col-xs-12 col-md-6">
                 <h3 className="text-dark">Weather Dashboard</h3>
                 <img src="https://antonio36alv.github.io/weather-dashboard/images/screenshot.png">
             </a--> */}
            <div className="col-12 col-md-6">
                <a href="https://antonio36alv.github.io/employee-directory/" className="img-fluid col-xs-12 col-md-6">
                        <h3 className="text-dark">Employee Directory</h3>
                        <img className="projectScreenshot" alt="Employee Directory" src="https://raw.githubusercontent.com/antonio36alv/employee-directory/master/public/screenshot.png" />
                </a>
                <a href="https://github.com/antonio36alv/employee-directory"><img className="iconImage gitImage" alt="GitHub Logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" /></a>
            </div>
        </div>
         
     </div>
 </div>
</div>
}