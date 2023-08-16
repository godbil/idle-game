import {React, useState, useEffect}  from 'react';
import { Link } from "react-router-dom";
import gman from '../assets/gman.png'
import click from '../assets/gman_happy.png'
import auto1 from '../assets/gman_fedora.png'

var gold = 0;
var stage = 0;
var enemyMaxHealth = 10;
var clickIncrement = 1;
var autoIncrement = 1;
var clickUpgradePrice = 20;
var autoFighterUpgradePrice = 50;

function Game() { 
    
    const [enemyHealth, setHealth] = useState(0);
    const [showButton, setShowButton] = useState(true);
    const [killsNeeded, setKills] = useState(0);


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
                enemyMaxHealth = stage * 10;
                setHealth(enemyMaxHealth);

                if (stage % 5 === 0) {
                    setKills(1);
                }
                else {
                    setKills(10);
                }
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

    const checkPrice = (price, func) => {
        if (gold >= price) {
            gold -= price;
            func();
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
        <div className="clicker">
            <button className='gmanButton' onClick={onClick}> <img draggable="false" dragstart="false" className='gman' src={gman} alt="GMAN"/> </button>
            <div>Stage: {stage} </div>
            <div>Kills needed for next stage: {killsNeeded} </div>
            <div>Health: {enemyHealth} </div>
            <div>Gold: {gold} </div>
            <button className='clickUpgrade' onClick={() => checkPrice(clickUpgradePrice, increaseClickIncrement)}> 
                Increase Click Damage - {clickIncrement} Damage (Costs {clickUpgradePrice} gold) <img className='click' src={click} alt="click" /> </button>
            {showButton && <button className='autoFighter1' onClick={ () => {toggleButton(); checkPrice(autoFighterUpgradePrice, startTimer)}}> 
                Auto Fighter - {autoIncrement} Damage (Costs {autoFighterUpgradePrice} gold) <img className='auto1' src={auto1} alt="auto1" /> </button>}
            {!showButton && <button className='autoFighterUpgrade' onClick={ () => {checkPrice(autoFighterUpgradePrice, increaseIdleIncrement)}}>
                 Upgrade Auto Fighter - {autoIncrement} Damage (Costs {autoFighterUpgradePrice} gold) <img className='auto1' src={auto1} alt="auto1" /> </button>}
            <Link to="/">
                <button>Main Menu</button>
            </Link>
        </div>
    );
}

export default Game;
