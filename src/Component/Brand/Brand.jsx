import React from 'react'
import { getBrands } from '../../services/getBrands';
import { useState , useEffect } from 'react';
import Loading from '../Loading/Loading';

export default function Brand() {
      const [brands , setBrands] = useState(null);
      const [isLoadind , setIsLoadind] = useState(true);
      const [isError , setIsError] = useState(false);
      const [error , setError] = useState(null);
  
  
      async function fetchBrands() {
          setIsLoadind(true)
          try {
          const response = await getBrands()
          if (response.success) {
            console.log(response)
              setBrands(response.data.data.data);
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
      fetchBrands()
      },[])
      if (isLoadind) {
        return (
                <>
                <div className='min-h-[700px] flex justify-center'>
                  <Loading/>
                </div>
                </>
        )
      }
  return (
    <>
      <div className="container mx-auto py-32">
               <p className='text-3xl px-10'>our brands</p>
               <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-8 '>
                    {brands.map((brand)=>(
                    <div 
                    key={brand._id} 
                    className="card shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-center gap-3 p-4 bg-white cursor-pointer"
                    >
                    
                        <img className='size-16 rounded-full object-cover' src={brand.image}/>
                        <h2>{brand.name}</h2>
                    </div>                       
                    ))}

                </div>
      </div>
    </>
  )
}
