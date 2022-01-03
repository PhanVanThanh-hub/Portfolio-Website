
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";

const aboutApi = {
 
   async getAbout(){
      const url = `get-about/`;
      return axiosClient.get(url);
   },
}

export default aboutApi