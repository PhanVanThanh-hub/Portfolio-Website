import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ModelUpdate from './ModelUpdate';
import ModelAddExperience from './ModelAddExperience';
import { makeStyles } from '@mui/styles';
import cvApi from '../../../../../api/cvApi';
import Swal from 'sweetalert2';
import Typography from '@mui/material/Typography';
import {Accordion,AccordionSummary,AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useDispatch,useSelector } from 'react-redux';
import {reloadPage} from '../../../AdminSlice';
import {hideAddModel} from '../ExperienceSlice';
const useStyles = makeStyles({
   table:{
      '& .MuiTableCell-root':{
         fontWeight:"bold",
         fontSize:"1em"
      }
   },
   box:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 700,
      backgroundColor: 'white',
      justifyContent: "center",
      display: "flex",
      padding:"20px",
      borderRadius:"12px"
   }
});
export default function TableExperience(props) {
   const classes = useStyles()
   const [open, setOpen] = useState(false);
   const [data,setData] = useState({});
   const handleClose = () => setOpen(false);
   const handleCloseAdd = ()=>{
      const actions = hideAddModel();
      dispatch(actions)
   }
   const show = useSelector(state => state.experience.show)
   const dispatch = useDispatch();
   const updateData=(data)=>{
      setData(data)
      setOpen(true);
   }
   const confirmDelete = (data)=>{
       
      Swal.fire({
         title: 'Bạn muốn xóa sản phẩm này?',
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: 'Delete',
         denyButtonText: `Don't delete`,
      }).then((result) => {
         if (result.isConfirmed) {
            deleteProduct(data)
            Swal.fire('Done Delete', '', 'success')
         } else if (result.isDenied) {
           Swal.fire('Changes are not saved', '', 'info')
         }
      })
       
       
   }
   const deleteProduct = (data)=>{
      const response= cvApi.deleteExperience(data);
      response.then(result =>
         notification(result)
         
      )
   }
   const notification=(result)=>{
      if(result===false){
         const actions = reloadPage()
         dispatch(actions)
         Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Đường truyền gặp sự cố',   
            })
      }
      else{
         const actions = reloadPage()
         dispatch(actions)
         Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Đã Xóa ',   
            })
      }
      const actions = reloadPage()
      dispatch(actions)
      const actions1 = hideAddModel();
      dispatch(actions1)
   }

   return (
      <>
      <TableContainer component={Paper} sx={{width:"100%",borderRadius:"12px"}}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
            <TableRow  className={classes.table}>
               <TableCell align="center"  >#</TableCell>
               <TableCell align="center" >Year</TableCell>
               <TableCell align="center" >Title</TableCell>
               <TableCell align="center" >Update</TableCell>
               <TableCell align="center" >Delete</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {props.experience.map((product,index)=>
                
                     <TableRow
                     key={product.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell align="center">
                           <Typography sx={{fontWeight:"bold",fontSize:"1rem",fontFamily:"cursive"}}>
                              {index}
                           </Typography>
                        </TableCell>
                        <TableCell align="center">
                           <Typography sx={{fontWeight:"bold",fontSize:"1rem",fontFamily:"cursive"}}>
                              {product.Year}
                           </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                          
      
                              <Accordion key={index}   sx={{backgroundColor:"transparent",boxShadow:"none" }} >
                                 <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                 >
                                    <Typography sx={{fontWeight:"bold",fontSize:"1rem",fontFamily:"cursive"}}>{product.Title}</Typography>
                                 </AccordionSummary>
                                 <AccordionDetails>
                                    <Typography>
                                       {product.Detail}
                                    </Typography>
                                 </AccordionDetails>
                              </Accordion>
                        
                        </TableCell>
                        <TableCell align="center" onClick={()=>updateData(product)}><UpdateIcon/></TableCell>
                        <TableCell align="center"  onClick={()=>confirmDelete(product)}><DeleteIcon/></TableCell>
                     </TableRow>
            )}
         </TableBody>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{  zIndex: 1 }}
         >
            <Box className={classes.box}>
               <ModelUpdate data={data}/>
            </Box>
         </Modal>
         <Modal
            open={show}
            onClose={handleCloseAdd}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{  zIndex: 1 }}
         >
            <Box className={classes.box}>
               <ModelAddExperience />
            </Box>
         </Modal>
         </Table>
      </TableContainer>
       
      </>
   );
}
