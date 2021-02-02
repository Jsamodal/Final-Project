import React from 'react'
import BelText from '../images/Beliefs_Text.png'
import Beliefs from '../images/Beliefs_Pic.jpg'
import './Beliefs.css'
import Footer from '../components/Footer'
function Belief() {
    return (
        <div className='beliefs-container'>
            <div className='beliefs'>
                <img  className='beliefs-text'src={BelText}/>
                <img className='beliefs-pic'src={Beliefs}/>
                <div className='description'>
                    <div className='tags'>
                        <h1>THE FATHER</h1>
                        <h3 className='tags-h3'>There is only one true God, Creator of Heaven and Earth.</h3>
                    </div>
                    <div className='tags'>
                        <h1>THE SON</h1>
                        <h3 className='tags-h3'>Jesus Christ physically rose from the dead, ascended into heaven and will one day physically return.
                    </h3>
                    </div>
                    <div className='tags'>
                        <h1>THE HOLY SPIRIT</h1>
                        <h3 className='tags-h3'>The Holy Spirit works to lead, instruct, and empower every believer.</h3>
                    </div>
                    <div className='tags'>
                        <h1>THE TRINITY</h1>
                        <h3 className='tags-h3'>God exists eternally in three distinct persons with equal power and authority.</h3>
                    </div>
                    <div className='tags'>
                        <h1>THE BIBLE</h1>
                        <h3 className='tags-h3'>The Bible is true, authoritative, and sufficient.</h3>
                    </div>
                    <div className='tags'>
                        <h1>SALVATION</h1>
                        <h3 className='tags-h3'>Faith in Jesus is our only means of salvation and a sufficient payment for our sin. Salvation cannot be earned; it can only be received.</h3>
                    </div>
                    <div className='tags'>
                        <h1>CHURCH</h1>
                        <h3 className='tags-h3'>The Church is a local community working to bring the Gospel to the world through His commands and teachings and seeks to glorify Christ.</h3>
                    </div>
                    <div className='tags'>
                        <h1>MAN</h1>
                        <h3 className='tags-h3'>God created man to exist eternally. Man will either be together with God through forgiveness and salvation in Heaven or separated by sin in Hell.</h3>
                    </div>
                </div>
            </div> 
            <div>
                <Footer/>
            </div>   
        </div>
    )
}

export default Belief
