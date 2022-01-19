import React,{useState} from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material';
import Paper from '@mui/material/Paper';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ModelUpdate from './ModelUpdate';
import ModelAddFAQ from './ModelAddFAQ';
import { makeStyles } from '@mui/styles';
import faqApi from '../../../../../api/faqApi';
import Swal from 'sweetalert2';
import {reloadPage,HideAddFAQ} from '../FAQSlice';
import {useDispatch,useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import {Accordion,AccordionSummary,AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
      width: 400,
      backgroundColor: 'white',
      justifyContent: "center",
      display: "flex",
      padding:"20px",
      borderRadius:"12px"
   },
   box1:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 700,
      backgroundColor: 'white',
      justifyContent: "center",
      display: "flex",
      padding:"20px",
      borderRadius:"12px",
      height:"400px"
   }
});
export default function TableFAQ(props) {
   const classes = useStyles()
   const [open, setOpen] = useState(false);
   const [data,setData] = useState({});
   const handleClose = () => setOpen(false);
   const page = useSelector(state =>state.faq.page)
   const handleCloseAdd = ()=>{
      const actions = HideAddFAQ();
      dispatch(actions)
   }
   const show = useSelector(state => state.faq.addFAQ)
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
   const deleteProduct =(data)=>{
      faqApi.remove(data.id);
      const actions = reloadPage();
      dispatch(actions)
   }
   return (
      <>
      <TableContainer component={Paper} sx={{width:"100%",borderRadius:"12px"}}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
            <TableRow  className={classes.table}>
               <TableCell align="center"  >#</TableCell>
               <TableCell align="left" >Question</TableCell>
               <TableCell align="center" >Update</TableCell>
               <TableCell align="center" >Delete</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {props.datas.map(function(product,index){
               const numericalOrder = (page.page-1)*8+index+1;
              
               if(product.question.includes(props.value)){
                  return(
                     <TableRow
                     key={product.question}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell align="center">
                           <Typography sx={{fontWeight:"bold",fontSize:"1rem",fontFamily:"cursive"}}>
                              {numericalOrder}
                           </Typography>
                        </TableCell>
                        <TableCell align="left"> 
                          
      
                              <Accordion key={numericalOrder}   sx={{backgroundColor:"transparent",boxShadow:"none" }} >
                                 <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                 >
                                    <Typography sx={{fontWeight:"bold",fontSize:"1rem",fontFamily:"cursive"}}>{product.question}</Typography>
                                 </AccordionSummary>
                                 <AccordionDetails>
                                    <Typography>
                                       {product.answer}
                                    </Typography>
                                 </AccordionDetails>
                              </Accordion>
                        
                        </TableCell>
                        <TableCell align="center" onClick={()=>updateData(product)}><UpdateIcon/></TableCell>
                        <TableCell align="center"  onClick={()=>confirmDelete(product)}><DeleteIcon/></TableCell>
                     </TableRow>
                  )
               }
                
            })}
         </TableBody>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{  zIndex: 1 }}
         >
            <Box className={classes.box1}  >
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
               <ModelAddFAQ />
            </Box>
         </Modal>
         </Table>
      </TableContainer>
       
      </>
   );
}
