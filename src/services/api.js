import axios from "axios";

const api = axios.create({
    baseURL: "http://webliq.ap-1.evennode.com/",
    withCredentials: true
})

export default api;