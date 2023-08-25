import React from 'react';
import { Link } from "react-router-dom";
import titleImage from '../assets/titleImage.png'


function Menu() {

    return (
        <div className='menu'>
            <div className='title'><img draggable="false" dragstart="false" src={titleImage} alt="Title" /></div>
            <div className='break'></div>
            <Link to="/idleGame">
                <button>Play</button>
            </Link>
        </div>
    );
}

export default Menu
