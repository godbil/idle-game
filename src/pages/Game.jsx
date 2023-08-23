import {React, useState, useEffect}  from 'react';
import { Link } from "react-router-dom";
import waterMage from '../assets/supportmagequickerhands.png'
import waterMage2 from '../assets/supportmageenhancedwatermagic.png'
import waterMage3 from '../assets/supportmagetidalwave.png'
import waterMage4 from '../assets/supportmagemasterofwater.png'
import fireMage from '../assets/attackmagefireball.png'
import fireMage2 from '../assets/attackmagefastfire.png'
import fireMage3 from '../assets/attackmagewalloffire.png'
import fireMage4 from '../assets/attackmagemasteroffire.png'
import iceMage from '../assets/supportmagewizardeyes.png'
import iceMage2 from '../assets/supportmageicebeam.png'
import iceMage3 from '../assets/supportmagedeepfreeze.png'
import iceMage4 from '../assets/supportmagemasterofice.png'
import electricMage from '../assets/attackmageenhancedeyesight.png'
import electricMage2 from '../assets/attackmagelightningbolt.png'
import electricMage3 from '../assets/attackmageduallightning.png'
import electricMage4 from '../assets/attackmagemasteroflightning.png'
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
import head from '../assets/head.png'
import headless from '../assets/headlessman.png'

const clickImg = [waterMage, waterMage2, waterMage3, waterMage4]
const damageImg = [fireMage, fireMage2, fireMage3, fireMage4]
const goldImg = [iceMage, iceMage2, iceMage3, iceMage4]
const speedImg = [electricMage, electricMage2, electricMage3, electricMage4]
const mobs = [slime, smallGoblin, goblin, skeleton, smallSkeleton, skeletonHead, mageSkeleton, sneakySkeleton, armouredSkeleton, thief, head]
const bossMobs = [ogre, dragon, headless]

