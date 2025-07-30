import { createContext , useState , useEffect } from "react";
import { getCategories } from "../services/getCategory";

export const CategoriesContext = createContext(null)

export function CategoriesProvider({children}) {
    const [categories , setCategories] = useState(null);
    const [isLoadind , setIsLoadind] = useState(true);
    const [isError , setIsError] = useState(false);
    const [error , setError] = useState(null);


    async function fetchCategories() {
        setIsLoadind(true)
        try {
        const response = await getCategories()
        if (response.success) {
            setCategories(response.data.data.data);
            setIsLoadind(false)
        }

        } catch (error) {
        setIsLoadind(false)
        setError(error)
        setIsError(true)

        console.log(error)
        }
    }

    useEffect(()=>{
    fetchCategories()
    },[])
    return <CategoriesContext value={{categories , error , isLoadind , isError}}>
    {children}
    </CategoriesContext>
}