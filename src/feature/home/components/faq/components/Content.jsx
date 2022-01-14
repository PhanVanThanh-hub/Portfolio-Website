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
const useStyles = makeStyles(() => ({
   box:{
      backgroundColor:"rgba(107,20,255,255)",
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
         width:"80%",
         height: "5px",
         background:"rgba(224, 231, 0, 0.8)",
      },
   }
}))
const data=[
   {q:"dsa",a:"141123123"},
   {q:"d2132sa",a:"141123123"},
   {q:"d432sa",a:"141123123"},
]
function Content() {
   const  classes=useStyles()
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      console.log(":?:",panel,':',isExpanded,':',expanded)
      setExpanded(isExpanded ? panel : false);
   };
   return (
      <Box className={classes.box}>
         <Typography className={classes.text} sx={{fontWeight: "600",fontSize: "2rem",}}>FAQ</Typography>
         <div>
            {data.map((value,index)=>{
               return(
                  <Accordion key={index} expanded={true} onChange={handleChange({index})}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>{value.q}</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>
                           {value.a}
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
                  )
            })}
             
             
             
         </div>
      </Box>
   );
}

export default Content;
