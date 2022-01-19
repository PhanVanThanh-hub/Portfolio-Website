import React ,{useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import ToolFAQ from '../components/Tool';
import TableFAQ from '../components/TableFAQ';
import Grid from "@mui/material/Grid";
import faqApi from '../../../../../api/faqApi';
import { useSelector } from 'react-redux';
import PaginationFAQAdmin from '../components/Pagination';
function PageFAQ() {
   
   const [data,setData] = useState([])
   const reloadPage = useSelector(state => state.faq.value)
   const value=useSelector(state => state.faq.findQuestion)
   const page = useSelector(state =>state.faq.page)
   const [count,setCount]=useState(0)
   useEffect(() => {
      ; (async () => {
         try {
            const res = await faqApi.getAllAdmin(page)
            var amount = res.data.count / 8  
            setCount(Math.ceil(amount))
            setData(res.data.results)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [reloadPage,page])
   return (
      <Box sx={{margin:"50px",justifyContent: "center",display: "flex",backgroundColor:"rgba(188, 117, 154, 0.09)",borderRadius:"20px"}}>
         <Grid container justifyContent="center" alignItems="center" sx={{padding:"24px"}}>
            <Grid item xs={12} >
                  <ToolFAQ />
            </Grid>
            <Grid item xs={12}>
               <TableFAQ datas={data} page={page} value={value}/>
            </Grid>
            <Grid item xs={12}>
               <PaginationFAQAdmin   count={count}/>
            </Grid>
         </Grid>
      </Box>
   );
}

export default PageFAQ;
