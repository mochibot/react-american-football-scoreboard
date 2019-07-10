//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from './Timer';

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const incrementScore = (amount, team) => {
    if (team === 'Giants') {
      setHomeScore(homeScore + amount); 
    } else {
      setAwayScore(awayScore + amount); 
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Giants</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <Timer />
          <div className="away">
            <h2 className="away__name">Chargers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => incrementScore(7, 'Giants')}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => incrementScore(3, 'Giants')}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => incrementScore(7, 'Chargers')}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => incrementScore(3, 'Chargers')}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
