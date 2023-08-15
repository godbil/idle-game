import {React, useState}  from 'react';
import { Link } from "react-router-dom";
import gman from '../assets/gman.png'

var clickIncrement = 1
var idleIncrement = 1;

function Game() { 
    
    var [clicks, setCounter] = useState(0);
        
    const onClick = () => {
        setCounter(clicks + clickIncrement)
    };

    const checkPrice = (price, func) => {
        if (clicks >= price) {
            setCounter(clicks -= price)
            func()
        }
    };

    const startTimer = () => {
        setInterval(() => {
            setCounter(seconds => seconds + idleIncrement)
        }, 1000)
    };

    const increaseClickIncrement = () => {
        clickIncrement *= 2;
    };

    return (
        <div className="clicker">
            <button className='gmanButton' onClick={onClick}> <img draggable="false" dragstart="false" className='gman' src={gman} alt="GMAN"/> </button>
            <div>GMANs: {clicks}</div>
            <button className='upgrade1' onClick={ () => checkPrice(10, startTimer)}> Auto Fighter - 1 Damage (Costs 10 GMANs) </button>
            <button className='upgrade1' onClick={() => checkPrice(20, increaseClickIncrement)}> Increase Click Damage - x2 Damage (Costs 20 GMANs) </button>
            <Link to="/menu">
                <button>Main Menu</button>
            </Link>
        </div>
    );
}

export default Game;
