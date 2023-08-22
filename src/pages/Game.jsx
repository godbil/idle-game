import {React, useState, useEffect}  from 'react';
import { Link } from "react-router-dom";
import mage from '../assets/attackmage1.png'
import fireMage from '../assets/attackmagefireball.png'
import electricMage from '../assets/attackmagelightningbolt.png'
import suppMage from '../assets/supportmage1.png'
import iceMage from '../assets/supportmagewizardeyes.png'
import waterMage from '../assets/supportmagequickerhands.png'
import slime from '../assets/slime.png'
import smallGoblin from '../assets/goblin1.png'
import goblin from '../assets/goblin2.png'
import skeleton from '../assets/skeleton.png'
import smallSkeleton from '../assets/smallskeleton.png'
import skeletonHead from '../assets/skeletonhead.png'
import mageSkeleton from '../assets/mageskeleton.png'
import sneakySkeleton from '../assets/sneakyskeleton.png'
import armouredSkeleton from '../assets/armouredskeleton.png'
import thief from '../assets/thief.png'
import ogre from '../assets/shrek.png'
import dragon from '../assets/dragon.png'

const mobs = [slime, smallGoblin, goblin, skeleton, smallSkeleton, skeletonHead, mageSkeleton, sneakySkeleton, armouredSkeleton, thief]
const bossMobs = [ogre, dragon]

