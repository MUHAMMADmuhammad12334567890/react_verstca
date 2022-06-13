import style from './footer.css'
import logo1 from '../../logo/Vector.jpg'
import logo2 from '../../logo/Vector2.jpg'
import React from 'react';

const Footer = () => {
    return (
        <div>
        <div className='Footer_bloc'>
            <img className='img_Footer' src={logo1} alt="" />
            <img className='img_Footer1' src={logo2} alt="" />
            <a href="0#">Партнерам</a>
            <a href="0#">Разработчикам</a>
            <a href="0#">Вакансии</a>
            <p className='Footer_data_intocode'>ООО “интукод”, 2020г.</p>
            </div>    
        </div>
    );
};

export default Footer;