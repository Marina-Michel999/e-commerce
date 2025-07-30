import { apiClient } from "./api-client"

export async function getAllProduct({
    limit ,
    sort ,
    fields ,
    priceGreaterThan,
    page,
    keyword,
    brand,
    priceLte,
    categoryIn,
} = {}) {
    try {
     const option ={
        url:`/products?${limit ? `limit=${limit}`: '' }
         ${page ? `&page=${page}`: ''}${sort ? `&sort=${sort}`: '' }
         ${fields ? `&fields=${fields}`: '' }
         ${keyword ? `&keyword=${keyword}`: '' }
         ${brand ? `&brand=${brand}`: '' }
         ${priceGreaterThan ? `&price[gte]=${priceGreaterThan}`: '' }
         ${priceLte ? `&price[lte]=${priceLte}`: '' }
         ${categoryIn ? `&category[in]=${categoryIn}`: '' }`,
        method: 'GET'
     }   
    const response = await apiClient.request(option);  
    return response      
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function getProductById({id}) {
    try {
        const options ={
            url:`/products/${id}`,
            method:'GET'
        }
        const response = await apiClient.request(options);
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
}