function Game() { 
    
    const [gold, setGold] = useState(JSON.parse(localStorage.getItem("gold")) || 100000);
    const [stage, setStage] = useState(JSON.parse(localStorage.getItem("stage")) || 1);
    const [enemyMaxHealth, setMaxHealth] = useState(JSON.parse(localStorage.getItem("maxHealth")) || 10);
    const [clickIncrement, setClickIncrement] = useState(JSON.parse(localStorage.getItem("clickIncrement")) || 1);
    const [autoIncrement, setAutoIncrement] = useState(JSON.parse(localStorage.getItem("autoIncrement")) || 0);
    const [autoInterval, setAutoInterval] = useState(JSON.parse(localStorage.getItem("autoInterval")) || 1000);
    const [clickUpgradePrice, setClickUpgradePrice] = useState(JSON.parse(localStorage.getItem("clickUpgradePrice")) || 20);
    const [attackMageUpgradePrice, setAttackMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("attackMagePrice")) || 50);
    const [iceMageUpgradePrice, setIceMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("iceMagePrice")) || 250);
    const [waterMageUpgradePrice, setWaterMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("waterMagePrice")) || 1000);
    const [fireMageUpgradePrice, setFireMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("fireMagePrice")) || 5000);
    const [electricMageUpgradePrice, setElectricMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("electricMagePrice")) || 25000);
    const [enemyHealth, setHealth] = useState(JSON.parse(localStorage.getItem("health")) || enemyMaxHealth);
    const [killsNeeded, setKills] = useState(JSON.parse(localStorage.getItem("kills")) || 10);
    const [attackMageButton, setAttackMageButton] = useState(JSON.parse(localStorage.getItem("attackMageButton")) || true);
    const [iceMageButton, setIceMageButton] = useState(JSON.parse(localStorage.getItem("iceMageButton")) || true);
    const [waterMageButton, setWaterMageButton] = useState(JSON.parse(localStorage.getItem("waterMageButton")) || true);
    const [fireMageButton, setFireMageButton] = useState(JSON.parse(localStorage.getItem("fireMageButton")) || true);
    const [electricMageButton, setElectricMageButton] = useState(JSON.parse(localStorage.getItem("electricMageButton")) || true);
    const [firstIdleBought, setFirstIdleBought] = useState(JSON.parse(localStorage.getItem("firstIdleBought")) || false);
    const [randomMob, setRandomMob] =  useState(JSON.parse(localStorage.getItem("randomMob")) || mobs[0]);

    useEffect(() => {
        window.localStorage.setItem('gold', JSON.stringify(gold))
        window.localStorage.setItem('stage', JSON.stringify(stage))
        window.localStorage.setItem('maxHealth', JSON.stringify(enemyMaxHealth))
        window.localStorage.setItem('clickIncrement', JSON.stringify(clickIncrement))
        window.localStorage.setItem('autoIncrement', JSON.stringify(autoIncrement))
        window.localStorage.setItem('autoInterval', JSON.stringify(autoInterval))
        window.localStorage.setItem('clickUpgradePrice', JSON.stringify(clickUpgradePrice))
        window.localStorage.setItem('attackMagePrice', JSON.stringify(attackMageUpgradePrice))
        window.localStorage.setItem('iceMagePrice', JSON.stringify(iceMageUpgradePrice))
        window.localStorage.setItem('waterMagePrice', JSON.stringify(waterMageUpgradePrice))
        window.localStorage.setItem('fireMagePrice', JSON.stringify(fireMageUpgradePrice))
        window.localStorage.setItem('electricMagePrice', JSON.stringify(electricMageUpgradePrice))
        window.localStorage.setItem('health', JSON.stringify(enemyHealth))
        window.localStorage.setItem('kills', JSON.stringify(killsNeeded))
        window.localStorage.setItem('attackMageButton', JSON.stringify(attackMageButton))
        window.localStorage.setItem('iceMageButton', JSON.stringify(iceMageButton))
        window.localStorage.setItem('waterMageButton', JSON.stringify(waterMageButton))
        window.localStorage.setItem('fireMageButton', JSON.stringify(fireMageButton))
        window.localStorage.setItem('electricMageButton', JSON.stringify(electricMageButton))
        window.localStorage.setItem('firstIdleBought', JSON.stringify(firstIdleBought))
        window.localStorage.setItem('randomMob', JSON.stringify(randomMob))
    }, [attackMageButton, attackMageUpgradePrice, autoIncrement, autoInterval, clickIncrement, clickUpgradePrice, electricMageButton, 
        electricMageUpgradePrice, enemyHealth, enemyMaxHealth, fireMageButton, fireMageUpgradePrice, firstIdleBought, gold, iceMageButton, 
        iceMageUpgradePrice, killsNeeded, stage, waterMageButton, waterMageUpgradePrice, randomMob]);

    useEffect(() => {
        const checkStates = setInterval(() => {
            if (enemyHealth <= 0) {
                setRandomMob(mobs[Math.floor(Math.random() * 10)]);
                setHealth(enemyMaxHealth);
                setKills(killsNeeded => killsNeeded - 1)
                dropGold();
            }
            if (killsNeeded <= 0) {
                setStage(stage => stage + 1);
            }
        }, 10)
        
        return () => clearInterval(checkStates);
    });

    useEffect(() => {
        if (killsNeeded <= 0) {
            if (stage % 5 === 0) {
                setRandomMob(bossMobs[Math.floor(Math.random() * 2)]);
                setMaxHealth(stage * 20);
                setKills(1);
            }
            else {
                setMaxHealth(stage * 10);
                setKills(10);
            }
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enemyMaxHealth, stage]);


    useEffect(() => {
        const startIdle = setInterval(() => {
            if (firstIdleBought) {
                setHealth(enemyHealth => enemyHealth - autoIncrement)
            }
        }, autoInterval)

        return () => clearInterval(startIdle)
    });

    const dropGold = () => {
        setGold(gold => gold += (Math.floor(enemyMaxHealth / 2)))
    }
        
    const onClick = () => {
        setHealth(enemyHealth - clickIncrement)
    };

    const checkPrice = (price, increment, interval, setUpgradePrice, buttonSwitchFunc = () => {}, buttonID = '') => {
        if (gold >= price) {
            if (buttonID === 'clickUpgrade') {
                setClickIncrement(clickIncrement => clickIncrement + increment);
                setClickUpgradePrice(price * 2);
            }
            else {
                setFirstIdleBought(true);
                buttonSwitchFunc(false); 
                setUpgradePrice(price * 2);
                setAutoIncrement(autoIncrement => autoIncrement + increment);
                setAutoInterval(autoInterval => autoInterval - interval);
            }
            setGold(gold => gold - price);
        }
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
                    <button className='clickUpgrade' onClick={() => {checkPrice(clickUpgradePrice, 1, undefined, undefined, undefined, 'clickUpgrade')}}> 
                        Upgrade Click Damage <br /> 🪙 {clickUpgradePrice} </button>
                    <img className='click' src={suppMage} alt="Support Mage" /> 
                    <div className='break'></div>
                    {attackMageButton && <button className='autoFighter1' onClick={() => {checkPrice(attackMageUpgradePrice, 1, 0, setAttackMageUpgradePrice, setAttackMageButton, 'autoFighter1')}}>
                         Buy Attack Mage <br /> 🪙 {attackMageUpgradePrice} </button>}
                    {!attackMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(attackMageUpgradePrice, 1, 0, setAttackMageUpgradePrice)}}>
                        Upgrade Attack Mage <br /> 🪙 {attackMageUpgradePrice} </button>}
                    <img className='auto1' src={mage} alt="Attack Mage" /> 
                    {firstIdleBought && <div className='autoUpgrades'>
                        <div className='break'></div>
                        {iceMageButton && <button className='autoFighter1' onClick={() => {checkPrice(iceMageUpgradePrice, 2, 0, setIceMageUpgradePrice, setIceMageButton)}}> 
                            Buy Ice Mage <br /> 🪙 {iceMageUpgradePrice} </button>}
                        {!iceMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(iceMageUpgradePrice, 2, 0, setIceMageUpgradePrice)}}>
                            Upgrade Ice Mage <br /> 🪙 {iceMageUpgradePrice} </button>}
                        <img className='auto4' src={iceMage} alt="Ice Mage" /> 
                        <div className='break'></div>
                        {waterMageButton && <button className='autoFighter1' onClick={() => {checkPrice(waterMageUpgradePrice, 4, 0, setWaterMageUpgradePrice, setWaterMageButton)}}> 
                            Buy Water Mage <br /> 🪙 {waterMageUpgradePrice} </button>}
                        {!waterMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(waterMageUpgradePrice, 4, 0, setWaterMageUpgradePrice)}}>
                            Upgrade Water Mage <br /> 🪙 {waterMageUpgradePrice} </button>}
                        <img className='auto5' src={waterMage} alt="Water Mage" /> 
                        <div className='break'></div>
                        {fireMageButton && <button className='autoFighter1' onClick={() => {checkPrice(fireMageUpgradePrice, 8, 0, setFireMageUpgradePrice, setFireMageButton)}}> 
                            Buy Fire Mage <br /> 🪙 {fireMageUpgradePrice} </button>}
                        {!fireMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(fireMageUpgradePrice, 8, 0, setFireMageUpgradePrice)}}>
                            Upgrade Fire Mage <br /> 🪙 {fireMageUpgradePrice} </button>}
                        <img className='auto2' src={fireMage} alt="Fire Mage" /> 
                        <div className='break'></div>
                        {electricMageButton && <button className='autoFighter1' onClick={() => {checkPrice(electricMageUpgradePrice, 16, 0, setElectricMageUpgradePrice, setElectricMageButton)}}> 
                            Buy Electric Mage <br /> 🪙 {electricMageUpgradePrice} </button>}
                        {!electricMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(electricMageUpgradePrice, 16, 0, setElectricMageUpgradePrice)}}>
                            Upgrade Electric Mage <br /> 🪙 {electricMageUpgradePrice} </button>}
                        <img className='auto3' src={electricMage} alt="Electric Mage" />
                    </div>}
                </div>
            </div>
            <div className='clickArea'>
                <div>Level {stage} </div>
                <div className='break'></div>
                <div>💀 {killsNeeded} </div>
                <div className='break'></div>
                <button className='gmanButton' onClick={onClick}> <img draggable="false" dragstart="false" className='clickerButton' src={randomMob} alt="Clicker Button"/> </button>
                <div className='break'></div>
                <div>{enemyHealth} / {enemyMaxHealth} HP</div>
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
