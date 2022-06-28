import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
      </ThemeProvider>
    </div>
  );
}

export default App;
