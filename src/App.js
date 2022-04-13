import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'


import Footer from './components/Footer'
import Header from './components/Header'
import Views from './components/Views'

function App() {

  const getData = () =>{
    axios.get('https://data.cdc.gov/resource/9mfq-cb36.json?')
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
           <button onClick={getData}>Click</button>
        <Footer />
      </div>
      </BrowserRouter>


  );
}

export default App;
