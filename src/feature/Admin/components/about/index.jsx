import React,{useEffect,useState} from 'react';
import PageAdminAbout from './page/PageAdminAbout';
import aboutApi from '../../../../api/aboutApi';
 
export default function AdminAbout(){
   const [imageDefault,setImage] = useState()
   useEffect(() => {
      ; (async () => {
         try {
            const res = await aboutApi.getAbout()
            setImage(res.data[0].image)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   return(
      <div style={{height:"100vh",justifyContent:"center", background:"linear-gradient(90deg, rgba(72, 139, 100, 0.26), rgba(0, 139, 59, 0.51))"}}>
          
          
         <PageAdminAbout  imageDefault={imageDefault}/>
      </div>
       
   );
}
 

