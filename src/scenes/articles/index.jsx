import React, { useEffect } from "react";

import { Box } from "@mui/material";
import Header from "../../components/Header";

const Articles = (props) => {

  useEffect(()=>{
    props.setSelected("Articles")

  },[]);

  return (
    <Box m="20px">
     
     
    </Box>
  );
};

export default Articles;
