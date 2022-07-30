import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import "../components/Guide/GuideNav/guidenav.css";
import Navbar from '../components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMountainSun, faClockRotateLeft, faCalendarCheck, faMoneyBill1Wave, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
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

export default function TravelingGuide() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Navbar />
            <div class="text-left tg-nav">
                <Box className='d-flex flex-row' sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs className='bg-light tg-guide-nav' value={value} onChange={handleChange} aria-label="basic tabs example">
                            {/* <FontAwesomeIcon icon={faUser} /> */}
                            <Tab className='tg-section' label="Profile" {...a11yProps(1)} />
                            {/* <FontAwesomeIcon icon={faMountainSun} /> */}
                            <Tab className='tg-section' label="Trips" {...a11yProps(2)} />
                            {/* <FontAwesomeIcon icon={faCalendarCheck} /> */}
                            <Tab className='tg-section' label="Schedules" {...a11yProps(3)} />
                            {/* <FontAwesomeIcon icon={faClockRotateLeft} /> */}
                            <Tab className='tg-section' label="History" {...a11yProps(4)} />
                            {/* <FontAwesomeIcon icon={faMoneyBill1Wave} /> */}
                            <Tab className='tg-section' label="Payments" {...a11yProps(5)} />
                            {/* <FontAwesomeIcon icon={faCircleExclamation} /> */}
                            <Tab className='tg-section' label="Issues" {...a11yProps(6)} />

                        </Tabs>
                    </Box>
                    <TabPanel className="tg-content" value={value} index={0}>
                        hi 1
                    </TabPanel>
                    <TabPanel className="tg-content" value={value} index={1}>
                        hii 2
                    </TabPanel>
                    <TabPanel className="tg-content" value={value} index={2}>
                        hiii 3
                    </TabPanel>
                    <TabPanel className="tg-content" value={value} index={3}>
                        hiiii 4
                    </TabPanel>
                    <TabPanel className="tg-content" value={value} index={4}>
                        hiiii 4
                    </TabPanel>
                    <TabPanel className="tg-content" value={value} index={5}>
                        hiiiii 5
                    </TabPanel>
                </Box>
            </div>

        </div>
    );
}

//Install material ui
//npm install @material-ui/core
//npm install @material-ui/icons
