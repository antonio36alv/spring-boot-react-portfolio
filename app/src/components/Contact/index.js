import React, { useState } from "react"
import ContentHeader from "../ContentHeader"
import "./style.css" 
 
export default function Contact() {

    const [ nameInput, setNameInput ] = useState("")
    const [ emailInput, setEmailInput ] = useState("")
    const [ messageInput, setMessageInput ] = useState("")
    // const [ contact, setContact] = useState({
    //                                             name: nameInput, 
    //                                             email: emailInput, 
    //                                             message: messageInput
    //                                         })

    const handleChange = e => {

        console.log(e.target.id)

        if(e.target.id === "name") setNameInput(e.target.value)
        else if(e.target.id === "email") setEmailInput(e.target.value)
        else setMessageInput(e.target.value)
    }

    const clear = () => {
        setNameInput("")
        setEmailInput("")
        setMessageInput("")
    }

    const handleSubmit = () => {

        console.log(nameInput);
        console.log(emailInput);
        console.log(messageInput);

        const newContact = {
            name: nameInput,
            email: emailInput,
            message: messageInput
        }

        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact),
        })
    }

// keepthebikestraight
    
return <div className="container border border-primary mr-auto ml-auto" id="marginBottom">
<div className="col-sm-12">
    <div id="contentHeader">
        <ContentHeader />
    </div>
<hr className="my-4 bg-primary"/>
<form className="text-dark" onSubmit={handleSubmit}>

    <div id="contactMeDiv">
        <span className="text-dark">Contact Antonio:</span> <span className="text-dark">267-503-3510</span> <span className="text-dark"><a className="text-dark" href="mailto:ant.36alv@gmail.com">ant.36alv@gmail.com</a></span>
    </div>
    <div className="form-group">
        <label for="name">Name</label>
        <input value={nameInput} onChange={handleChange} type="text" id="name" />
        <br/>
    </div>
    
    <div className="form-group">
        <label for="email">Email</label>
        <input value={emailInput} onChange={handleChange} type="email" id="email" />
        <br/>
    </div>
    
    <div className="form-group">
        <label for="message">Message</label>
        <textarea  value={messageInput} onChange={handleChange} className="form-control" name="message" rows="4" />
    </div>
    
    <div className="form-group btn-group">
        <button type="submit" className="btn btn-success col-sm-1">Submit</button>
        <button onClick={clear} className="btn btn-warning col-sm-1">Reset</button>
    </div>
</form>

<div>
    {/* <button onClick={viaConDios}>Arlen</button>
    contacts.length == 0 ? <p>Loading...</p> : {contacts.map(con => <p>Contact:{`${JSON.stringify(con)}`}</p>)} */}
</div>
</div>
</div>
}