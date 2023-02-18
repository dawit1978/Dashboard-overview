import React from "react";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Tickets from "./scenes/tickets";
import Overview from "./scenes/overview";
import Ideas from "./scenes/ideas";
import Contacts from "./scenes/contacts";
import Agents from "./scenes/agents";
import Articles from "./scenes/articles";
import Settings from "./scenes/settings";
import Subscription from "./scenes/subscription";


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
             
              <Route path="/" element={<Overview />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/subscription" element={<Subscription />} /> 
            
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
