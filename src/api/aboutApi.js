
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";
 
const aboutApi = {
 
   async getAbout(){
      const url = `get-about/`;
      return axiosClient.get(url);
   },
   async updateAbout(params) {
      const newParams = { ...params }
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `update-about/`;

   
      const response = await axiosClient.post(url,newParams, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }); 

      return response
   },
}

export default aboutApi