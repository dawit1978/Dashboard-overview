import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Settings = (props) => {

  const { setSelected } = props
  useEffect(()=>{
   setSelected("Settings")
  },[setSelected]);

  return (
    <Box m="20px">
             
    </Box>
  );
};

export default Settings;
