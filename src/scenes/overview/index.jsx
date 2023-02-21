import React, { useEffect } from "react";

import { Box, Button, Radio, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import AddIcon from '@mui/icons-material/Add';
// import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import DetailsBox from "../../components/DetailsBox";
import UnresolvedDetails from "../../components/UnresolvedDetails";
import TaskDetails from "../../components/TaskDetails";


const Overview = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(()=>{
    props.setSelected("Overview")

  },[]);

  return (
    <Box m="20px"mb="50px">
      <Box m="20px">
      {/* <Header title="Overview" /> */}
     
    </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Unresolved"
            subtitle="60"
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Overdue"
            subtitle="16"
           
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Open"
            subtitle="43"
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="auto"
        >
          <StatBox
            title="On hold"
            subtitle="63"
            progress="0.80"
           
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="row"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                 variant="h3"
                 fontWeight="bold"
                 color={colors.grey[100]}
              >
              Today's Trend
              </Typography>
              <Typography
               

                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
               
              >
                as of 25 May 2019, 09:41 PM
              </Typography>
            </Box>
            {/* <Box  
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                // p="10px"
                >
              
                 <h5>Today</h5>
                 <h5>yesterday</h5>
            
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isOverview={true} />
          </Box>
        </Box>
        {/* ------trend----- */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          gridTemplateColumns= '3fr,3fr,3fr'
          overflow="auto"
          // gridAutoRows= "max-content"
        >
          {/* -------------------- */}
           <Box
                borderBottom={`1px solid ${colors.grey[500]}`}
                gridColumn="span 3"
                // backgroundColor={colors.primary[400]}
                
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="Resolved"
                  subtitle="449"
                  />
                </Box>
              
            <Box
                 borderBottom={`1px solid ${colors.grey[500]}`}
                gridColumn="span 3"
                // backgroundColor={colors.primary[400]}
                
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="Recieved"
                  subtitle="426"
                  />
              </Box>
              
              <Box
                borderBottom={`1px solid ${colors.grey[500]}`}
                gridColumn="span 3"
                // backgroundColor={colors.primary[400]}
                
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="Average first response time"
                  subtitle="33m"
                  />
              </Box>
              <Box
                borderBottom={`1px solid ${colors.grey[500]}`}
                gridColumn="span 3"
                // backgroundColor={colors.primary[400]}
                
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="Average response time"
                  subtitle="3h 8m"
                  />
              </Box>
              <Box
                 borderBottom={`1px solid ${colors.grey[500]}`}
                gridColumn="span 3"
                // backgroundColor={colors.primary[400]}
                
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="Resolution within SLA"
                  subtitle="94%"
                  />
              </Box>
            </Box>

        {/* ROW 3 */}

        {/*----------------- unresolved ----------- */}
        <Box
         height="100%"
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          // borderBottom={`4px solid ${colors.primary[500]}`}
          overflow="row"

          p="10px"
        >
          <DetailsBox 
              title="Unresolved tickets"
              viewtitle="View Details"
              subtitle="group:support"
              />
         
         {/* --------- */}
         
         <Box
            ml="10px"
            mt="15px"
          >
           <UnresolvedDetails title="Waiting on future request"subtitle="4120"/>
           <UnresolvedDetails title="Awaiting customer response"subtitle="1005"/> 
           <UnresolvedDetails title="Awaiting developer fix"subtitle="914"/>
           <UnresolvedDetails title="Pending"subtitle="214"/>
          </Box>
        </Box>
        {/* -------tasks------- */}
        <Box
          height="100%"
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          gridAutoRows= "max-content"
          width="100%"
          overflow="row"
        >
          <Box pl="10px"pr="10px">
            <DetailsBox 
              title="Tasks"
              viewtitle="View All"
              subtitle="Today"
              />
             <TaskDetails title="Create new Task"icon={<AddIcon />} />
          </Box>


             {/* =====details======= */}
           <Box height="100%" pb="5px">
             <TaskDetails
              radioicon={<Radio 
                // checked={selectedValue === 'a'}
                // onChange={handleChange}
                // value="a"
               />}

              tasktitle="finish ticket update"
              taskbutton={<Button variant="contained"sx={{ backgroundColor: "#fecf33" }}>Urgent</Button>}
           /> 
           <TaskDetails
              radioicon={<Radio/>}
              tasktitle="create new ticket example"
              taskbutton={<Button variant="contained"sx={{ backgroundColor: "#1c8e69" }}>new </Button>}
           /> 
           <TaskDetails
              radioicon={<Radio />}
              tasktitle="update ticket report"
              taskbutton={<Button variant="contained"sx={{color:'black', backgroundColor: "#F0F1F7"}}>default</Button>}
           /> 
           
           </Box>

        </Box>
          
      </Box>
    </Box>
  );
};

export default Overview;
