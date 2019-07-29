import React from 'react';

import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

class Footer extends React.Component{
    
    renderFooter = () => {
        return(
            <div className='footer-Center'>
                <p className='footerText'>Follow Us:</p>
                <div className='footer-Icon'>
                    <img className='footerSocial-Logo' src={instagram} alt='instagram'/>
                    <img className='footerSocial-Logo' src={facebook} alt='facebook'/>
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