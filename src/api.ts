import axios from 'axios';
import router from "@/router";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "",
    withCredentials: true
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (419 === error.response.status || 403 == error.response.status) {
        router.push({name: "login"})
    } else {
        console.log("Error when doing request " + error.response.code)
    }
});