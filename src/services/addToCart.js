import { apiClient } from "./api-client"

export async function addProductToCart({id}) {
    try {
    const options = {
        url:'/cart',
        method:'POST',
       
        data:{            
                productId: id            
        }
    }
    
    const response = await apiClient.request(options);
    return response       
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function getProductFromCart() {
    try {
    const options = {
        url:'/cart',
        method:'GET',
    }
    
    const response = await apiClient.request(options);
    return response       
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function deleteCartItem({id}) {
    try {
        const options = {
            url:`/cart/${id}`,
            method:'DELETE'
        }
        const response = await apiClient.request(options);
        return response
    } catch (error) {
        console.log(error)
    }
}

export async function UpdateCountInCart({id , count}) {
     try {
        const options = {
            url:`/cart/${id}`,
            method:'PUT',
            data:{
                count
            }
        }
        const response = await apiClient.request(options);
        return response
    } catch (error) {
        console.log(error)
    }
}