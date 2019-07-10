import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [toGo , setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(50);
  const [homeTimeout, setHomeTimeout] = useState(3);
  const [awayTimeout, setAwayTimeout] = useState(3);

  const incrementQuarter = () => {
    quarter === 4 ? setQuarter(1) : setQuarter(quarter + 1);
  }

  const incrementDown = () => {
    down === 4 ? setDown(1) : setDown(down + 1);
  }

  const changeToGo = () => {
    let num = Math.floor(Math.random() * 10) + 1;
    setToGo(num);
  }
  
  const changeBallOn = () => {
    if (ballOn > 1) {
      let num = Math.floor(Math.random() * ballOn);
      setBallOn(ballOn - num);
    }
  }

  const decHomeTimeout = () => {
    if (homeTimeout > 0) {
      setHomeTimeout(homeTimeout - 1);
    }
  }

  const decAwayTimeout = () => {
    if (awayTimeout > 0) {
      setAwayTimeout(awayTimeout - 1);
    }
  }

  return (
    <div className="bottomRow">
      <div className='timeout'>
        <h3 className='timeout__title'>Time-outs</h3>
        <div className='timeout__value' onClick={() => decHomeTimeout()}>{homeTimeout}</div>
      </div>
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value" onClick={() => incrementDown()}>{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value" onClick={() => changeToGo()}>{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value"onClick={() => changeBallOn()}>{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value" onClick={() => incrementQuarter()}>{quarter}</div>
      </div>
      <div className='timeout'>
        <h3 className='timeout__title'>Time-outs</h3>
        <div className='timeout__value' onClick={() => decAwayTimeout()}>{awayTimeout}</div>
      </div>
    </div>
  );
};

export default BottomRow;
