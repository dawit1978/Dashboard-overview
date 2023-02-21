import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";

const Topbar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
     
      <Box
        display="flex"
        // backgroundColor={colors.primary[400]}
        // borderRadius="10px"
        variant="h2"
      >
           
        <Header title={props.selected} />
      </Box>

      {/* ICONS */}
      <Box display="flex">
         {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
       
       
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            variant="h6"
            color={colors.grey[100]}
            fontWeight="small"
            sx={{ m: "10px 5px 10px 20px" }}
          >
            wawa fike
          </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="30px"
            height="30px"
            src={`../../assets/avatar---man----header.svg`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
