import React from 'react';
import logoWhite from '../assets/logo-white.svg';

class Header extends React.Component{
    render(){
        return(
            <div className='headerBody'>
                <img className='headerLogo' src={logoWhite} alt='Logo White' />
                <div className='headerTitle'>
                    <p className='headerTitle-Welcome'>WELCOME TO</p>
                    <p className='headerTitle-Secondary'>Rooster Grin</p>
                    <button className='buttons button-Purple'>BUTTON BUTTON</button>
                </div>
                
            </div>
        )
    }
}

export default Header;