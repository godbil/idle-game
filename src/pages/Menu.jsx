import React from 'react';
import { Link } from "react-router-dom";


function Menu() {
    return (
        <div className='menu'>
            <div className='title'>Idle Game</div>
            <div className='break'></div>
            <Link to="/idleGame">
                <button>Play</button>
            </Link>
        </div>
    );
}

export default Menu
