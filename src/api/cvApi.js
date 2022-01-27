
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";
 
const cvApi = {
 
   async getCV(){
      const url = `get-cv/`;
      return axiosClient.get(url);
   },
   async getEducation(){
      const url = `get-education/`;
      return axiosClient.get(url);
   },
   async getExperience(){
      const url = `get-experience/`;
      return axiosClient.get(url);
   },
   
   updateContact(params) {
      const newParams = {...params}
      const url = `/cv/${params.id}/`;

      const accessToken = localStorage.getItem(StorageKeys.access)
      const response =  axiosClient.patch(url, newParams,{
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }).catch((error) => {
      
         return false
     }); 

      return response
   },
   deleteEducation(params) {
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `education/${params.id}/`;
      const response =  axiosClient.delete(url, {
             
         headers: {
            Authorization: `Bearer ${accessToken}`
         }
         }).catch((error) => {
         
            return false
      }); 

         return response
   },
   addEducation(params) {
       
      const newParams = {...params}
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `education/`;
      const response =  axiosClient.post(url,newParams, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }).catch((error) => {
      
         return false
     }); 

      return response
   },
   updateEducation(params) {
      const newParams = {...params}
      const url = `/education/${params.id}/`;

      const accessToken = localStorage.getItem(StorageKeys.access)
      const response =  axiosClient.patch(url, newParams,{
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }).catch((error) => {
      
         return false
     }); 

      return response
   },
   deleteExperience(params) {
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `experience/${params.id}/`;
      const response =  axiosClient.delete(url, {
             
         headers: {
            Authorization: `Bearer ${accessToken}`
         }
         }).catch((error) => {
         
            return false
      }); 

         return response
   },
   addExperience(params) {
       
      const newParams = {...params}
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `experience/`;
      const response =  axiosClient.post(url,newParams, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }).catch((error) => {
      
         return false
     }); 

      return response
   },
   updateExperience(params) {
      const newParams = {...params}
      const url = `/experience/${params.id}/`;

      const accessToken = localStorage.getItem(StorageKeys.access)
      const response =  axiosClient.patch(url, newParams,{
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }).catch((error) => {
      
         return false
     }); 

      return response
   },
}

export default cvApi