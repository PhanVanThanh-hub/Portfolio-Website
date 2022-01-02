import React from 'react';
 
 
import { Collapse } from '@mui/material';
function Image(props) {
   const {checked} = props
   
   return (
      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
         <div style={{clipPath:"circle(40% at 50% 50%)",
                  backgroundColor:"#59b256" }}>
            <img src={props.avatar1} alt="" style={{height:"60%",width:"60%",marginLeft: "auto",marginRight: "auto",display: "block"}}/>
         </div>
      </Collapse>
   );
}

export default Image;
