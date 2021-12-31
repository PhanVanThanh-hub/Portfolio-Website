import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AvatarIntro from './components/AvatartIntro';
import DesIntro from './components/Des';
import Role from './components/Role';
import Information from '../../../home/components/intro/components/Information';
import { FamilyRestroomRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
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
export default function Intro() {
   const [value, setValue] = React.useState(0);
   const chipRedux = useSelector(state => state.chip.value)
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   const name="Phan Van Thanh"
   const des= "I design and develop services for customers of all sizes,specializing in creating stylish, modern websites, web services andonline stores."
  
   return (
      <Box sx={{ flexGrow: 1 ,padding:"30px"}}>
         <Grid container spacing={2}>    
            <Grid item xs={8}>
               <Item>
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
               </Item>
            </Grid>
            <Grid item xs={4}>
               <Item>
                  <Grid container  spacing={0}  direction="column"
                        sx={{height:"100%"}}
                        alignItems="center" justifyContent="center" 
                  >
                     <Grid item xs={6}   sx={{ padding:"50px",}}>
                           
                        <Information checked={FamilyRestroomRounded} name={name} des={des} roles={chipRedux}/>
                        
                     </Grid>
                     {/* <Grid item xs={6} >
                           
                        <Image checked={checked}/>
                     
                     </Grid> */}
                     
                  </Grid>
               </Item>
            </Grid>
         </Grid>
      </Box>
   );
}
