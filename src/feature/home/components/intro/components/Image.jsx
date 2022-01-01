import React from 'react';
 
 
import { Collapse } from '@mui/material';
function Image(props) {
   const {checked} = props
   console.log("???:",props.avatar1)
   return (
      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
         <div style={{clipPath:"circle(44.7% at 50% 50%)",
                  backgroundColor:"#59b256" }}>
            <img src={props.avatar1}  style={{height:"100%",width:"100%"}}/>
         </div>
      </Collapse>
   );
}

export default Image;
