import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://bettercallhomeapii.somee.com",
});

export default baseUrl;
