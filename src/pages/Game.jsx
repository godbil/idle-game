import {React, useState, useEffect, useCallback}  from 'react';
import { Link } from "react-router-dom";
import goblin from '../assets/goblin2.png'
import mage from '../assets/attackmage1.png'
import fireMage from '../assets/attackmagefireball.png'

var gold = -5;
var stage = 0;
var enemyMaxHealth = 10;
var clickIncrement = 1;
var autoIncrement = 0;
var clickUpgradePrice = 20;
var autoFighterUpgradePrice = 50;

function Game() { 
    
    const [enemyHealth, setHealth] = useState(0);
    const [showButton, setShowButton] = useState(true);
    const [killsNeeded, setKills] = useState(0);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);


    const toggleButton = () => {
        setShowButton(!showButton);
    };

    useEffect(() => {
        const checkHealth = setInterval(() => {
            if (enemyHealth <= 0) {
                setHealth(enemyMaxHealth);
                setKills(killsNeeded - 1)
                dropGold();
            }
        }, 10)
        
        return () => clearInterval(checkHealth);
    });

    useEffect(() => {
        const checkKills = setInterval(() => {
            if (killsNeeded <= 0) {
                stage += 1;

                if (stage % 5 === 0) {
                    enemyMaxHealth = stage * 20;
                    setKills(1);
                }
                else {
                    enemyMaxHealth = stage * 10;
                    setKills(10);
                }

                setHealth(enemyMaxHealth);
            }
        }, 10)
        
        return () => clearInterval(checkKills);
    });


    const dropGold = () => {
        gold += (Math.floor(enemyMaxHealth / 2))
    }
        
    const onClick = () => {
        setHealth(enemyHealth - clickIncrement)
    };

    const checkPrice = (price, func1 = () => {}, func2 = () => {}) => {
        if (gold >= price) {
            gold -= price;
            func1();
            func2();
        }
        else {
            setShowButton(showButton);
        }
    };

    const startTimer = () => {
        setInterval(() => {
            setHealth(seconds => seconds - autoIncrement)
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
        <div className='game'>
            <div className='ui'>
                <div>🪙 {gold} </div>
                <div className='break'></div>
                <div className='damage'>
                    <div>{autoIncrement} DPS (idle) </div>
                    <div>{clickIncrement} Click Damage </div>
                </div>
                <div className='upgrades'>
                    <button className='clickUpgrade' onClick={() => {checkPrice(clickUpgradePrice, increaseClickIncrement); forceUpdate()}}> 
                        Upgrade Click Damage <br /> 🪙 {clickUpgradePrice} </button>
                    <img className='click' src={mage} alt="Mage" /> 
                    <div className='break'></div>
                    {showButton && <button className='autoFighter1' onClick={() => {toggleButton(); checkPrice(autoFighterUpgradePrice, startTimer, increaseIdleIncrement)}}> 
                        Buy Auto Fighter <br /> 🪙 {autoFighterUpgradePrice} </button>}
                    {!showButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                        Upgrade Auto Fighter <br /> 🪙 {autoFighterUpgradePrice} </button>}
                    <img className='auto1' src={fireMage} alt="Fire Mage" /> 
                </div>
            </div>
            <div className='clickArea'>
                <div>Level {stage} </div>
                <div className='break'></div>
                <div>💀 {killsNeeded} </div>
                <div className='break'></div>
                <button className='gmanButton' onClick={onClick}> <img draggable="false" dragstart="false" className='goblin' src={goblin} alt="Goblin"/> </button>
                <div className='break'></div>
                <div>{enemyHealth} HP</div>
            </div>
            <div className='menuButton'>
                <Link to="/">
                        <button>Main Menu</button>
                </Link>
            </div>
        </div>
    );
}

export default Game;
