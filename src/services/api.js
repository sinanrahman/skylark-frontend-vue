import axios from "axios";

const api = axios.create({
    baseURL: "https://skylark-backend-4pfl.onrender.com/api",
    withCredentials: true
})

export default api;