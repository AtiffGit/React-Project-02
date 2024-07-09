import React, { useState } from 'react'
import Button from '../button/Button'
import form from './ContactFrom.module.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function ContactForm() {
  const [name,setName ] = useState("Atif");
  const [email,setEmail ] = useState("Dummy@gmail.com");
  const [text,setText ] = useState("Hello World");
 
  
  const onSubmit = (event) =>{
      event.preventDefault();
      setName(event.target[0].value)
      setEmail(event.target[1].value)
      setText(event.target[2].value)
     }

  return (
    <div className={form.container}>
        <div className={form.contact_form}>
            <div className={form.topbtn}>

            <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px"/>}/>
            </div>
            <Button
            isOutline={true}
            text="VIA EMAIL FORM" icon={<MdOutlineMail fontSize="24px"/>}/>

        <form onSubmit={onSubmit} action="">
         <div className={form.form_container}>
         <label htmlFor="name">Name</label>
         <input type="text" name="name" />
         </div>

         <div className={form.form_container}>
         <label htmlFor="email">Email</label>
         <input type="email" name="email" />
         </div>

         <div className={form.form_container}>
         <label htmlFor="text">Text</label>
         <textarea  name="text" rows="5" />
         </div>
        <div style={{
          display:"flex",
          justifyContent:"end",
        }}>
        <Button
            text="SUBMIT BUTTON"/>
        </div>
        <div>
          {name + " "  +  email + " "  +  text + " " }
        </div>

        </form>
        </div>
        <div className={form.contact_image}>
          <img src="/images/contact.svg" alt="image" />
        </div>

    </div>  
  )
}

export default ContactForm