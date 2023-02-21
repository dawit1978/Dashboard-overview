import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Tickets = (props) => {
  useEffect(()=>{
    props.setSelected("Tickets")
  },[]);
  return (
    <Box ml="20px">
      
     
    </Box>
  );
};

export default Tickets;
