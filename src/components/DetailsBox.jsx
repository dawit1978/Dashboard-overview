import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const DetailsBox = ({ title, subtitle, viewtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
       <Box sx={{p:"10px"}}>
        <Box display="flex"justifyContent="space-between">
        <Typography variant="h5" fontWeight="600">
            {title}
            </Typography>
            
            
            <Button  variant="contained">{viewtitle}</Button>
        </Box>
        <Box>
        <Typography variant="h7" fontWeight="100">
            {subtitle}
            </Typography>
        </Box>
     
        </Box>
         
  );
};
export default DetailsBox