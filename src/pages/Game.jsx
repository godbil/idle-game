import {React, useState, useEffect, useCallback}  from 'react';
import { Link } from "react-router-dom";
import goblin from '../assets/goblin2.png'
import mage from '../assets/attackmage1.png'
import fireMage from '../assets/attackmagefireball.png'
import electricMage from '../assets/attackmagelightningbolt.png'
import suppMage from '../assets/supportmage1.png'
import iceMage from '../assets/supportmagewizardeyes.png'
import waterMage from '../assets/supportmagequickerhands.png'

var gold = 0;
var stage = 1;
var enemyMaxHealth = 10;
var clickIncrement = 1;
var autoIncrement = 0;
var autoTime = 1000;
var clickUpgradePrice = 20;
var autoFighterUpgradePrice = 50;
var showButton = true;
var firstIdleBought = false;

function Game() { 
    
    const [enemyHealth, setHealth] = useState(enemyMaxHealth);
    const [killsNeeded, setKills] = useState(10);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

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

    const checkPrice = (price, func1 = () => {}, func2 = () => {}, buttonID = '') => {
        if (gold >= price) {
            gold -= price;
            func1();
            func2();
        }
        if (buttonID === 'autoFighter1') {
            showButton = false;
            firstIdleBought = true
        }
    };

    const startTimer = () => {
        setInterval(() => {
            setHealth(seconds => seconds - autoIncrement)
        }, autoTime)
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
                <div className='gold'>🪙 {gold} </div>
                <div className='damage'>
                    <div>{autoIncrement} DPS (idle) </div>
                    <div className='break'></div>
                    <div>{clickIncrement} Click Damage </div>
                </div>
                <div className='upgrades'>
                    <button className='clickUpgrade' onClick={() => {checkPrice(clickUpgradePrice, increaseClickIncrement); forceUpdate()}}> 
                        Upgrade Click Damage <br /> 🪙 {clickUpgradePrice} </button>
                    <img className='click' src={suppMage} alt="Support Mage" /> 
                    <div className='break'></div>
                    {showButton && <button className='autoFighter1' onClick={() => {checkPrice(autoFighterUpgradePrice, startTimer, increaseIdleIncrement, 'autoFighter1')}}> 
                        Buy Attack Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                    {!showButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                        Upgrade Attack Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                    <img className='auto1' src={mage} alt="Attack Mage" /> 
                    {firstIdleBought && <div className='autoUpgrades'>
                        <div className='break'></div>
                        {!showButton && <button className='autoFighter1' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}> 
                            Buy Ice Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        {showButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                            Upgrade Ice Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        <img className='auto4' src={iceMage} alt="Ice Mage" /> 
                        <div className='break'></div>
                        {!showButton && <button className='autoFighter1' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}> 
                            Buy Water Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        {showButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                            Upgrade Water Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        <img className='auto5' src={waterMage} alt="Water Mage" /> 
                        <div className='break'></div>
                        {!showButton && <button className='autoFighter1' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}> 
                            Buy Fire Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        {showButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                            Upgrade Fire Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        <img className='auto2' src={fireMage} alt="Fire Mage" /> 
                        <div className='break'></div>
                        {!showButton && <button className='autoFighter1' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}> 
                            Buy Electric Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        {showButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                            Upgrade Electric Mage <br /> 🪙 {autoFighterUpgradePrice} </button>}
                        <img className='auto3' src={electricMage} alt="Electric Mage" />
                    </div>}
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
