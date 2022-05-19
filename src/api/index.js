import axios from "axios";

const instance = axios.create({
  baseURL: "https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api",
  timeout: 5000,
  headers: { Authorization: "basic 45d9c843-eaf4-4f58-b1e6-433de1d107a4" },
});

export default instance;
