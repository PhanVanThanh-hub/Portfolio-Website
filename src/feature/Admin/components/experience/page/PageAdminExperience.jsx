import React ,{useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import ToolProduct from '../components/Tool';
import TableExperience from '../components/TableExperience';
import Grid from "@mui/material/Grid";
import cvApi from '../../../../../api/cvApi';
import { useSelector } from 'react-redux';
function PageExperience() {
   
   const [experience,setExperience] = useState([])
   const reloadPage = useSelector(state => state.admin.value)
    
   useEffect(() => {
      ; (async () => {
         try {
            const res = await cvApi.getExperience()
            setExperience(res.data)
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
               <TableExperience experience={experience} />
            </Grid>
         </Grid>
      </Box>
   );
}

export default PageExperience;
