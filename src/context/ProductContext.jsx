import { useState , useEffect , createContext } from "react";
import { getAllProduct } from "../services/product-services";

export const ProductContext = createContext(null)

export default function ProductProvider({children}) {

    const [products , setProducts] = useState(null)
    const [isLoadind , setIsLoadind] = useState(true) 
    const [error , setError] = useState(null)    
    const [isError , setIsError] = useState(false)  
    async function FetchProduct() {
        try {
        setIsLoadind(true)
        const response = await getAllProduct();
            if (response.success) {
            setProducts(response.data.data.data);
            setIsLoadind(false)
            
        }            
        } catch (error) {
            setIsLoadind(false)
            setIsError(true)
            setError(error)
        }
    }
   useEffect(()=>{
        FetchProduct()
    } , []);
    return <ProductContext.Provider value={{isLoadind , products , error , isError }}>
        {children}
    </ProductContext.Provider>
}
