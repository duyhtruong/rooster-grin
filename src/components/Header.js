import React from 'react';
import logoWhite from '../assets/logo-white.svg';

class Header extends React.Component{
    render(){
        return(
            <div className='headerBody'>
                <img className='headerLogo' src={logoWhite} alt='Logo White' />
                <div className='headerTitle'>
                    <p>Welcome to</p>
                    <p>Rooster Grin</p>
                    <button> button </button>
                </div>
            </div>
        )
    }
}

export default Header;