import style from './header.css'
import logo1 from '../../logo/Ellipse 1.png'
import logo2 from '../../logo/ounter.png'
import React from 'react';

const Header = () => {
    return (
        <div className='header_bloc'>
           <div>
            
            <img src={logo1} alt="Логотип" />
            <img src={logo2} alt="Логотип" />

           </div> 
           <div className='link_headar_bloc'>
            <a href="0#">Главная</a>
            <a href="0#">О нас</a>
            <a href="0#">Контакты</a>
            </div> 
        </div>
    );
};

export default Header;