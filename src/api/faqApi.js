import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";
 
const faqApi = {
   async getAll(params) {
      var qs = require('qs');
      const response = await axiosClient.get('faqViewSet/', {
         params: {
            ...params,
         },
         paramsSerializer:  (params) => {
            return qs.stringify(params, { arrayFormat: 'repeat' })
         },
      })
      return {
          ...response,
           
      }
   },
   async getAllAdmin() {
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `get-faqViewSet/`;
      const response = await axiosClient.get(url, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }); 

      return response
   },
   addFAQparams(params) {
       
      const newParams = {...params}
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `get-faqViewSet/`;
      const response =  axiosClient.post(url,newParams, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }).catch((error) => {
      
         return false
     }); 

      return response
   },
   remove(id) {
      const url = `/get-faqViewSet/${id}/`;
      const accessToken = localStorage.getItem(StorageKeys.access)
      const response =  axiosClient.delete(url, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }).catch((error) => {
      
         return false
     }); 

      return response
   },
   update(params) {
      const newParams = {...params}
      const url = `/get-faqViewSet/${params.id}/`;

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

export default faqApi