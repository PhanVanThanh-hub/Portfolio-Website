
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";
 
const cvApi = {
 
   async getCV(){
      const url = `get-cv/`;
      return axiosClient.get(url);
   },
    
}

export default cvApi