
import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import ContactsTwoToneIcon from '@mui/icons-material/ContactsTwoTone';
import Person4TwoToneIcon from '@mui/icons-material/Person4TwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
             
           <Box display="flex" justifyContent="center" alignItems="center">
             
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="d-symbol"
                width="30px"
                height="30px"
                src={`../../assets/d.svg.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Typography
                variant="h6"
                color={colors.grey[100]}
                fontWeight="small"
                sx={{ m: "10px 20px 10px 5px" }}
              >
                Dashboard Kit
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
          </Box>
            )}
          </MenuItem>

         

         <Box paddingLeft={isCollapsed ? undefined : "10%"}>
           
            

              <hr/>
            <Item
              title="Overview"
              to="/"
              component={<Link to="/overview" />}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              >
                Overview
              </Item>
            
            <Item
              title="Tickets"
              to="/tickets"
              component={<Link to="/tickets" />}
              icon={<ConfirmationNumberTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Tickets
            </Item>
            <Item
              title="Ideas"
              to="/ideas"
              component={<Link to="ideas" />}
              icon={<TipsAndUpdatesTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Ideas
              </Item>

            <Item
              title="Contacts"
              to="/contacts"
              component={<Link to="/contacts" />}
              icon={<ContactsTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
              >
                Contacts
              </Item>
            
            <Item
              title="Agents"
              to="/agents"
              component={<Link to="/agents" />}
              icon={<Person4TwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
              >
                Agents
              </Item>
            
            <Item
              title="Articles"
              to="/articles"
              component={<Link to="/articles" />}
              icon={<ArticleTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
              >
                Articles
              </Item>
            
              <hr/>
            <Item
              title="Settings"
              to="/settings"
              component={<Link to="/settings" />}
              icon={<SettingsTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
              >
                Settings
              </Item>
            
            <Item
              title="Subscriptions"
              to="/subscription"
              component={<Link to="/subscription" />}
              icon={<SubscriptionsTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
              >
                Subscription
            </Item>
          </Box>
            
            

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
