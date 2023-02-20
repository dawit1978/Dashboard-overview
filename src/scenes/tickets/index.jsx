import React, { useEffect } from "react";

import { Box } from "@mui/material";
import Header from "../../components/Header";

const Tickets = (props) => {
  useEffect(()=>{
    props.setSelected("Title")
  },[]);
  return (
    <Box ml="20px">
      
     
    </Box>
  );
};

export default Tickets;
