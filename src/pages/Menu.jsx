import React from 'react';
import { Link } from "react-router-dom";


function Menu() {

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 1);
    }

    return (
        <div className='menu'>
            <div className='title'>Idle Game</div>
            <div className='break'></div>
            <Link to="/idleGame">
                <button onClick={refreshPage}>Play</button>
            </Link>
        </div>
    );
}

export default Menu
