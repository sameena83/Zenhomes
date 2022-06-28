import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'
import Logged from './components/AlreadyLogged'
import Home from './components/Home'

import './App.css';



function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path="/logged" element= {<Logged/>}/>
        <Route path="/details" element= {<Home/>}/>
      </Routes>
     
      
    
    </div>
  );
}

export default App;


