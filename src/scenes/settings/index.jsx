import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Settings = (props) => {

  useEffect(()=>{
    props.setSelected("Settings")
  },[]);

  return (
    <Box m="20px">
             
    </Box>
  );
};

export default Settings;
