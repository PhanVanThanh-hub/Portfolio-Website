import React from 'react';
 
import avater1 from '../sun.png';
 
function Image() {
   
   return (
      <div style={{clipPath:"polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
               backgroundColor:"#59b256",height:"100%"}}>
         <img src={avater1} style={{height:"100%",width:"100%"}}/>
      </div>
   );
}

export default Image;
