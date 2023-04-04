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
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/Chat";
import JsConverter from "./pages/JSConverter";
import Summary from "./pages/Summary";
import ScifiImage from "./pages/ScifiImage";
import Protected from "./pages/Protected";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
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
          <Route
            path="/summary"
            element={
              <Protected isLoggedIn={loggedIn}>
                <Summary />
              </Protected>
            }
          />
          <Route
            path="/paragraph"
            element={
              <Protected isLoggedIn={loggedIn}>
                <Paragraph />
              </Protected>
            }
          />
          <Route
            path="/js-converter"
            element={
              <Protected isLoggedIn={loggedIn}>
                <JsConverter />
              </Protected>
            }
          />
          <Route
            path="/chat"
            element={
              <Protected isLoggedIn={loggedIn}>
                <ChatBot />
              </Protected>
            }
          />
          <Route
            path="/scifi-image"
            element={
              <Protected isLoggedIn={loggedIn}>
                <ScifiImage />
              </Protected>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
