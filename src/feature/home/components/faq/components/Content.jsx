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
function Content(props) {
   const  classes=useStyles()
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };
   return (
      <Box className={classes.box} sx={{bgcolor: 'background.default' }}>
         <Grid container sx={{padding:"30px",height:"100%"}} direction="row">
            <Grid item xs={4} sx={{marginBottom:"20px",height:"15%"}}>
               <Typography className={classes.text} sx={{fontWeight: "600",fontSize: "2rem",}}>FAQ</Typography>
            </Grid>
            <Grid item xs={12} sx={{height:"80%",paddingBottom:"10px",overflow:"hidden"}}>
               {props.data.map((value,index)=>{
                  return(
                     <Accordion key={index} expanded={expanded === index}  onChange={handleChange(index)}  sx={{backgroundColor:"transparent",boxShadow:"none" }} >
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                        >
                           <Typography sx={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"cursive"}}>{value.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <Typography>
                              {value.answer}
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
