import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import {useState} from 'react'
import ReactTooltip from 'react-tooltip'

import Footer from './components/Footer'
import Header from './components/Header'
import Views from './components/Views'
import Data from './components/Data'
import MapWithToolTip from './components/MapWithToolTip';



import './css/App.css'

function App() {
  const [content,setContent] = useState('');
  return (
      <div className="AppContainer">
        <Header />
        <Data/>
        <MapWithToolTip/>
        <Footer />
      </div>
  );
}

export default App;
