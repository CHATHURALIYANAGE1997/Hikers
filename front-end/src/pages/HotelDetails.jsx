import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import "../components/Hotels/facilities.css";
import epitome from "../components/Hotels/Epitome.png";
import resturant from "../components/Hotels/resturant.png";
import hotelview from "../components/Hotels/hotelview.png";
import food from "../components/Hotels/food.png";
import pool from "../components/Hotels/pool.png";
import Facilities from "../components/Hotels/Facilities";
import HotelName from "../components/Hotels/HotelName";
import Reviews from '../components/Hotels/Review';
import HotelRooms from '../components/Hotels/HotelRooms';
import Navbar from '../components/Navbar/Navbar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar/>
      <div class="p-5 mt-3 text-left container">
        <HotelName />
        <div className="d-flex flex-row hf-page-container">
          <div className="d-flex flex-column hf-left-side">
            <div className="d-flex flex-row">
              <img src={epitome} className="float-left hf-h-img" alt="front view"></img>
              <img src={resturant} className="float-left hf-h-img" alt="resturant"></img>
            </div>
            <div className="d-flex flex-row">
              <img src={hotelview} className="float-left hf-h-img" alt="hotel view"></img>
              <img src={food} className="float-left hf-h-img" alt="food"></img>
            </div>
            <div className="w-100">
              <img src={pool} className="float-left hf-pool-img" alt="food"></img>
            </div>
          </div>
          <div className=" d-flex flex-column hf-right-side">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='bt-hotel-nav' value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab className='w-25' label="Hotel Info & Price" {...a11yProps(0)} />
                  <Tab className='w-25' label="Facilities" {...a11yProps(1)} />
                  <Tab className='w-25' label="Hotel Rules" {...a11yProps(2)} />
                  <Tab className='w-25' label="Guests Reviews" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <HotelRooms />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Facilities />
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Reviews />
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div >
  );
}

//Install material ui
//npm install @material-ui/core
//npm install @material-ui/icons
