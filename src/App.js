import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import {useState} from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Views from './components/Views'
import Data from './components/Data'
import MapChart from './components/MapChart'


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Data/>
        <MapChart/>
        <Footer />
      </div>
      </BrowserRouter>


  );
}

export default App;
