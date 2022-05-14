
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import {useState} from 'react'
import ReactTooltip from 'react-tooltip'

import Footer from './components/Footer'
import Header from './components/Header'
import Views from './components/Views'


import './css/App.css'


function App() {
  return (
      <div className="AppContainer">
        <Header />
        <Views/>
        <Footer />
      </div>
  );
}

export default App;
