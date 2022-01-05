import React ,{useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import ToolProduct from '../components/Tool';
import TableProduct from '../components/TableProduct';
import Grid from "@mui/material/Grid";
import productApi from '../../../../../api/productApi';
function PageProductList() {
   const [value,setValue]=useState("")
   const handleChangeProduct =(data)=>(
      setValue(data)
   )
   const [products,setProduct] = useState([])
   useEffect(() => {
      ; (async () => {
         try {
            const res = await productApi.getAll()
            setProduct(res.data)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   return (
      <Box sx={{margin:"50px",justifyContent: "center",display: "flex",backgroundColor:"rgba(188, 117, 154, 0.09)",borderRadius:"20px"}}>
         <Grid container justifyContent="center" alignItems="center" sx={{padding:"24px"}}>
            <Grid item xs={12} >
                  <ToolProduct handleChangeProduct={handleChangeProduct}/>
            </Grid>
            <Grid item xs={12}>
               <TableProduct products={products} value={value}/>
            </Grid>
         </Grid>
      </Box>
   );
}

export default PageProductList;
