
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";

const introApi = {
      async updateIntro(params) {
         const newParams = { ...params }
       
         const accessToken = localStorage.getItem(StorageKeys.access)
         const url = `update-profile/`;
 
      
         const response = await axiosClient.post(url,newParams, {
                
               headers: {
                  Authorization: `Bearer ${accessToken}`
               }
         }); 
 
         return response
      },
      async updateRole(params) {
         const newParams = { ...params }
         console.log("newOarnmar:",newParams)
         const accessToken = localStorage.getItem(StorageKeys.access)
         const url = `update-role/`;
 
      
         const response = await axiosClient.post(url,newParams, {
                
               headers: {
                  Authorization: `Bearer ${accessToken}`
               }
         }); 
 
         return response
      },
      async getAvatar(){
            const accessToken = localStorage.getItem(StorageKeys.access)
            const url = `getAvatar/`;
     
      
            const response = await axiosClient.get(url, {
                
               headers: {
                  Authorization: `Bearer ${accessToken}`
               }
         }); 
         
         return response
      }
     
    
}

export default introApi