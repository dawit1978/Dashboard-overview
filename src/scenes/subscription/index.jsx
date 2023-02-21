import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Subscription = (props) => {

  const { setSelected } = props
  useEffect(()=>{
   setSelected("Subscription")
  },[setSelected]);

  return (
    <Box m="20px">
      
     
    </Box>
  );
};

export default Subscription;
