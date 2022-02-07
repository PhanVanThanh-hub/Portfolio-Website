import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Content900px(props) {
   const {data} = props
   return (
      <Card sx={{width:"100%"}}>
         <CardMedia
         component="img"
         height="100%"
         src={data.image}
         alt="green iguana"
         />
         <CardContent sx={{    height:"200px"}}>
         <Typography gutterBottom variant="h5" component="div">
            {data.tech}
         </Typography>
         <Typography variant="body2" color="text.secondary">
            {data.detail}
         </Typography>
         </CardContent>
          
      </Card>
   );
}
