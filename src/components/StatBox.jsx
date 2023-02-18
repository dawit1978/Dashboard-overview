import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box  m="0 80px">
      <Box display="flex"  justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
       
      </Box >
      <Box  m="0 25px"  justifyContent="space-between"alignItems="center" mt="2px">
        <Typography fontSize="30px" variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        
      </Box>
    </Box>
  );
};

export default StatBox;
