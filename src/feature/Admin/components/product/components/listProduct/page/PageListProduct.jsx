import React ,{useState} from 'react';
import Box from "@mui/material/Box";
import ToolProduct from '../components/Tool';
import TableProduct from '../components/TableProduct';
import Grid from "@mui/material/Grid";
function PageProductList(props) {
   const [value,setValue]=useState("")
   const handleChangeProduct =(data)=>(
      setValue(data)
   )
   return (
      <Box sx={{margin:"50px",justifyContent: "center",display: "flex",backgroundColor:"rgba(188, 117, 154, 0.09)",borderRadius:"20px"}}>
         <Grid container justifyContent="center" alignItems="center" sx={{padding:"24px"}}>
            <Grid item xs={12} >
                  <ToolProduct handleChangeProduct={handleChangeProduct}/>
            </Grid>
            <Grid item xs={12}>
               <TableProduct products={props.products} value={value}/>
            </Grid>
         </Grid>
      </Box>
   );
}

export default PageProductList;
