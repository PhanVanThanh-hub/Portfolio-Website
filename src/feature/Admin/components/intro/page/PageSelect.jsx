import  React from 'react';
 
import Box from '@mui/material/Box';
 
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AvatarIntro from '../components/AvatartIntro';
import DesIntro from '../components/Des';
import Role from '../components/Role';
 
function TabPanel(props) {
   const { children, value, index, ...other } = props;
 
   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
         style={{ borderRadius:"12px",boxShadow:"2",backgroundColor:"rgba(220, 236, 218, 0.8)"}}
          
      >
         {value === index && (
            <div style={{padding:"8px"}}>{children} 
            </div>
              
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
export default function PageSelect() {
   const [value, setValue] = React.useState(0);
    
   
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
    
  
   return (
      <Box sx={{ width: '100%',paddingTop:"20px"  }}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider'  ,marginBottom:"20px",
                  borderRadius:"12px",boxShadow:"2"}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
               sx={{'& .MuiTabs-flexContainer':{
                     justifyContent: "center",
                     '& .MuiButtonBase-root':{
                        fontWeight: 700,textTransform:"none"
                     }
               }}}
            >
               <Tab label="Avatar" {...a11yProps(0)} />
               <Tab label="Description" {...a11yProps(1)} />
               <Tab label="Role" {...a11yProps(2)} />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
            <AvatarIntro/>
         </TabPanel>
         <TabPanel value={value} index={1}>
            <DesIntro/>
         </TabPanel>
         <TabPanel value={value} index={2}>
            <Role/>
         </TabPanel>
      </Box> 
           
   );
}
