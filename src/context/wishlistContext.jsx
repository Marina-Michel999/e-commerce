import { createContext , useState , useEffect, useContext } from "react";
import { addProductToWishlist, deleteWishListItem, getProductFromWishlist } from "../services/addToWishList";
import Swal from 'sweetalert2'
import { AuthContext } from "./AuthContext";
import { getIdFromToken } from "../services/getIdFromToken";


export const wishListContext = createContext();

export default function WishListProvider({children}) {
    const[wishListInfo , setWishListInfo] = useState(null)
    const [isError , setIsError] = useState(false);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);
    const [idWishListArray , setIdWishListArray]=useState([])
    const [count , setCount] = useState(null)
    const {token} =useContext(AuthContext)
    let useId = null;
    if (token) {
    useId = getIdFromToken(token)
        
    }
    const wishListKey = `wishList_${useId}`
     async function handleAddProductTowishList({id}) {
            const response = await addProductToWishlist({id})
            setIdWishListArray(response.data.data.data)
                handleWishListInfo()
                const useId = getIdFromToken(token)
                const wishListKey = `wishList_${useId}`
                localStorage.setItem(wishListKey , response.data.data.data)

            return response
        }
    async function handleWishListInfo() {
        try {
            setIsLoading(true)
            const response = await getProductFromWishlist()
            if (response.success) {
                console.log(response)
                setIsLoading(false)
                setWishListInfo(response.data.data.data)
                setCount(response.data.data.count)
        
                console.log(response.data.data)
            }            
            } catch (error) {
            setIsLoading(false)
            setIsError(true)
            setError(error)
        }

        }
    useEffect(()=>{
        handleWishListInfo()
    } , [])

        async function handleDeleteWishListElement({id}) {
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
            const response = await deleteWishListItem({id})
            console.log(response)
            if (response.success) {
                console.log(wishListInfo)
                console.log(wishListInfo.data)
                const updatedList = wishListInfo.filter(item => item.id !== id)
                setWishListInfo(updatedList)

                localStorage.setItem(wishListKey , response.data.data.data)
                setCount(count-1)
            }
        }
        } 
        
        catch (error) {
            console.log(error)
        }
    }
    return <wishListContext.Provider value={{handleAddProductTowishList , wishListInfo , isLoading , isError , error ,idWishListArray ,handleDeleteWishListElement , count , wishListKey} }>
        {children}
    </wishListContext.Provider>
}