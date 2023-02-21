import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Ideas = (props) => {
const {setSelected} = props

  useEffect(()=>{
    setSelected("Ideas")
  },[setSelected]);

  return (
    <Box m="20px">
     
    </Box>
  );
};

export default Ideas;
