import React, { useContext } from 'react'
import ProductRating from '../ProuductRating/ProductRating'
import { CartContext } from '../../context/CartContext'


export default function CartItem({count , price , imageCover , ratingsAverage ,title ,category , id}) {
    const {handleDeleteElement , handleCountCart} = useContext(CartContext)
  return (
    <>
          <div  className='bg-gray-500/20 h-0.5 w-full'></div>
          <div className=" cart-item flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center">
            <div className='flex  gap-3 items-center py-3'>
              <img src={imageCover} className='size-24 object-cover rounded-xl'/>
              <div className='space-y-1'>
                <p className='font-bold text-xl line-clamp-2'>{title}</p>
                <p className='text-gray-500 text-sm '>{category}</p>
                 <div className='space-x-2'>                                    
                  <span className='text-mainColor font-bold'>{price} EGP</span>
                  <del className='text-sm text-gray-500'>300 EGP</del>
                </div>
                    <div className='*:text-ratindColor stars'>
                        <ProductRating ratingAmount={ratingsAverage}/>
                    </div>
              </div>
            </div>
            <div className='flex gap-3 items-center justify-between'>
              <div className='px-4 py-1 border border-mainColor/20 rounded-md flex justify-between items-center space-x-4 *:text-lg '>
                <button
                onClick={()=>{
                  handleCountCart({id , count:count + 1})
                }}
                ><i className="fa-regular fa-square-plus hover:text-mainColor"
                ></i></button>
                <p>{count}</p>
                <button
                  onClick={()=>{
                  handleCountCart({id , count:count - 1})
                }}
                ><i className="fa-regular fa-square-minus hover:text-mainColor"></i></button>
              </div>
              <button 
                className='text-red-500 text-lg cursor-pointer hover:text-red-700'
                onClick={()=>{
                    handleDeleteElement({id})
                }}
                >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>    
    </>
  )
}
