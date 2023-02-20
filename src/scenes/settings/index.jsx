import React, { useEffect } from "react";

import { Box } from "@mui/material";
import Header from "../../components/Header";

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
