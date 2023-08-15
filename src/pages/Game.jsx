import {React, useState}  from 'react';
import { Link } from "react-router-dom";
import gman from '../assets/gman.png'

var clickIncrement = 1;
var autoIncrement = 1;
var clickUpgradePrice = 20;
var autoFighterUpgradePrice = 50;

function Game() { 
    
    var [clicks, setCounter] = useState(0);
    const [showButton, setShowButton] = useState(true);

    const toggleButton = () => {
        setShowButton(!showButton);
    };
        
    const onClick = () => {
        setCounter(clicks + clickIncrement)
    };

    const checkPrice = (price, func) => {
        if (clicks >= price) {
            setCounter(clicks -= price)
            func()
        }
        else {
            setShowButton(showButton);
        }
    };

    const startTimer = () => {
        setInterval(() => {
            setCounter(seconds => seconds + autoIncrement)
        }, 1000)
    };

    const increaseClickIncrement = () => {
        clickIncrement += 1;
        clickUpgradePrice *= 2;
    };

    const increaseIdleIncrement = () => {
        autoIncrement += 1;
        autoFighterUpgradePrice *= 2;
    };

    return (
        <div className="clicker">
            <button className='gmanButton' onClick={onClick}> <img draggable="false" dragstart="false" className='gman' src={gman} alt="GMAN"/> </button>
            <div>GMANs: {clicks}</div>
            <button className='clickUpgrade' onClick={() => checkPrice(clickUpgradePrice, increaseClickIncrement)}> Increase Click Damage - {clickIncrement} Damage (Costs {clickUpgradePrice} GMANs) </button>
            {showButton && <button className='autoFighter1' onClick={ () => {toggleButton(); checkPrice(autoFighterUpgradePrice, startTimer)}}> 
                Auto Fighter - {autoIncrement} Damage (Costs {autoFighterUpgradePrice} GMANs) </button>}
            {!showButton && <button className='autoFighterUpgrade' onClick={ () => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                 Upgrade Auto Fighter - {autoIncrement} Damage (Costs {autoFighterUpgradePrice} GMANs) </button>}
            <Link to="/">
                <button>Main Menu</button>
            </Link>
        </div>
    );
}

export default Game;
