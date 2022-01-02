
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
         const url = `getAvatar/`;
         return axiosClient.get(url);
      },
      async getProfile(){
         const url = `get-profile/`;
         return axiosClient.get(url);
      },
      async getRole(){
         const url = `get-role/`;
         return axiosClient.get(url);
      }
     
    
}

export default introApi