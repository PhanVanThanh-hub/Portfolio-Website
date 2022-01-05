import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
   table:{
      '& .MuiTableCell-root':{
         fontWeight:"bold",
         fontSize:"1em"
      }
   }
});
export default function TableProduct(props) {
   const classes = useStyles()
   console.log("value:",props.value)
   return (
      <TableContainer component={Paper} sx={{width:"100%",borderRadius:"12px"}}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
            <TableRow  className={classes.table}>
               <TableCell align="center"  >#</TableCell>
               <TableCell align="center" >Image</TableCell>
               <TableCell align="left" >Name</TableCell>
               <TableCell align="left" >Tech Use</TableCell>
               
            </TableRow>
         </TableHead>
         <TableBody>
            {props.products.map(function(product,index){
               console.log("???:",product.name,':',typeof(product.name_product))
               if(product.name.includes(props.value)){
                  return(
                     <TableRow
                     key={product.name}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell align="center">{index}</TableCell>
                        <TableCell align="center">
                           <Avatar   variant="square" src={product.image} alt="Paella dish" sx={{    display: "block",marginLeft: "auto",marginRight: "auto",width: "50%",}} />
                        </TableCell>
                        <TableCell align="left">{product.name}</TableCell>
                        <TableCell align="left">{product.name_product}</TableCell>
                     </TableRow>
                  )
               }
                
            })}
         </TableBody>
         </Table>
      </TableContainer>
   );
}
