import React, { useEffect } from "react";

import { Box } from "@mui/material";
import Header from "../../components/Header";

const Conatacts = (props) => {
  useEffect(()=>{
    props.setSelected("Contacts")
  },[]);

  return (
    <Box m="20px">
      
    </Box>
  );
};

export default Conatacts;
