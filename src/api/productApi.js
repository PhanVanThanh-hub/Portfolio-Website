import axiosClient from "./axiosClient";

const productApi = {
   async getAll() {
        
      const response = await axiosClient.get('get-product/')
      return response;
   },

   get(id) {
      const url = `/products/${id}/`;
      return axiosClient.get(url);
   },

}

export default productApi