import React from 'react';
import './Header.css';
import newLogo from './newLogo.png'

function Header(){
    return(
        <div className='header'>
            <img src={newLogo} height='190'/>

        </div>
    )
}

export default Header;