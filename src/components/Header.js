import React from 'react';
import logoWhite from '../assets/logo-white.svg';

import { IoIosArrowDown } from 'react-icons/io';
class Header extends React.Component{
    render(){
        return(
            <div className='headerBody'>
                <img className='headerLogo' src={logoWhite} alt='Logo White' />
                <div className='headerTitle animated fadeIn'>
                    <p className='headerTitle-Welcome'>WELCOME TO</p>
                    <p className='headerTitle-Secondary'>Rooster Grin</p>
                    <button className='buttons button-Purple'>BUTTON BUTTON</button>
                    <div className='headerIcon-Down animated infinite bounce delay-2s slow'><IoIosArrowDown /></div>
                </div>
                
            </div>
        )
    }
}

export default Header;