import logo from './logo.svg';
import './App.css';
import Resource from './components/resource/resource';
import useScreenOrientation from 'react-hook-screen-orientation'
import { Fragment } from 'react';
let peepo = require('./images/peepo.gif')
let hashbullah = require('./images/hashbullah.gif')

function App() {
  const screenOrientation = useScreenOrientation();
  let content = null
  let rnd = Math.floor(Math.random() * 10);
  let randomImage = rnd < 5 ? peepo : hashbullah
  
  if (screenOrientation === "landscape-primary" || screenOrientation === "landscape-secondary") {
    content = 
    <div className="App">
      <Resource resourceClassName="resource-megacredit" top="8vh" left={15} limit={-5}></Resource>
      <Resource resourceClassName="resource-steel" top="8vh" left={48} limit={0}></Resource>
      <Resource resourceClassName="resource-titanium" top="8vh" left={82} limit={0}></Resource>
      <Resource resourceClassName="resource-plants" top="45vh" left={15} limit={0}></Resource>
      <Resource resourceClassName="resource-energy" top="45vh" left={48} limit={0}></Resource>
      <Resource resourceClassName="resource-heat" top="45vh" left={82} limit={0}></Resource>
    </div>
  }else {
    content = 
    <div className="portrait-div">
      <img src={randomImage} alt=""></img>
    </div>
  }

  return (
    <Fragment>{content}</Fragment>
  );
}

export default App;
