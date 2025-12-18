import axios from "axios";

const api = axios.create({
    baseURL: "https://skylark-imji.onrender.com/api",
    withCredentials: true
})

export default api;