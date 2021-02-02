import React from 'react'
import locations from '../images/Location_Pic.jpg'
import './Locations.css'
import Burnaby from '../images/Burnaby_Pic.jpg'
import Surrey from '../images/Surrey_Pic.jpg'
import Vancouver from '../images/Vancouver_Pic.jpg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';


function Locations() {
    return (
        <div className='locations-container'>
            <div className='locations-header'>
                <img className='locations-jpg'src={locations}/>
                <h1 className='locations-title'>Locations</h1>
            </div>

            <div className='locations-card'>
                
                    <div className='Burnaby'>
                        <div className='campus-name'>
                            <img className='locations-pic'src={Burnaby}/>
                            <h3 className='burnaby-campus-location'>BURNABY</h3>
                            <small className='burnaby-campus-type'>ENGLISH CAMPUS</small>
                            <div className='chat-container'>
                                <small className='chat-type'>Need help?</small>
                                <small className='chat-type'>Speak to a representative: </small>
                                <Link to='/chat'className='burnaby-chat-link' target='_blank'>CHAT HERE</Link>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='address'>
                                <div className='location'>
                                    <h2 className='h2-titles'>ADDRESS</h2>
                                    <h3 className='h3-text'>7837 Canada Way</h3>
                                    <h3 className='h3-text'>Burnaby, BC</h3>
                                </div>
                            </div>
                            <div className='giving'>
                            <h2 className='h2-titles'>GIVING</h2>
                        
                                <a href='https://cravechurch.churchcenter.com/giving' target='_blank' className='partner'>PARTNER WITH US</a>
                            </div>
                            <div className='times'>
                            <h2 className='h2-titles'>TIMES</h2>
                                <h3 className='h3-text'>Sunday   8:00PM (Online)</h3>
                                <h3 className='h3-text'>Thursday   7:00PM (Online)</h3>
                                <a href='https://www.facebook.com/PastorMarlonMedina/'target='_blank'className='watch'>WATCH MDWK</a>
                            </div>
                            <div className='CG'>
                                <h2 className='h2-titles'>CITY GROUPS</h2>
                                <a href='https://cravechurch.churchcenter.com/groups'target='_blank'className='connect'>GET CONNECTED</a>
                            </div>
                        </div>
                    </div>


                    <div className='Surrey'>
                        <div className='campus-name'>
                            <img className='locations-pic'src={Surrey}/>
                            <h3 className='surrey-campus-location'>SURREY</h3>
                            <small className='surrey-campus-type'>ENGLISH CAMPUS</small>
                            <div className='chat-container'>
                                <small className='chat-type'>Need help?</small>
                                <small className='chat-type'>Speak to a representative: </small>
                                <Link to='/chat'target='_blank'className='surrey-chat-link'>CHAT HERE</Link>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='address'>
                                <div className='location'>
                                    <h2 className='h2-titles'>ADDRESS</h2>
                                    <h3 className='h3-text'>8383 140th Street </h3>
                                    <h3 className='h3-text'>Surrey, BC</h3>
                                </div>
                            </div>
                            <div className='giving'>
                            <h2 className='h2-titles'>GIVING</h2>
                        
                                <a href='https://cravechurch.churchcenter.com/giving' target='_blank' className='partner'>PARTNER WITH US</a>
                            </div>
                            <div className='times'>
                            <h2 className='h2-titles'>TIMES</h2>
                                <h3 className='h3-text'>Sunday   8:00PM (Online)</h3>
                                <h3 className='h3-text'>Thursday   7:00PM (Online)</h3>
                                <a href='https://www.facebook.com/PastorMarlonMedina/'target='_blank'className='watch'>WATCH MDWK</a>
                            </div>
                            <div className='CG'>
                                <h2 className='h2-titles'>CITY GROUPS</h2>
                                <a href='https://cravechurch.churchcenter.com/groups'target='_blank'className='connect'>GET CONNECTED</a>
                            </div>
                    </div>

                    <div className='Vancouver'>
                        <div className='campus-name'>
                            <img className='locations-pic'src={Vancouver}/>
                            <h3 className='vancouver-campus-location'>VANCOUVER</h3>
                            <small className='vancouver-campus-type'>ENGLISH CAMPUS</small>
                            <div className='chat-container'>
                                <small className='chat-type'>Need help?</small>
                                <small className='chat-type'>Speak to a representative: </small>
                                <Link to='/chat'target='_blank' className='vancouver-chat-link'>CHAT HERE</Link>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='address'>
                                <div className='location'>
                                    <h2 className='h2-titles'>ADDRESS</h2>
                                    <h3 className='h3-text'>1225 West 73rd</h3>
                                    <h3 className='h3-text'>Vancouver, BC</h3>
                                </div>
                            </div>
                            <div className='giving'>
                            <h2 className='h2-titles'>GIVING</h2>
                        
                                <a href='https://cravechurch.churchcenter.com/giving' target='_blank' className='partner'>PARTNER WITH US</a>
                            </div>
                            <div className='times'>
                            <h2 className='h2-titles'>TIMES</h2>
                                <h3 className='h3-text'>Sunday   8:00PM (Online)</h3>
                                <h3 className='h3-text'>Thursday   7:00PM (Online)</h3>
                                <a href='https://www.facebook.com/PastorMarlonMedina/'target='_blank'className='watch'>WATCH MDWK</a>
                            </div>
                            <div className='CG'>
                                <h2 className='h2-titles'>CITY GROUPS</h2>
                                <a href='https://cravechurch.churchcenter.com/groups'target='_blank'className='connect'>GET CONNECTED</a>
                            </div>
                        </div>
                    </div>
                    </div>
                
                

            </div>

            <div className='location-footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Locations
