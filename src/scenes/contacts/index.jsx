import React, { useEffect } from "react";

import { Box } from "@mui/material";


const Conatacts = (props) => {

  const { setSelected } = props

  useEffect(()=>{
   setSelected("Contacts")
  },[setSelected]);

  return (
    <Box m="20px">
      
    </Box>
  );
};

export default Conatacts;
