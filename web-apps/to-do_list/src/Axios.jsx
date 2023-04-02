import axios from "axios";
import React from "react";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  headers:{
    Authorization:"Token "+ localStorage.getItem("token")
  }
});