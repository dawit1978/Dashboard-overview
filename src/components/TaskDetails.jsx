import React from "react";
import { Box, Button, Checkbox, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
// import Radio from '@mui/material/Radio';

const TaskDetails = ({ title,icon, tasktitle, radioicon, taskbutton }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Box   display="flex" justifyContent="space-between">
        <Box  sx={{p:"10px" ,width:"500"}}>
          <Typography 
              variant="h5"
              color={colors.greenAccent[500]}
               sx={{ mt: "5px" }}>
            {title}
            </Typography>
        </Box>
        <Box>

        <IconButton
          variant="h6" fontWeight="100">
             {icon}
            </IconButton>
            
        </Box>
     </Box>
     {/* --------------------------- */}
     <Box  borderBottom={`1px solid ${colors.grey[500]}`} display="flex" justifyContent="space-between">
            {radioicon}
        <Typography
             variant="h5"
             color={colors.grey[100]}
            //    sx={{ mt: "5px" }}
            >
             
            {tasktitle}
        </Typography>
        {taskbutton}
     </Box>
</Box>  
         
  );
};
export default TaskDetails