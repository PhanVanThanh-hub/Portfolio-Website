import React from 'react';
 
import avater1 from '../../../../../static/image/intro/sun.png';
import { Collapse } from '@mui/material';
function Image(props) {
   const {checked} = props
   return (
      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
         <div style={{clipPath:"polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
                  backgroundColor:"#59b256",height:"100%"}}>
            <img src={avater1} style={{height:"100%",width:"100%"}}/>
         </div>
      </Collapse>
   );
}

export default Image;
