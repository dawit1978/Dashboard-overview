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
  const [selected, setSelected ] = useState("")
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar selected={selected} setIsSidebar={setIsSidebar} />
            <Routes>
             
              <Route  path="/" element={<Overview setSelected={(select)=>{setSelected(select)}}/>} />
              <Route  path="/tickets" element={<Tickets setSelected={(select)=>{setSelected(select)}}/>} />
              <Route  path="/ideas" element={<Ideas setSelected={(select)=>{setSelected(select)}} />} />
              <Route  path="/contacts" element={<Contacts setSelected={(select)=>{setSelected(select)}}/>} />
              <Route   path="/agents" element={<Agents setSelected={(select)=>{setSelected(select)}}/>} />
              <Route   path="/articles" element={<Articles setSelected={(select)=>{setSelected(select)}} />} />
              <Route  path="/settings" element={<Settings setSelected={(select)=>{setSelected(select)}} />} />
              <Route  path="/subscription" element={<Subscription setSelected={(select)=>{setSelected(select)}}/>} /> 
            
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
