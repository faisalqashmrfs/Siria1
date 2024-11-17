import React, { useState } from 'react'
import './ContactMessages.css'
import axios from 'axios';


const ContactMessages = () => {

  const [isLoading, setIsLoading] = useState(false); 
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    setIsLoading(true);
 
    axios.post('http://127.0.0.1:8000/api/addContactMessage', {
      full_name: fullname,
      email: email,
      message:message
    }).then(res => {

    

      if (res.status === 201) {
        alert('message send');
        setFullName('');
        setEmail('');
        setMessage('');
        setIsLoading(false)
      
          
      }
    })
  }

  return (
    <div className='ra-contact-msg-wrapper'>
      
      <div className='ra-contact-msg-title'>
        <h3>تواصل معنا </h3>
      </div>

      <div className='ra-contact-msg-rectangle'>
        <div className="ra-contact-msg-form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input placeholder="الاسم الكامل" value={fullname} onChange={(e) => setFullName(e.target.value )}  type="text" />
            <input placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value )}  type="email" />
            <textarea placeholder="اكتب رسالتك" value={message} onChange={(e) => setMessage(e.target.value )}  />
            <div className='button-div'>
              <button type="submit" disabled={isLoading} >   {isLoading ? "جاري الإرسال ..." : 'إرسال'}</button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default ContactMessages
