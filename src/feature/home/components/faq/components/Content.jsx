import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const useStyles = makeStyles(() => ({
   box:{
      width:"100%",
      height: '100%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   text:{
      position: "relative",
      ' &::before':{
         content : '""',
         position: "absolute",
         bottom: "-5px",
         left: "0",
         width:"40px",
         height: "5px",
         background:"rgba(224, 231, 0, 0.8)",
      },
   },
   pagination:{
      '& ul li':{
         '& .Mui-selected':{
            color: "white",
            backgroundColor:"rgba(255, 0, 104, 0.8)"  
         },
         '& svg':{
            color: "red"
         },
      }
   }
}))
const data=[
   {q:"What is React?",a:"React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in building reusable UI components.It is used for developing complex and interactive web and mobile UI.Even though it was open-sourced only in 2015, it has one of the largest communities supporting it."},
   {q:" Why can’t browsers read JSX?",a:"Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser."},
   {q:"“In React, everything is a component.” Explain.",a:"Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI."},
   {q:"What is the purpose of render() in React",a:"Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked."},
    
   
]
function Content() {
   const  classes=useStyles()
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };
   return (
      <Box className={classes.box} sx={{bgcolor: 'background.default',color: 'text.secondary',}}>
         <Grid container sx={{padding:"30px",height:"100%"}} direction="row">
            <Grid item xs={4} sx={{marginBottom:"20px",height:"15%"}}>
               <Typography className={classes.text} sx={{fontWeight: "600",fontSize: "2rem",}}>FAQ</Typography>
            </Grid>
            <Grid item xs={12} sx={{height:"80%",paddingBottom:"10px",overflow:"hidden"}}>
               {data.map((value,index)=>{
                  return(
                     <Accordion key={index} expanded={expanded === index}  onChange={handleChange(index)}  sx={{backgroundColor:"transparent",boxShadow:"none" }} >
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                        >
                           <Typography sx={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"cursive"}}>{value.q}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <Typography>
                              {value.a}
                           </Typography>
                        </AccordionDetails>
                     </Accordion>
                     )
               })}
            </Grid>
             
            <Grid item xs={12} sx={{height:"5%",justifyContent:"flex-end",display: "flex",}}>
               <Pagination
                  count={3}
                  className={classes.pagination}
                  renderItem={(item) => (
                     <PaginationItem  
                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                     />
                  )}
               />
            </Grid>
         </Grid>
          
    
      </Box>
   );
}

export default Content;
