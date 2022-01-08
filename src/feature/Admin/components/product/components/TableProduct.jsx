import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ModelUpdate from './ModelUpdate';
import ModelAddProduct from './ModelAddProduct';
import { makeStyles } from '@mui/styles';
import productApi from '../../../../../api/productApi';
import Swal from 'sweetalert2';
import {reloadPage,HideAddProduct} from './ProductSlice';
import {useDispatch,useSelector } from 'react-redux';
 
 
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
export default function TableProduct(props) {
   const classes = useStyles()
   const [open, setOpen] = useState(false);
   const [data,setData] = useState({});
   const handleClose = () => setOpen(false);
   const handleCloseAdd = ()=>{
      const actions = HideAddProduct();
      dispatch(actions)
   }
   const show = useSelector(state => state.product.addProduct)
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
   const deleteProduct = async(data)=>{
      const response = await productApi.deleteProduct(data);
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
               <TableCell align="center" >Image</TableCell>
               <TableCell align="left" >Name</TableCell>
               <TableCell align="left" >Tech Use</TableCell>
               <TableCell align="center" >Update</TableCell>
               <TableCell align="center" >Delete</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {props.products.map(function(product,index){
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
                        <TableCell align="center" onClick={()=>updateData(props.products[index])}><UpdateIcon/></TableCell>
                        <TableCell align="center"  onClick={()=>confirmDelete(props.products[index])}><DeleteIcon/></TableCell>
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
               <ModelAddProduct />
            </Box>
         </Modal>
         </Table>
      </TableContainer>
       
      </>
   );
}
