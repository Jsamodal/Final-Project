import React , {Component}from 'react'
import VHS from '../images/VHS.gif'
import './Mdwk.css'


class Mdwk extends Component {
  
      
      render() {
       return( 
            <div className='mdwk-container'>
                <img src={VHS} className='VHS-2'/>
                    <div className='mdwk-title-container'>
                            <div className='mdwk-h2-1'>
                                <h2>MIDWEEK</h2>
                            </div>
                            <div className='mdwk-h2-2'>
                                <h2>ONLINE</h2>
                            </div>
                            <div className='mdwk-h6'>
                                <h6> ALL MDWK TIMES ARE IN PST</h6>
                            </div>
                    </div>
                  
                        <a className='mdwk-date' href='https://www.facebook.com/PastorMarlonMedina/' target="_blank">THURSDAY -7:00PM </a>
                       
             
                </div>


                
                
            

    
            
    
        
        )
        }

}
export default Mdwk

