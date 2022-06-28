import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardContract from "./components/CardComponents/CardContract"
import CardStats from "./components/CardComponents/CardStats"
import CardLaws from "./components/CardComponents/CardLaws"
import CardMaintenance from "./components/CardComponents/CardMaintenance";

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
        <CardContract />
        <CardStats />
        <CardLaws />
        <CardMaintenance />
      </ThemeProvider>
    </div>
  );
}

export default App;
