import React,{useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import productApi from '../../../../../../api/productApi';
import PageProductList from './page/PageListProduct';
function ProductList() {
   const [products,setProduct] = useState([])
   useEffect(() => {
      ; (async () => {
         try {
            const res = await productApi.getAll()
            console.log("res:",res.data)
            setProduct(res.data)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   return (
      <Box>
         <PageProductList products={products}/>
      </Box>
   );
}

export default ProductList;
