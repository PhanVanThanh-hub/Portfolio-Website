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
   

}

export default faqApi