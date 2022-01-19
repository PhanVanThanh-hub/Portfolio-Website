import React,{useState} from 'react';
import { makeStyles } from '@mui/styles';
import {reloadPage,ChangePageFAQ} from '../FAQSlice';
import {useDispatch,useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
const useStyles = makeStyles({
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
});
export default function PaginationFAQAdmin(props) {
   const classes = useStyles()
   const dispatch = useDispatch();

   const changePage = (event,pageNumber) => {
       
      const newPagination = {
         page: pageNumber,
      }
      const actions = ChangePageFAQ(newPagination)
      dispatch(actions)
     
   }
   return (
      <>
      <Grid item xs={12} sx={{height:"5%",justifyContent:"flex-end",display: "flex",}}>
         <Pagination
            count={props.count}
                  
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
       
      </>
   );
}
