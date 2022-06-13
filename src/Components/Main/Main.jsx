import React from 'react';
import './main.css'
import logo1 from '../../logo/0.jpg'
const Main = () => {
    return (
        <div>
            <div className='Main_bloc'>
            <img src={logo1} alt="" />
            </div>
            <div className='Main_bottom_bloc'>
            <button className='button_class'>Увеличить</button>
            <button className='button_class1'>Уменьшить</button>
            <button className='button_class2'>Сбросить</button>
            </div>
        </div>
    );
};

export default Main;