import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Sidebar from './components/Sidebar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FinanceTable from "./components/Finances";

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
          <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/finances" element={<FinanceTable />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
