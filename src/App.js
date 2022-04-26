import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import {useState} from 'react'
import ReactTooltip from 'react-tooltip'

import Footer from './components/Footer'
import Header from './components/Header'
import Views from './components/Views'
import Data from './components/Data'
import Map from './components/Map'



import './css/App.css'

function App() {
  const [content,setContent] = useState('');
  return (
    <BrowserRouter>
      <div className="AppContainer">
        <Header />
        <Data/>
        <div className ='map'>
            <Map setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
        
        <Footer />
      </div>
      </BrowserRouter>


  );
}

export default App;
