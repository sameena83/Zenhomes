import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FinanceTable from "./components/Finances";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/finances" element={<FinanceTable />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
