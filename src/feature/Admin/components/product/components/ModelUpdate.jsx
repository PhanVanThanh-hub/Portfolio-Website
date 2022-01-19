import  React from 'react';
 
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputField from '../../../../../components/form-control/InputField/index';
import SelectChip from '../../../../../components/form-control/SelectField/SelectCustom';
import productApi from '../../../../../api/productApi';
import Swal from 'sweetalert2';
import Product from '../../../../home/components/productList/components/Product';
import {reloadPage} from '../ProductSlice';
import {useDispatch } from 'react-redux';
export default function ModelUpdate(props) {
   const {data} =props
 

   const form = useForm({
         defaultValue: {
            name: "",
            tech: "",
            des:"",
            frontend:"",
            backend:""
         },
        
   });
   const dispatch = useDispatch();
   const handleSubmit = (values) => {
      if(!!values.name===false &&    !!values.tech===false &&
         !!values.des===false &&    !!values.frontend===false &&
         !!values.backend===false)
      {
         Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Bạn chưa thay đổi bất kì thông tin gì',   
         })
      }
      else{
         update(values)
      }
   }
   const update =async(values)=>{
      values["slug"]=data.slug
      const response = await productApi.updateProduct(values);
      if(response.data.message==="Done"){
         const actions = reloadPage()
         dispatch(actions)
         Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Cập nhật mô tả thành công',   
            })
      }
        
   }
   return (
      <Grid container  spacing={3}>
         <Grid item xs={6}>
            <Product product={data}/>
         </Grid>
         <Grid item xs={6}>
            <form initialvalues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <SelectChip tech={data.name_product} form={form} name="tech" label="Tech" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="des" label="Description" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="frontend" label="Frontend" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="backend" label="Backend" />
                  </Grid>
                  
                  <Grid item xs={12} md={6} sx={{width:"50%"}}>
                     <Button type="primary" shape="round"  
                        sx={{ width: "100%",borderRadius:"35px",
                        background: "linear-gradient(90deg, #0162c8, #55e7fc)"}}
                     >
                        <Typography sx={{color:"white",fontWeight:"bold"}}>Update</Typography> 
                     </Button>
                  </Grid>
               </Grid>
                
            </form>
         </Grid>
      </Grid>
   );
}
