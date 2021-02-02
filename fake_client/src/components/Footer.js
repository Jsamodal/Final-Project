import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='stay-updated-container'>
                <small className='footer-title'>STAY UPDATED</small>
                <div className='footer-links'>
                    <a href='https://www.facebook.com/CraveChurch' target='_blank'className='facebook'>Facebook</a>
                    <a href='https://www.instagram.com/cravechurch/' target='_blank'className='instagram'>Instagram</a>
                    <a href='https://www.youtube.com/channel/UCG3xuNWYMUDvYWabaSK0vDA' target='_blank'className='youtube'>Youtube</a>
                </div>
            </div>

            <div className='contact-us-container'>
                <small className='contact-title'>CONTACT US</small>
                <a href='mailto:ex.123email@gmail.com' className='contact-email' className='email'>ex.123email@gmail.com</a>
            </div>
        </div>
    )
}

export default Footer
