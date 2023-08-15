import React from 'react';
import { Link } from "react-router-dom";


function Menu() {
    return (
        <div className='menu'>
            <Link to="/idleGame">
                <button>Play</button>
            </Link>
        </div>
    );
}

export default Menu