function Game() { 
    
    const [gold, setGold] = useState(JSON.parse(localStorage.getItem("gold")) || 0);
    const [stage, setStage] = useState(JSON.parse(localStorage.getItem("stage")) || 1);
    const [enemyMaxHealth, setMaxHealth] = useState(JSON.parse(localStorage.getItem("maxHealth")) || 10);
    const [clickIncrement, setClickIncrement] = useState(JSON.parse(localStorage.getItem("clickIncrement")) || 1);
    const [autoIncrement, setAutoIncrement] = useState(JSON.parse(localStorage.getItem("autoIncrement")) || 0);
    const [autoInterval, setAutoInterval] = useState(JSON.parse(localStorage.getItem("autoInterval")) || 500);
    const [goldBoost, setGoldBoost] = useState(JSON.parse(localStorage.getItem("goldBoost")) || 0);
    const [waterMageUpgradePrice, setWaterMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("waterMagePrice")) || 5);
    const [fireMageUpgradePrice, setFireMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("fireMageUpgradePrice")) || 50);
    const [iceMageUpgradePrice, setIceMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("iceMageUpgradePrice")) || 250);
    const [electricMageUpgradePrice, setElectricMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("electricMagePrice")) || 1000);
    const [enemyHealth, setHealth] = useState(JSON.parse(localStorage.getItem("health")) || enemyMaxHealth);
    const [killsNeeded, setKills] = useState(JSON.parse(localStorage.getItem("kills")) || 10);
    const [fireMageButton, setFireMageButton] = useState(JSON.parse(localStorage.getItem("fireMageButton")) || true);
    const [iceMageButton, setIceMageButton] = useState(JSON.parse(localStorage.getItem("iceMageButton")) || true);
    const [electricMageButton, setElectricMageButton] = useState(JSON.parse(localStorage.getItem("electricMageButton")) || true);
    const [firstIdleBought, setFirstIdleBought] = useState(JSON.parse(localStorage.getItem("firstIdleBought")) || false);
    const [waterMageLevel, setWaterMageLevel] = useState(JSON.parse(localStorage.getItem("waterMageLevel")) || 1);
    const [fireMageLevel, setFireMageLevel] = useState(JSON.parse(localStorage.getItem("fireMageLevel")) || 1);
    const [iceMageLevel, setIceMageLevel] = useState(JSON.parse(localStorage.getItem("iceMageLevel")) || 1);
    const [electricMageLevel, setElectricMageLevel] = useState(JSON.parse(localStorage.getItem("electricMageLevel")) || 1);
    const [randomMob, setRandomMob] =  useState(JSON.parse(localStorage.getItem("randomMob")) || mobs[0]);

    useEffect(() => {
        window.localStorage.setItem('gold', JSON.stringify(gold))
        window.localStorage.setItem('stage', JSON.stringify(stage))
        window.localStorage.setItem('maxHealth', JSON.stringify(enemyMaxHealth))
        window.localStorage.setItem('clickIncrement', JSON.stringify(clickIncrement))
        window.localStorage.setItem('autoIncrement', JSON.stringify(autoIncrement))
        window.localStorage.setItem('autoInterval', JSON.stringify(autoInterval))
        window.localStorage.setItem('goldBoost', JSON.stringify(goldBoost))
        window.localStorage.setItem('waterMagePrice', JSON.stringify(waterMageUpgradePrice))
        window.localStorage.setItem('fireMagePrice', JSON.stringify(fireMageUpgradePrice))
        window.localStorage.setItem('iceMagePrice', JSON.stringify(iceMageUpgradePrice))
        window.localStorage.setItem('electricMagePrice', JSON.stringify(electricMageUpgradePrice))
        window.localStorage.setItem('health', JSON.stringify(enemyHealth))
        window.localStorage.setItem('kills', JSON.stringify(killsNeeded))
        window.localStorage.setItem('fireMageButton', JSON.stringify(fireMageButton))
        window.localStorage.setItem('iceMageButton', JSON.stringify(iceMageButton))
        window.localStorage.setItem('electricMageButton', JSON.stringify(electricMageButton))
        window.localStorage.setItem('firstIdleBought', JSON.stringify(firstIdleBought))
        window.localStorage.setItem('waterMageLevel', JSON.stringify(waterMageLevel))
        window.localStorage.setItem('fireMageLevel', JSON.stringify(fireMageLevel))
        window.localStorage.setItem('iceMageLevel', JSON.stringify(iceMageLevel))
        window.localStorage.setItem('electricMageLevel', JSON.stringify(electricMageLevel))
        window.localStorage.setItem('randomMob', JSON.stringify(randomMob))
    }, [fireMageButton, fireMageUpgradePrice, autoIncrement, autoInterval, clickIncrement, iceMageUpgradePrice, electricMageButton, electricMageUpgradePrice, enemyHealth, enemyMaxHealth, 
        firstIdleBought, gold, killsNeeded, stage, iceMageButton, waterMageUpgradePrice, randomMob, goldBoost, iceMageLevel, waterMageLevel, fireMageLevel, electricMageLevel]);

    useEffect(() => {
        const checkStates = setInterval(() => {
            if (enemyHealth <= 0) {
                setRandomMob(mobs[Math.floor(Math.random() * 11)]);
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
                setRandomMob(bossMobs[Math.floor(Math.random() * 3)]);
                setMaxHealth(stage * 120);
                setKills(1);
            }
            else {
                setMaxHealth(stage * 10);
                setKills(10);
            }
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage]);

    useEffect(() => {
        setHealth(enemyMaxHealth);
    }, [enemyMaxHealth]);


    useEffect(() => {
        const startIdle = setInterval(() => {
            if (firstIdleBought) {
                setHealth(enemyHealth => enemyHealth - autoIncrement)
            }
        }, autoInterval)

        return () => clearInterval(startIdle)
    });

    const dropGold = () => {
        setGold(gold => gold + (Math.round(enemyMaxHealth / 10)) + goldBoost)
    }
        
    const onClick = () => {
        setHealth(enemyHealth - clickIncrement)
    };

    const checkPrice = (price, increment, interval, goldAddition, setUpgradePrice, buttonSwitchFunc = () => {},  levelFunc = () => {}, buttonID = '') => {
        if (gold >= price) {
            if (buttonID === 'clickUpgrade') {
                setClickIncrement(clickIncrement => clickIncrement + increment);
                setWaterMageUpgradePrice(Math.round(price * 1.22));
            }
            else {
                setFirstIdleBought(true);
                buttonSwitchFunc(false); 
                setUpgradePrice(Math.round(price * 1.22));
                setAutoIncrement(autoIncrement => autoIncrement + increment);
                setAutoInterval(autoInterval => autoInterval - interval);
                setGoldBoost(goldBoost => goldBoost + goldAddition)
            }
            setGold(gold => gold - price);
            levelFunc(level => level + 1)
        }
    };

    return (
        <div className='game'>
            <div className='ui'>
                <div className='gold'>🪙 {gold} </div>
                <div className='damage'>
                    <div>{autoIncrement / autoInterval * 1000} DPS (idle) </div>
                    <div className='break'></div>
                    <div>{clickIncrement} Click Damage </div>
                </div>
                <div className='upgrades'>
                    <button className='clickUpgrade' onClick={() => {checkPrice(waterMageUpgradePrice, 1, 0, 0, undefined, undefined, setWaterMageLevel, 'clickUpgrade')}}> 
                        Click Damage <br /> 🪙 {waterMageUpgradePrice} </button>
                    <div className='upgDesc'>Water Mage <br /> Level {waterMageLevel}</div>
                    <img className='click' src={clickImg[Math.floor(waterMageLevel / 5)]} alt="Water Mage" /> 
                    <div className='break'></div>
                    {fireMageButton && <button className='autoFighter1' onClick={() => 
                        {checkPrice(fireMageUpgradePrice, 1, 0, 0, setFireMageUpgradePrice, setFireMageButton, setFireMageLevel, 'autoFighter1')}}>
                         Idle Damage <br /> 🪙 {fireMageUpgradePrice} </button>}
                    {!fireMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(fireMageUpgradePrice, 1, 0, 0, setFireMageUpgradePrice, undefined, setFireMageLevel)}}>
                        Idle Damage <br /> 🪙 {fireMageUpgradePrice} </button>}
                    <div className='upgDesc'>Fire Mage <br /> Level {fireMageLevel}</div>
                    <img className='auto1' src={damageImg[Math.floor(fireMageLevel / 5)]} alt="Fire Mage" /> 
                    {firstIdleBought && <div className='autoUpgrades'>
                        <div className='break'></div>
                        {iceMageButton && <button className='autoFighter1' onClick={() => 
                            {checkPrice(iceMageUpgradePrice, 0, 0, 1, setWaterMageUpgradePrice, setIceMageButton, setIceMageLevel)}}> 
                            More Gold <br /> 🪙 {iceMageUpgradePrice} </button>}
                        {!iceMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(iceMageUpgradePrice, 0, 0, 1, setIceMageUpgradePrice, undefined, setIceMageLevel)}}>
                            More Gold <br /> 🪙 {iceMageUpgradePrice} </button>}
                        <div className='upgDesc'>Ice Mage <br /> Level {iceMageLevel}</div>
                        <img className='auto2' src={goldImg[Math.floor(iceMageLevel / 5)]} alt="Ice Mage" /> 
                        <div className='break'></div>
                        {electricMageButton && <button className='autoFighter1' onClick={() => 
                            {checkPrice(electricMageUpgradePrice, 0, 50, 0, setElectricMageUpgradePrice, setElectricMageButton, setElectricMageLevel)}}> 
                            Idle Speed <br /> 🪙 {electricMageUpgradePrice} </button>}
                        {!electricMageButton && <button className='autoFighterUpgrade' onClick={() => {checkPrice(electricMageUpgradePrice, 0, 50, 0, setElectricMageUpgradePrice, undefined, setElectricMageLevel)}}>
                            Idle Speed  <br /> 🪙 {electricMageUpgradePrice} </button>}
                        <div className='upgDesc'>Electric Mage <br /> Level {electricMageLevel}</div>
                        <img className='auto3' src={speedImg[Math.floor(electricMageLevel / 5)]} alt="Electric Mage" />
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
