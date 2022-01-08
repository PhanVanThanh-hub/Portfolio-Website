import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";
const productApi = {
   async getAll() {
        
      const response = await axiosClient.get('get-product/')
      return response;
   },
   async getTechAll() {
        
      const response = await axiosClient.get('get-tech/')
      return response;
   },
   get(id) {
      const url = `/products/${id}/`;
      return axiosClient.get(url);
   },
   async updateProduct(params) {
      const newParams = { ...params }
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `update-product/`;
      const response = await axiosClient.post(url,newParams, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }); 

      return response
   },
   async deleteProduct(params) {
      const newParams = { ...params }
      const accessToken = localStorage.getItem(StorageKeys.access)
      const url = `delete-product/`;

      console.log("delete:",newParams)
      const response = await axiosClient.post(url,newParams, {
             
            headers: {
               Authorization: `Bearer ${accessToken}`,
            }
      }); 

      return response
   },

}

export default productApi