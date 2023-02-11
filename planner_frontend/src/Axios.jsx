import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  headers : {
    "Content-Type": "application/json",
  }
});