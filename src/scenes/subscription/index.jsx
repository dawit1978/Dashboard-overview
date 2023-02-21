import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Subscription = (props) => {

  useEffect(()=>{
    props.setSelected("Subscription")
  },[]);
  return (
    <Box m="20px">
      
     
    </Box>
  );
};

export default Subscription;
