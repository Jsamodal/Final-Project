import React from 'react'
import PMM from '../images/Pastor_Pic.jpg'
import './Leadership.css'
import Text from'../images/Pastor_Text.png'
import Footer from '../components/Footer'

function Leadership() {
    return (
        <div className='container-leadership'>
            <div className="pastor">
            
                <h1 className="lead-tit">LEADERSHIP</h1>
                <div className="lead-line"/>
                <img className="pastor-text" src={Text}/>
                <img className="pastor-jpg"src={PMM}/>
                
                <p className='paragraph'> 
                    Marlon Medina is the Lead & Founding Pastor of Crave Church - a ministry 
                    that was founded in Vancouver BC, Canada. With the vision of being a 
                    global ministry, he has planted and equipped campuses in both the Lower 
                    Mainland of British Columbia and in Honduras, Central America. Pastor 
                    Marlon's vision is to continue creating a space of grace for imperfect 
                    people to crave God worldwide.
                </p>

                <a className="lead-btn" href="https://www.facebook.com/PastorMarlonMedina/" target="_blank">LEARN MORE</a>
            </div>

            <div className='leadership-footer'>
                <Footer/>
            </div>
        </div>
    )
        
}

export default Leadership
