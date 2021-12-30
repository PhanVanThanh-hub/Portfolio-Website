import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import avatar1 from '../../../../static/admin/intro/Open Peeps - Avatar (1).png';
import avatar2 from '../../../../static/admin/intro/Open Peeps - Avatar (2).png';
import avatar3 from '../../../../static/admin/intro/Open Peeps - Avatar (3).png';
import avatar4 from '../../../../static/admin/intro/Open Peeps - Avatar (4).png';
import avatar5 from '../../../../static/admin/intro/Open Peeps - Avatar (5).png';
import avatar6 from '../../../../static/admin/intro/Open Peeps - Avatar (6).png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AvatarIntro from './components/AvatartIntro';
import DesIntro from './components/Des';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
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
            <>{children} 
            </>
              
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
     id: `vertical-tab-${index}`,
     'aria-controls': `vertical-tabpanel-${index}`,
   };
 }
 
const image=[avatar1,avatar2,avatar3,avatar4,avatar5,avatar6]
export default function Intro() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <Box sx={{ flexGrow: 1 ,padding:"30px"}}>
         <Grid container spacing={2}>    
            <Grid item xs={8}>
               <Item>
                  <Box sx={{ width: '100%' }}>
                     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Avatar" {...a11yProps(0)} />
                        <Tab label="Description" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                     </Tabs>
                     </Box>
                     <TabPanel value={value} index={0}>
                        <AvatarIntro/>
                     </TabPanel>
                     <TabPanel value={value} index={1}>
                        <DesIntro/>
                     </TabPanel>
                     <TabPanel value={value} index={2}>
                     Item Three
                     </TabPanel>
                  </Box> 
               </Item>
            </Grid>
            <Grid item xs={4}>
               <Item>xs=8</Item>
            </Grid>
         </Grid>
      </Box>
   );
}
