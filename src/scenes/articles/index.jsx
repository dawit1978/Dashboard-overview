import React, { useEffect } from "react";

import { Box } from "@mui/material";


const Articles = (props) => {

  const { setSelected } = props
  useEffect(()=>{
   setSelected("Articles")
  },[setSelected]);

  return (
    <Box m="20px">
     
     
    </Box>
  );
};

export default Articles;
