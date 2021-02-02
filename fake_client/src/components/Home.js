import React , {Component}from 'react'
import VHS from '../images/VHS.gif'
import './Home.css'
import Footer from '../components/Footer'
import MDWK from '../components/Mdwk'


class Sunday extends Component {
  
      
      render() {
       return( 
           <>
             <div className='sunday-container'>
             <img  src={VHS}  className='sunday-VHS'/>
                <div className='sunday-content'>
                    <div className='sunday-title'>
                            <div className='sunday-h2-1'>
                                <h2>SUNDAY</h2>
                            </div>
                            <div className='sunday-h2-2'>
                                <h2>ONLINE</h2>
                            </div>
                            <div className='sunday-h6'>
                                <h6> ALL EXPERIENCES TIMES ARE IN PST</h6>
                            </div>
                    </div>
                    <div className='sunday-info'>
                        <div className='sunday-spanish'>
                            <a className='sunday-link' href='https://www.facebook.com/PastorMarlonMedina/' target="_blank">SUNDAY -6:00PM </a>
                            <small className='sunday-type'>SPANISH</small>
                         </div>
                         <div className='sunday-english'>
                            <a className='sunday-link' href='https://www.facebook.com/PastorMarlonMedina/' target="_blank">SUNDAY -8:00PM </a>
                            <small className='sunday-type'>ENGLISH</small>
                        </div>

                    </div>
        
                  

                </div>


                
            
            <div>


            </div>
                <MDWK/>
    
            </div>

            

            <div className='home-footer'>
                <Footer/>
            </div>
        </>
        )
        }

}
export default Sunday

