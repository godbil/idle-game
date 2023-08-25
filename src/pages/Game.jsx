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
import farm from '../assets/farmcarrotmarketplace.png'
import farm2 from '../assets/farmcarrotoverflow.png'
import farm3 from '../assets/farmcarrotresearchcenter.png'
import farm4 from '../assets/farmcarrotcentral.png'
import warrior from '../assets/warrior1.png'
import warrior2 from '../assets/warriorevenfasterslashing.png'
import warrior3 from '../assets/warriorcircleslash.png'
import warrior4 from '../assets/warriorbladelord.png'
import ballista from '../assets/ballistapowerfularrows.png'
import ballista2 from '../assets/ballistafasterfiring.png'
import ballista3 from '../assets/ballistalasercannon.png'
import ballista4 from '../assets/ballistarayofdoom.png'
import mortar from '../assets/mortar1.png'
import mortar2 from '../assets/mortarstrongerbombs.png'
import mortar3 from '../assets/mortarthebigone.png'
import mortar4 from '../assets/mortarthebiggestone.png'
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
const rebirthDamageImg = [warrior, warrior2, warrior3, warrior4]
const rebirthGoldImg = [farm, farm2, farm3, farm4]
const rebirthKills = [ballista, ballista2, ballista3, ballista4]
const rebirthStage = [mortar, mortar2, mortar3, mortar4]
const mobs = [slime, smallGoblin, goblin, skeleton, smallSkeleton, skeletonHead, mageSkeleton, sneakySkeleton, armouredSkeleton, thief, head]
const bossMobs = [ogre, dragon, headless]

