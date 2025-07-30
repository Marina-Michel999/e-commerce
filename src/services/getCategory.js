import { apiClient } from "./api-client"


export async function getCategories() {
    try {
    const options = {
        url:'/categories',
        method:'Get'
    }
    const response = await apiClient.request(options);
    return response
    } catch (error) {
        console.log(error);
        throw error;
        
    }

}