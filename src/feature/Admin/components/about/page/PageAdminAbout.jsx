import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Confirm from '../components/Confirm';
import Edit from '../components/Edit';
 
export default function PageAdminAbout(props) {
   const [open, setOpen] = useState(false);
   const [value,setValue] = useState("")
   const handleClose = () => setOpen(false);
   const [image,setImage] =useState();
   const changeValue =(data)=>{
      setValue(data)
   }
   const openModel =(data)=>{
      setOpen(data)
   }
   const changeImage =(data)=>{
      setImage(data)
   }
    
   return (
      <Box  display="flex" justifyContent="center" sx={{alignItems: "center",height:"100%" }}>
         
         <Paper elevation={3} sx={{width:"50%",padding:"16px",margin:"30px",height:"50%",borderRadius:"12px"}}> 
            <Edit  changeValue={changeValue} openModel={openModel} changeImage={changeImage}/>
         </Paper>
        
          
        
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{  zIndex: 1 }}
         >
            <Confirm image={!!image ? image : props.imageDefault } value={value}/>
         </Modal>
          
      </Box>
     
   );
}
 
