import React from 'react';
import PageWork from './page/PageWork'; 
import image from '../../static/image/cv/background.jpg'
function CV() {
   return (
      <div style={{height:"100%",padding:"60px 200px",backgroundImage:`url(${image})`,}}>
         <PageWork/>
      </div>
   );
}

export default CV;
