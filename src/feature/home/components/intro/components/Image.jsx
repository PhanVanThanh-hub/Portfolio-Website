import React from 'react';
 
import avater1 from '../../../../../static/image/intro/Open Peeps - Avatar.png';
import { Collapse } from '@mui/material';
function Image(props) {
   const {checked} = props
   return (
      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
         <div style={{clipPath:"circle(44.7% at 50% 50%)",
                  backgroundColor:"#59b256" }}>
            <img src={avater1}  style={{height:"100%",width:"100%"}}/>
         </div>
      </Collapse>
   );
}

export default Image;
