import { Children, createContext, useEffect, useState } from "react";
import { addProductToCart, deleteCartItem, getProductFromCart, UpdateCountInCart } from "../services/addToCart";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const CartContext = createContext();

export default function CartProvider({children}) {
    const [cartInfo , setCartInfo] = useState({});
    const [isError , setIsError] = useState(false);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);
    async function handleAddProductToCart({id}) {
        const response = await addProductToCart({id})
        console.log(response)
        handleCartInfo()
    }
    async function handleCartInfo() {
        try {
            setIsLoading(true)
            const response = await getProductFromCart()
            if (response.success) {
                setIsLoading(false)

                setCartInfo(response.data.data)
                console.log(response)
            }            
            } catch (error) {
            setIsLoading(false)
            setIsError(true)
            setError(error)
        }

        }
    useEffect(()=>{
        handleCartInfo()
    } , [])

        async function handleDeleteElement({id}) {
        try {
            const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "delete",
            iconColor:"#d33",

            })
        console.log(result)
        if (result.isConfirmed) {
            const response = await deleteCartItem({id})
            if (response.success) {
                console.log(response)
                setCartInfo(response.data.data)
            }
        }
        } 
        
        catch (error) {
            console.log(error)
        }
    }

     async function handleCountCart({id , count}) {
        try {
        const response = await UpdateCountInCart({id , count})
        if (response.success) {
            setCartInfo(response.data.data)
        }            
        } catch (error) {
         console.log(error);
         throw error
        }

    }

    return <CartContext.Provider value={{cartInfo , isError , isLoading , error , handleAddProductToCart ,handleCartInfo , handleDeleteElement , handleCountCart , setCartInfo}}>
    {children}
    </CartContext.Provider>
}
