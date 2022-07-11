import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {


  return (
  <div id="content">
    <h1>
        Portfolio
    </h1>
    <h2>Leo MARIE</h2>

    <a className="card" style={{"display": "block"}} target="_blank" href="https://cryptosonos.netlify.app/">
        Crypto Sonos
    </a>
    <p className ="maintext">NFT mini-game on Ethereum Rinkeby test-net.</p>
    <p className="secondarytext">Smart Contract coded with Solidity.</p>
    <p className="secondarytext">UI coded with React.</p>

    <a className="card" style={{"display": "block"}} target="_blank" href="https://masterm1nd.netlify.app/">
        Mastermind
    </a>
    <p className ="maintext">Mastermind mini-game.</p>
    <p className="secondarytext">UI coded with React.</p>

    <a className="card" style={{"display": "block"}} target="_blank" href="https://pu1ssance4.netlify.app/">
        Connect 4
    </a>
    <p className ="maintext">Connect 4 mini-game.</p>
    <p className="secondarytext">UI coded with React.</p>

    <a className="card" style={{"display": "block"}} target="_blank" href="https://leo-marie.github.io/chifoumi/">
        Rock Paper Scissors
    </a>
    <p className ="maintext">Rock-Paper-Scissors mini-game.</p>
    <p className="secondarytext">UI coded with React.</p>
    
  </div>

  )

} // App

export default App;
