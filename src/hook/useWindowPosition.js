import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
   const [animation, setAnimation] = useState(false);
   
   let index=1
   if(id==="information"){
      index=2
   }else if(id==="about"){
      index=3
   }
   else if(id==="contact"){
      index=4
   }
   else if(id==="product"){
      index=5
   }
   useLayoutEffect(() => {
      function updatePosition() {
         const offetSetHeight = window.document.getElementById(id).offsetHeight *index;
         const borderOverflow =window.document.getElementById(id).offsetHeight  + offetSetHeight ;
         const border =borderOverflow - window.document.getElementById(id).offsetHeight;
         console.log("id ",id,':',border,':',borderOverflow )
         if (window.pageYOffset > border * 0.5 && window.pageYOffset < borderOverflow) {
            setAnimation(true);
         }
         else{
            setAnimation(false);
         }
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
   }, [id]);
   return animation;
}