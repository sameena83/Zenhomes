import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'
import Logged from './components/AlreadyLogged'
import Detail from './components/Detail'
import Event from './components/Event'

import './App.css';



function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path="/logged" element= {<Logged/>}/>
        <Route path="/details" element= {<Detail/>}/>
        <Route path="/event" element= {<Event/>}/>

      </Routes>
     
      
    
    </div>
  );
}

export default App;


