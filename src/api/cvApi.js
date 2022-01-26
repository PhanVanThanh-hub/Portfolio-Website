
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
    
}

export default cvApi