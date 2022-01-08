import React ,{useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import ToolProduct from '../components/Tool';
import TableProduct from '../components/TableProduct';
import Grid from "@mui/material/Grid";
import productApi from '../../../../../api/productApi';
import { useSelector } from 'react-redux';
function PageProductList() {
   
   const [products,setProduct] = useState([])
   const reloadPage = useSelector(state => state.product.value)
   const value=useSelector(state => state.product.findProduct)
   useEffect(() => {
      ; (async () => {
         try {
            const res = await productApi.getAll()
            setProduct(res.data)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [reloadPage])
   return (
      <Box sx={{margin:"50px",justifyContent: "center",display: "flex",backgroundColor:"rgba(188, 117, 154, 0.09)",borderRadius:"20px"}}>
         <Grid container justifyContent="center" alignItems="center" sx={{padding:"24px"}}>
            <Grid item xs={12} >
                  <ToolProduct />
            </Grid>
            <Grid item xs={12}>
               <TableProduct products={products} value={value}/>
            </Grid>
         </Grid>
      </Box>
   );
}

export default PageProductList;
