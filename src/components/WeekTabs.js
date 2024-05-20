import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Stack, Typography } from '@mui/material';
import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';
import Week4 from './Week4';

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
  

export default function WeekTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack justifyContent='center' alignItems='center'> 
    <Tabs value={value}
     onChange={handleChange} 
     aria-label="disabled tabs example"
     indicatorColor='#FF2625'
      textColor="inherit"
      sx={{color:'#3A1212',borderBottom:'3px solid #FF2625'}}
     >
      <Tab label="Week1" />
      <Tab label="Week2" />
      <Tab label="Week3" />
      <Tab label="Week4" />

    </Tabs>
    <TabPanel value={value} index={0}>
        <Week1/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Week2/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Week3/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Week4/>
      </TabPanel>
    </Stack>
    
  );
}