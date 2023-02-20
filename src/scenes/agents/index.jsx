import React, { useEffect } from "react";

import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Agents = (props) => {

  useEffect(()=>{
    props.setSelected("Agents")

  },[]);
  return (
    <Box m="20px">
      {/* <Header title="Agents" /> */}
     
    </Box>
  );
};

export default Agents;
