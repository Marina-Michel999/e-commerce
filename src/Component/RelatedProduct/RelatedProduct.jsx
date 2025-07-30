import React from 'react'
import { useState , useEffect} from 'react'
import Loading from '../Loading/Loading';
import { getAllProduct } from '../../services/product-services';


export default function RelatedProduct({productDetails}) {
    const {category} = productDetails;
    const [relatedProduct , setRelatedProduct] = useState(null);
    const [isLoadind , setIsLoadind] = useState(true); 
    async function fetchProduct(){
        try {
        setIsLoadind(true)
        const response = await getAllProduct({categoryIn:category._id});
        if (response.success) {
            setRelatedProduct(response.data.data.data)
            setIsLoadind(false)
        }
            
        } catch (error) {
        console.log(error)
        setIsLoadind(false)
        }
    };   
    useEffect(()=>{
            fetchProduct()
        } , [])
     if (isLoadind === true){
        return <Loading/>
      }

  return (
    <>
        
    </>
  )
}