function Game() { 
    
    const [gold, setGold] = useState(JSON.parse(localStorage.getItem("gold")) || 0);
    const [souls, setSouls] = useState(JSON.parse(localStorage.getItem("souls")) || 0);
    const [stage, setStage] = useState(JSON.parse(localStorage.getItem("stage")) || 1);
    const [stageBoost, setStageBoost] = useState(JSON.parse(localStorage.getItem("stageBoost")) || 0);
    const [enemyMaxHealth, setMaxHealth] = useState(JSON.parse(localStorage.getItem("maxHealth")) || 10);
    const [clickIncrement, setClickIncrement] = useState(JSON.parse(localStorage.getItem("clickIncrement")) || 1);
    const [autoIncrement, setAutoIncrement] = useState(JSON.parse(localStorage.getItem("autoIncrement")) || 0);
    const [autoInterval, setAutoInterval] = useState(JSON.parse(localStorage.getItem("autoInterval")) || 1000);
    const [goldBoost, setGoldBoost] = useState(JSON.parse(localStorage.getItem("goldBoost")) || 0);
    const [rebirthIncrement, setRebirthIncrement] = useState(JSON.parse(localStorage.getItem("rebirthIncrement")) || 0);
    const [rebirthGoldBoost, setRebirthGoldBoost] = useState(JSON.parse(localStorage.getItem("rebirthGoldBoost")) || 0);
    const [waterMageUpgradePrice, setWaterMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("waterMagePrice")) || 5);
    const [fireMageUpgradePrice, setFireMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("fireMageUpgradePrice")) || 50);
    const [iceMageUpgradePrice, setIceMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("iceMageUpgradePrice")) || 250);
    const [electricMageUpgradePrice, setElectricMageUpgradePrice] = useState(JSON.parse(localStorage.getItem("electricMagePrice")) || 1000);
    const [warriorUpgradePrice, setWarriorUpgradePrice] = useState(JSON.parse(localStorage.getItem("warriorUpgradePrice")) || 5);
    const [farmUpgradePrice, setFarmUpgradePrice] = useState(JSON.parse(localStorage.getItem("farmUpgradePrice")) || 5);
    const [ballistaUpgradePrice, setBallistaUpgradePrice] = useState(JSON.parse(localStorage.getItem("ballistaUpgradePrice")) || 20);
    const [mortarUpgradePrice, setMortarUpgradePrice] = useState(JSON.parse(localStorage.getItem("mortarUpgradePrice")) || 100);
    const [enemyHealth, setHealth] = useState(JSON.parse(localStorage.getItem("health")) || enemyMaxHealth);
    const [killsNeeded, setKills] = useState(JSON.parse(localStorage.getItem("kills")) || 10);
    const [killsBoost, setKillsBoost] = useState(JSON.parse(localStorage.getItem("killsBoost")) || 0);
    const [firstIdleBought, setFirstIdleBought] = useState(JSON.parse(localStorage.getItem("firstIdleBought")) || false);
    const [firstRebirth, setFirstRebirth] = useState(JSON.parse(localStorage.getItem("firstRebirth")) || false);
    const [waterMageLevel, setWaterMageLevel] = useState(JSON.parse(localStorage.getItem("waterMageLevel")) || 1);
    const [fireMageLevel, setFireMageLevel] = useState(JSON.parse(localStorage.getItem("fireMageLevel")) || 1);
    const [iceMageLevel, setIceMageLevel] = useState(JSON.parse(localStorage.getItem("iceMageLevel")) || 1);
    const [electricMageLevel, setElectricMageLevel] = useState(JSON.parse(localStorage.getItem("electricMageLevel")) || 1);
    const [warriorLevel, setWarriorLevel] = useState(JSON.parse(localStorage.getItem("warriorLevel")) || 1);
    const [farmLevel, setFarmLevel] = useState(JSON.parse(localStorage.getItem("farmLevel")) || 1);
    const [ballistaLevel, setBallistaLevel] = useState(JSON.parse(localStorage.getItem("ballistaLevel")) || 1);
    const [mortarLevel, setMortarLevel] = useState(JSON.parse(localStorage.getItem("mortarLevel")) || 1);
    const [randomMob, setRandomMob] =  useState(JSON.parse(localStorage.getItem("randomMob")) || mobs[0]);
    const [electricMageMax, setElectricMageMax] = useState(JSON.parse(localStorage.getItem("electricMageMax")) || false);
    const [ballistaMax, setBallistaMax] = useState(JSON.parse(localStorage.getItem("ballistaMax")) || false);

    useEffect(() => {
        window.localStorage.setItem('gold', JSON.stringify(gold))
        window.localStorage.setItem('souls', JSON.stringify(souls))
        window.localStorage.setItem('stage', JSON.stringify(stage))
        window.localStorage.setItem('stageBoost', JSON.stringify(stageBoost))
        window.localStorage.setItem('maxHealth', JSON.stringify(enemyMaxHealth))
        window.localStorage.setItem('clickIncrement', JSON.stringify(clickIncrement))
        window.localStorage.setItem('autoIncrement', JSON.stringify(autoIncrement))
        window.localStorage.setItem('autoInterval', JSON.stringify(autoInterval))
        window.localStorage.setItem('goldBoost', JSON.stringify(goldBoost))
        window.localStorage.setItem('rebirthIncrement', JSON.stringify(rebirthIncrement))
        window.localStorage.setItem('rebirthGoldBoost', JSON.stringify(rebirthGoldBoost))
        window.localStorage.setItem('waterMagePrice', JSON.stringify(waterMageUpgradePrice))
        window.localStorage.setItem('fireMagePrice', JSON.stringify(fireMageUpgradePrice))
        window.localStorage.setItem('iceMagePrice', JSON.stringify(iceMageUpgradePrice))
        window.localStorage.setItem('electricMagePrice', JSON.stringify(electricMageUpgradePrice))
        window.localStorage.setItem('warriorUpgradePrice', JSON.stringify(warriorUpgradePrice))
        window.localStorage.setItem('farmUpgradePrice', JSON.stringify(farmUpgradePrice))
        window.localStorage.setItem('ballistaUpgradePrice', JSON.stringify(ballistaUpgradePrice))
        window.localStorage.setItem('mortarUpgradePrice', JSON.stringify(mortarUpgradePrice))
        window.localStorage.setItem('health', JSON.stringify(enemyHealth))
        window.localStorage.setItem('kills', JSON.stringify(killsNeeded))
        window.localStorage.setItem('killsBoost', JSON.stringify(killsBoost))
        window.localStorage.setItem('firstIdleBought', JSON.stringify(firstIdleBought))
        window.localStorage.setItem('firstRebirth', JSON.stringify(firstRebirth))
        window.localStorage.setItem('waterMageLevel', JSON.stringify(waterMageLevel))
        window.localStorage.setItem('fireMageLevel', JSON.stringify(fireMageLevel))
        window.localStorage.setItem('iceMageLevel', JSON.stringify(iceMageLevel))
        window.localStorage.setItem('electricMageLevel', JSON.stringify(electricMageLevel))
        window.localStorage.setItem('warriorLevel', JSON.stringify(warriorLevel))
        window.localStorage.setItem('farmLevel', JSON.stringify(farmLevel))
        window.localStorage.setItem('ballistaLevel', JSON.stringify(ballistaLevel))
        window.localStorage.setItem('mortarLevel', JSON.stringify(mortarLevel))
        window.localStorage.setItem('randomMob', JSON.stringify(randomMob))
        window.localStorage.setItem('electricMageMax', JSON.stringify(electricMageMax))
        window.localStorage.setItem('ballistaMax', JSON.stringify(ballistaMax))
    }, [fireMageUpgradePrice, autoIncrement, autoInterval, clickIncrement, iceMageUpgradePrice, electricMageUpgradePrice, enemyHealth, enemyMaxHealth, souls, firstRebirth, firstIdleBought, gold, killsNeeded, stage, waterMageUpgradePrice, randomMob, goldBoost, iceMageLevel, waterMageLevel, fireMageLevel, electricMageLevel, electricMageMax, warriorUpgradePrice, farmUpgradePrice, warriorLevel, farmLevel, rebirthIncrement, rebirthGoldBoost, ballistaLevel, mortarLevel, ballistaUpgradePrice, mortarUpgradePrice, stageBoost, killsBoost, ballistaMax]);

    useEffect(() => {
        const checkStates = setInterval(() => {
            if (enemyHealth <= 0) {
                setRandomMob(mobs[Math.floor(Math.random() * 11)]);
                setHealth(enemyMaxHealth);
                setKills(killsNeeded => killsNeeded - 1)
                dropGold();
            }
            if (killsNeeded <= 0) {
                if (stage === 1 && stageBoost !== 0) {
                    setStage(stageBoost);
                }
                else {
                    setStage(stage => stage + 1);
                }
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
                setKills(10 - killsBoost);
            }
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage]);

    useEffect(() => {
        setHealth(enemyMaxHealth);
    }, [enemyMaxHealth]);


    useEffect(() => {
        const startIdle = setInterval(() => {
            setHealth(enemyHealth => enemyHealth - autoIncrement)
        }, autoInterval)

        return () => clearInterval(startIdle)
    });

    const dropGold = () => {
        setGold(gold => gold + (Math.round(enemyMaxHealth / 10)) + goldBoost)
    }
        
    const onClick = () => {
        setHealth(enemyHealth - clickIncrement)
    };

    const checkPrice = (price, increment, interval, goldAddition, setUpgradePrice, levelFunc = () => {}, buttonID = '') => {
        if (gold >= price) {
            if (buttonID === 'clickUpgrade') {
                setClickIncrement(clickIncrement => clickIncrement + increment);
                setWaterMageUpgradePrice(Math.round(price * 1.22));
            }
            else if (autoInterval - interval <= 100) {
                setElectricMageMax(true);
            }
            else {
                setFirstIdleBought(true);
                setUpgradePrice(Math.round(price * 1.22));
                setAutoIncrement(autoIncrement => autoIncrement + increment);
                setAutoInterval(autoInterval => autoInterval - interval);
                setGoldBoost(goldBoost => goldBoost + goldAddition)
            }
            setGold(gold => gold - price);
            levelFunc(level => level + 1)
        }
    };

    const checkSouls = (price, increment, goldAddition, killsSubtraction, stageAddition, setUpgradePrice, levelFunc = () => {}) => {
        if (killsBoost + killsSubtraction >= 5) {
            setBallistaMax(true);
        }
        if (souls >= price) {
            setUpgradePrice(Math.round(price * 2));
            setAutoIncrement(autoIncrement => autoIncrement + increment);
            setRebirthIncrement(rebirthIncrement => rebirthIncrement + increment)
            setGoldBoost(goldBoost => goldBoost + goldAddition)
            setRebirthGoldBoost(rebirthGoldBoost => rebirthGoldBoost + goldAddition)
            setKillsBoost(killsBoost => killsBoost + killsSubtraction)
            setStageBoost(stageBoost => stageBoost + stageAddition)
            setSouls(souls => souls - price);
            levelFunc(level => level + 1)
        }
    };

    const rebirth = () => {
        if (stage >= 50) {
            setSouls(souls => souls + 10 + (stage - 50) + Math.floor(gold / 1000));
            setFirstRebirth(true);
            setGold(0);
            setStage(1);
            setMaxHealth(10);
            setClickIncrement(1);
            setAutoIncrement(rebirthIncrement);
            setAutoInterval(1000);
            setGoldBoost(rebirthGoldBoost);
            setWaterMageUpgradePrice(5);
            setFireMageUpgradePrice(50);
            setIceMageUpgradePrice(250);
            setElectricMageUpgradePrice(1000);
            setHealth(enemyMaxHealth);
            setKills(10);
            setFirstIdleBought(false);
            setWaterMageLevel(1);
            setFireMageLevel(1);
            setIceMageLevel(1);
            setElectricMageLevel(1);
            setRandomMob(mobs[0]);
            setElectricMageMax(false);
        }
        else {
            alert("Reach stage 50 to rebirth! For every rebirth, you will get 10 🧿 which can be used to upgrade rebirth upgrades. For every stage past 50 that you are on, you will get another 🧿. As well, for every 1000 gold, get another 🧿.")
        }
    };

    return (
        <div className='game'>
            <div className='ui'>
                <div className='currency'>🪙 {gold} <br /> 🧿 {souls} </div>
                <div className='damage'>
                    <div>{autoIncrement / autoInterval * 1000} DPS (idle) </div>
                    <div className='break'></div>
                    <div>{clickIncrement} Click Damage </div>
                </div>
                <div className='upgrades'>

                    <button className='clickUpgrade' onClick={() => 
                        {checkPrice(waterMageUpgradePrice, 1 + Math.floor(waterMageLevel / 5), 0, 0, undefined, setWaterMageLevel, 'clickUpgrade')}}> 
                        Click Damage <br /> 🪙 {waterMageUpgradePrice} </button>
                    <div className='upgDesc'>Water Mage <br /> Level {waterMageLevel}</div>
                    <img draggable="false" dragstart="false"  className='click' src={clickImg[Math.min(Math.floor(waterMageLevel / 5), 3)]} alt="Water Mage" /> 

                    <div className='break'></div>

                    <button className='autoFighterUpgrade' onClick={() => 
                        {checkPrice(fireMageUpgradePrice, 1 + Math.floor(fireMageLevel / 5), 0, 0, setFireMageUpgradePrice, setFireMageLevel)}}>
                        Idle Damage <br /> 🪙 {fireMageUpgradePrice} </button>
                    <div className='upgDesc'>Fire Mage <br /> Level {fireMageLevel}</div>
                    <img draggable="false" dragstart="false"  className='auto1' src={damageImg[Math.min(Math.floor(fireMageLevel / 5), 3)]} alt="Fire Mage" /> 

                    {firstIdleBought && <div className='autoUpgrades'>
                        <div className='break'></div>

                        <button className='autoFighterUpgrade' onClick={() => 
                            {checkPrice(iceMageUpgradePrice, 0, 0, 1 + Math.floor(iceMageLevel / 2), setIceMageUpgradePrice, setIceMageLevel)}}>
                            More Gold <br /> 🪙 {iceMageUpgradePrice} </button>
                        <div className='upgDesc'>Ice Mage <br /> Level {iceMageLevel}</div>
                        <img draggable="false" dragstart="false"  className='auto2' src={goldImg[Math.min(Math.floor(iceMageLevel / 5), 3)]} alt="Ice Mage" /> 

                        <div className='break'></div>

                        {!electricMageMax && <button className='autoFighterUpgrade' onClick={() => 
                            {checkPrice(electricMageUpgradePrice, 0, 50 + (50 * Math.floor(electricMageLevel / 6)), 0, setElectricMageUpgradePrice, setElectricMageLevel)}}>
                            Idle Speed  <br /> 🪙 {electricMageUpgradePrice} </button>}                        
                        {electricMageMax && <button className='maxedButton' disabled={true}> 
                            Max Level </button>}
                        <div className='upgDesc'>Electric Mage <br /> Level {electricMageLevel}</div>
                        <img draggable="false" dragstart="false"  className='auto3' src={speedImg[Math.min(Math.floor(electricMageLevel / 4), 3)]} alt="Electric Mage" />
                    </div>}

                    {firstRebirth && <div className='rebirthUpgrades'>
                        <div className='break'></div>

                        <button className='autoFighterUpgrade' onClick={() => 
                            checkSouls(warriorUpgradePrice, 3 + (3 * Math.floor(warriorLevel / 5)), 0, 0, 0, setWarriorUpgradePrice, setWarriorLevel)}>
                            Extreme Damage <br /> 🧿 {warriorUpgradePrice} </button>
                        <div className='upgDesc'>Warrior <br /> Level {warriorLevel}</div>
                        <img draggable="false" dragstart="false"  className='auto2' src={rebirthDamageImg[Math.min(Math.floor(warriorLevel / 5), 3)]} alt="Warrior" /> 

                        <div className='break'></div>

                        <button className='autoFighterUpgrade' onClick={() => 
                            checkSouls(farmUpgradePrice, 0, 2 + (2 * Math.floor(farmLevel / 2)), 0, 0, setFarmUpgradePrice, setFarmLevel)}>
                            Extreme Gold  <br /> 🧿 {farmUpgradePrice} </button>
                        <div className='upgDesc'>Farm <br /> Level {farmLevel}</div>
                        <img draggable="false" dragstart="false"  className='auto3' src={rebirthGoldImg[Math.min(Math.floor(farmLevel / 4), 3)]} alt="Farm" />

                        <div className='break'></div>

                        {!ballistaMax && <button className='autoFighterUpgrade' onClick={() => 
                            checkSouls(ballistaUpgradePrice, 0, 0, 1, 0, setBallistaUpgradePrice, setBallistaLevel)}>
                            Decrease Kills Needed  <br /> 🧿 {ballistaUpgradePrice} </button>}
                        {ballistaMax && <button className='maxedButton' disabled={true}> 
                        Max Level </button>}
                        <div className='upgDesc'>Ballista <br /> Level {ballistaLevel}</div>
                        <img draggable="false" dragstart="false"  className='auto3' src={rebirthKills[Math.min(Math.floor(ballistaLevel / 2), 3)]} alt="Ballista" />
                        
                        <div className='break'></div>

                        <button className='autoFighterUpgrade' onClick={() => 
                            checkSouls(mortarUpgradePrice, 0, 0, 0, 10, setMortarUpgradePrice, setMortarLevel)}>
                            Skip Stages  <br /> 🧿 {mortarUpgradePrice} </button>
                        <div className='upgDesc'>Mortar <br /> Level {mortarLevel}</div>
                        <img draggable="false" dragstart="false"  className='auto3' src={rebirthStage[Math.min(Math.floor(mortarLevel / 4), 3)]} alt="Mortar" />
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
            <div className='sideMenu'>
                    <button onClick={rebirth}>Rebirth</button>
                    <div className='break'></div>
                <Link to="/">
                        <button>Main Menu</button>
                </Link>
            </div>
        </div>
    );
}

export default Game;
