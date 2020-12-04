import React from "react"
import ContentHeader from "../ContentHeader"
import { useForm } from "react-hook-form"
import "./style.css" 
 
export default function Contact() {

    const { register, handleSubmit } = useForm();
    const onSubmit = async contact => {

        await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })

        const announce = document.getElementById("announcement")

        announce.style.color = "black"
        announce.textContent = "Thank you!"


    }

return <div className="container border border-primary mr-auto ml-auto" id="marginBottom">
    <div className="col-sm-12">
        <div id="contentHeader">
            <ContentHeader />
        </div>
    <hr className="my-4 bg-primary"/>
    <form className="text-dark" onSubmit={handleSubmit(onSubmit )}>

        <div id="contactMeDiv">
            <span className="text-dark">Contact Antonio:</span> <span className="text-dark">267-503-3510</span> <span className="text-dark"><a className="text-dark" href="mailto:ant.36alv@gmail.com">ant.36alv@gmail.com</a></span>
        </div>
        
        <div className="form-group">
            <label for="name">Name *</label>
            <input type="text" name="name" ref={register({ required: true})}/>
            <br/>
        </div>
        
        <div className="form-group">
            <label for="email">Email *</label>
            <input type="email" name="email" ref={register({ required: true})}/>
            <br/>
        </div>
        
        <div className="form-group">
            <label for="message">Message *</label>
            <textarea  className="form-control" name="message" rows="4"  ref={register({ required: true})}/>
            <p id="announcement">* Required</p>
        </div>
        
        
        <div className="form-group btn-group">
            <button type="submit" className="btn btn-success col-sm-1">Submit</button>
            <button type="reset" className="btn btn-warning col-sm-1">Reset</button>
        </div>
    </form>

    </div>
</div>
}