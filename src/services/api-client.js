import axios from "axios";
import { config_url  } from "../config";
export const apiClient = axios.create({
    baseURL:config_url.baseUrl,
    timeout:30000,
})

apiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }
    return config

})

apiClient.interceptors.response.use((response)=>{
    return Promise.resolve({
        success:true,
        data:response
    })
}, (error)=>{
    return Promise.reject({
        success:false,
        error:error,
        message:error.response.data.message
    })
})