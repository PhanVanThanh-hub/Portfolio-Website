import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Content from './Content';
import  react from '../../../../../static/image/ido/logo192.png';
import  django from '../../../../../static/image/ido/django.png';
import  python from '../../../../../static/image/ido/python.png';
import Content900px from './Content900px';
import { useMediaQuery,} from "@mui/material";
const useStyles = makeStyles({

    
});
const data=[
   {image :react,tech:"React",detail:"I use redux, redux-toolkit to manage states and fetch api actions, use axios to fetch api. Also, I use react-hook-form, react-router-dom… and many other tools. Use Mui-v5 in creating Reactjs interfaces."},
   {image :django,tech:"Django",detail:"I have experience working with Django Rest Framework while writing backends for websites that I do. I know how to use JWT in Django, database with sqlite3, SQL. Know how to use channels"},
   {image:python ,tech:"Python",detail:"I can use the Beautiful Soup package and the Selenium library to crawl the data. Using python to work with excel"}
]
function ListContent() {
   const classes = useStyles()
   const largeScreen = useMediaQuery('(min-width:480px)');
   const largeScreen1 = useMediaQuery('(min-width:900px)');
   return (
      <div>
         <Grid container direction={largeScreen?"row":"column"}  sx={{ position: "relative",overflow:"hidden"}} 
             spacing={1} alignItems="center" justifyContent="center"
         >  
            {
               !largeScreen1?
                  <>
                  {
                        data.map(detail=> 
                           <Grid item xs={4}  >
                              <Content900px data={detail}/>
                           </Grid>
                        )
                     }
                 
                  </>
               :
                  <>
                     {
                        data.map(detail=> 
                           <Grid item xs={4}  >
                              <Content data={detail}/>
                           </Grid>
                        )
                     }
                  </>
            }
             
         
         </Grid>
      </div>
   );
}

export default ListContent;
