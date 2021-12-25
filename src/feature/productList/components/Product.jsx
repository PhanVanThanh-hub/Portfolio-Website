import React from 'react';

 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
 
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 
function Product(props) {
   const {product} = props
   return (
      <Card sx={{ maxWidth: 345,height:"500px" ,overflow:"hidden"}}>
         <CardHeader
         title={product.name}
         subheader={product.techUse}
         />
         <Card sx={{height:"180px" }}>
            <CardMedia
               sx={{width:"100%",transition: "all 10s ease",zIndex:"-1",'&:hover':{
                  transform: "translateY(-100%)" 
               }}}
               component="img"
               src={product.img}
               alt="Paella dish"
            />
         </Card>
          
         <CardContent>
            <Grid container spacing={1}>
               <Grid item xs={12}>
                  <Typography variant="body2" sx={{fontWeight:"700"}} color="text.secondary">
                     {product.des} 
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                        Github:
                  </Typography>
                  {
                     product.link1 ? 
                     <>
                        <Typography variant="body2" color="text.secondary">
                           FrontEnd:<a href={product.link} target="_blank">{product.link} </a> 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           BackEnd:<a href={product.link1} target="_blank">{product.link} </a> 
                        </Typography>
                     </>
                     :
                     <Typography variant="body2" color="text.secondary">
                        <a href={product.link} target="_blank">{product.link} </a> 
                     </Typography>
                  }
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   );
}

export default Product;