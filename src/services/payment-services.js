import { jwtDecode } from "jwt-decode";
import { apiClient } from "./api-client"

export async function createOrder({paymentMethod , cartId , shippingAddress}) {
    try {
        const options = {
            method:'POST',
            url:'',
            data:{
                shippingAddress
            }

        }
        if(paymentMethod === 'cash'){
        options.url = `orders/${cartId}`
        }else if (paymentMethod === 'online') {
            options.url =`orders/checkout-session/${cartId}?url=${location.origin}`
        }
        const response = apiClient.request(options);
        return response
    } catch (error) {
        console.log(error)
    }
}

export async function getOrders(token) {
    const {id} = jwtDecode(token)
    try {
        const options = {
            method:'GET',
            url:`/orders/user/${id}`,
           
        }
        const response = apiClient.request(options);
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}