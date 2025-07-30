import { apiClient } from "./api-client"


export async function getBrands() {
    try {
    const options = {
        url:'/brands',
        method:'Get'
    }
    const response = await apiClient.request(options);
    return response
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}