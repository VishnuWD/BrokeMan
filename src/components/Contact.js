import React from 'react'

export default function Contact() {
    return (
        <div className='contact'>
            <h1>Contact Wanna be Batman</h1>
<form action="">
                <input type="text" id='Name' placeholder='Robin' />
                <input type="email" id='email' placeholder='Robin@batmail.com' />
                <textarea name="message" id="message" placeholder='Enter Your Message'></textarea>
                <button type='submit'>Submit</button>
                </form>
        </div>
    )
}
