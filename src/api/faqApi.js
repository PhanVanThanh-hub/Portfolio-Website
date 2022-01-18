import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";
const faqApi = {
   async getAll() {
        
      const response = await axiosClient.get('faqViewSet/')
      return response;
   },
   

}

export default faqApi