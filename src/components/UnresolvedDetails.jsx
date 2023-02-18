import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const UnresolvedDetails = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
      <Box  borderBottom={`1px solid ${colors.grey[500]}`}  sx={{pb:"15px"}}display="flex" justifyContent="space-between">
        <Box  sx={{ width:"500"}}>
          <Typography 
              variant="h5"
              color={colors.grey[200]}
               sx={{ mt: "5px" }}>
            {title}
            </Typography>
        </Box>
        <Box>
        <Typography 
        
          variant="h6" fontWeight="100">
            {subtitle}
            </Typography>
            
        </Box>
     
        </Box>
         
  );
};
export default UnresolvedDetails