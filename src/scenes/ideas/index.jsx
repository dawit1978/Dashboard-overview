import React, { useEffect } from "react";

import { Box } from "@mui/material";
import Header from "../../components/Header";

const Ideas = (props) => {

  useEffect(()=>{
    props.setSelected("Ideas")
  },[]);

  return (
    <Box m="20px">
     
    </Box>
  );
};

export default Ideas;
