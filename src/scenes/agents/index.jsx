import React, { useEffect } from "react";

import { Box } from "@mui/material";

const Agents = (props) => {

  const { setSelected } = props
  useEffect(()=>{
   setSelected("Agents")
  },[setSelected]);

  return (
    <Box m="20px">
      {/* <Header title="Agents" /> */}
     
    </Box>
  );
};

export default Agents;
