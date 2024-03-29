import React from 'react';

import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

//Renders Footer with social media icon links

class Footer extends React.Component{
    
    renderFooter = () => {
        return(
            <div className='footer-Center'>
                <p className='footerText'>Follow Us:</p>
                <div className='footer-Icon'>
                    {/* Instagram Link */}
                    <a 
                        href='https://www.roostergrin.com/' 
                        target='_blank' 
                        rel='noopener noreferrer'>
                        <img className='footerSocial-Logo' src={instagram} alt='instagram'/>
                    </a>
                    {/* Facebook Link */}
                    <a 
                        href='https://www.facebook.com/RoosterGrin/' 
                        target='_blank' 
                        rel='noopener noreferrer'>
                        <img className='footerSocial-Logo' src={facebook} alt='facebook'/>
                    </a>
                </div>
            </div>
        )
    }
    
    render(){
        return(
            <div className='bodyHeight-25vh background-Gray'>
                {this.renderFooter()}
            </div>
        )
    }
}

export default Footer;