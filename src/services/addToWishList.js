import { apiClient } from "./api-client"

export async function addProductToWishlist({id}) {
    try {
    const options = {
        url:'/wishlist',
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

export async function getProductFromWishlist() {
    try {
    const options = {
        url:'/wishlist',
        method:'GET',
    }
    
    const response = await apiClient.request(options);
    return response       
    } catch (error) {
        console.log(error)
        throw error
    }
}



export async function deleteWishListItem({id}) {
    try {
        const options = {
            url:`/wishlist/${id}`,
            method:'DELETE'
        }
        const response = await apiClient.request(options);
        return response
    } catch (error) {
        console.log(error)
    }
}