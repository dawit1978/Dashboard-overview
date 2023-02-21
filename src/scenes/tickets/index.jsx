import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Tickets = (props) => {
  const { setSelected } = props
  useEffect(()=>{
   setSelected("Tickets")
  },[setSelected]);
  
  return (
    <Box ml="20px">
      
     
    </Box>
  );
};

export default Tickets;
