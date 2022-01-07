import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 
function Product(props) {
   const {product} = props
   const tech=[]
   product.name_product.map((data)=>(
      tech.push(data)
   ))
   return (
       
      <Card sx={{ maxWidth: 345,height:"500px" ,overflow:"hidden",background:"rgba(97, 93, 95, 0.45)"}}>
         <Card sx={{height:"200px" }}>
            <CardMedia
               sx={{width:"100%",transition: "all 10s ease",zIndex:"-1",'&:hover':{
                  transform: "translateY(-100%)" 
               }}}
               component="img"
               src={product.image}
               alt="Paella dish"
            />
         </Card>
         <CardHeader
         title={product.name}
         subheader={tech}
         />
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
                     product.frontend ? 
                     <>
                        <Typography variant="body2" color="text.secondary">
                           FrontEnd:<a href={product.frontend} target="_blank">{product.frontend} </a> 
                        </Typography>
                     </>
                     :
                     <></>
                  }
                  {
                     product.backend ? 
                     <>
                        <Typography variant="body2" color="text.secondary">
                           FrontEnd:<a href={product.frontend} target="_blank">{product.frontend} </a> 
                        </Typography>
                     </>
                     :
                     <></>
                  }
               </Grid>
            </Grid>
         </CardContent>
      </Card>

   );
}

export default Product;