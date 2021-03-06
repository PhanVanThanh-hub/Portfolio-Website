import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import {Accordion,AccordionSummary,AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import faqApi from '../../../../../api/faqApi';
import { useMediaQuery,} from "@mui/material";
import Title from './Title';
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
function Content() {
   const  classes=useStyles()
   const [expanded, setExpanded] = useState(false);
   const [page, setPage] = useState(1);
   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };
   const [pagination , setPagination] =useState({page:1})
   const [data,setData] = useState([])
   const [count,setCount]=useState(0)
   useEffect(() => {
      ; (async () => {
         try {
            const res = await faqApi.getAll(pagination)
            var amount = res.data.count / 4  
            setCount(Math.ceil(amount))
            setData(res.data.results)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [page])
   const changePage = (event,pageNumber) => {
      setPage(pageNumber)
      const newPagination = {
         page: pageNumber,
      }
      setPagination(newPagination)
     
   }
   const largeScreen = useMediaQuery('(min-width:900px)');
   return (
      <Box className={classes.box} >
         <Grid container sx={{padding:"30px",height:"100%"}} direction="row">
             
               {
                  largeScreen?
                     <Grid item xs={4} sx={{marginBottom:"20px",height:"15%",
                           '@media ( min-width: 900px)':{
                              height:"0%",
                              
                           },
                        }}>
                        <Typography className={classes.text} sx={{fontWeight: "600",fontSize: "2rem",}}>FAQ</Typography>
                     </Grid>
                  :
                  <Grid item xs={12} sx={{height:"0%"}}>
                        <Title/>
                  </Grid>
               }
            <Grid item xs={12} 
               sx={{height:"80%",paddingBottom:"10px",overflow:"hidden",
                  '@media ( min-width: 900px)':{
                     height:"auto"
                  },
               }}>
               {data.map((value,index)=>{
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
             
            <Grid item xs={12} sx={{height:"5%",justifyContent:"flex-end",display: "flex",'@media ( max-width: 900px)':{
                  height:"0%"
               },}}>
               <Pagination
                  count={count}
                
                  className={classes.pagination}
                  onChange={changePage}
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
