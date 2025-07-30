import React from 'react'
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/product-services'
import Loading from '../Loading/Loading';
import RelatedProduct from '../RelatedProduct/RelatedProduct'


export default function ProductDetails() {
    const [productDetails , setProductDetails] = useState();
    const [isLoadind , setIsLoadind] = useState(true); 

    const {id} = useParams();
    
    async function fetchProduct(){
        try {
        setIsLoadind(true)
        const response = await getProductById({id});
        if (response.success) {
            setProductDetails(response.data.data.data)
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
    <ProductDetailsCard productDetails={productDetails}/>
    <RelatedProduct productDetails={productDetails}/>
    </>
  )
}

