import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { themeSettings } from "./theme";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/Chat";
import JsConverter from "./pages/JSConverter";
import Summary from "./pages/Summary";
import ScifiImage from "./pages/ScifiImage";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
