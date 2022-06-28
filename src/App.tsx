import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Sidebar from './components/Sidebar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FinanceTable from "./components/Finances";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Logged from './components/AlreadyLogged'
import Detail from './components/Detail'

import './App.css';


function App() {
  const theme = createTheme({
    
    zIndex: {
      drawer: -1,
      appBar: 10,
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Nav />
          
        <Routes>
          <Route path="/" element= {<Login/>}/>
          
          <Route path="/details" element= {<Detail/>}/>
          <Route path="/dash" element={<Home/>} />
          <Route path="/finances" element={<FinanceTable />} />
        </Routes>
      </ThemeProvider>
    </div>
  );

}
export default App;
