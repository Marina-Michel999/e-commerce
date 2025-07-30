import React from 'react'
import ProductRating from '../ProuductRating/ProductRating'
import { useContext } from 'react'
import { wishListContext } from '../../context/WishlistContext'
import { CartContext } from '../../context/CartContext';

export default function WishListItem({price , imageCover , ratingsAverage ,title ,category , id ,priceAfterDiscount}) {
  const {handleDeleteWishListElement } = useContext(wishListContext);
  const {handleAddProductToCart } = useContext(CartContext);
  

  return (
    <>
          <div  className=" cart-item flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center">
              <div className='flex  gap-3 items-center py-3'>
              <img src={imageCover} className='size-24 object-cover rounded-xl'/>
              <div className='space-y-1'>
                <p className='font-bold text-xl line-clamp-1'>{title}</p>
                <p className='text-gray-500 text-sm '>{category}</p>
                 <div className='space-x-2'>                                    
                  <span className='text-mainColor font-bold'>{price} EGP</span>
                  {priceAfterDiscount?
                  <del className='text-sm text-gray-500'>{priceAfterDiscount} EGP</del>
                  :
                  ''
                }
                <div className='*:text-ratindColor stars'>
                    <ProductRating ratingAmount={ratingsAverage}/>
                </div>
                </div>
              </div>
              </div>


            <div className='flex gap-3 items-center justify-between'>
            <button className='btn hover:bg-mainColor hover:text-white bg-transparent font-light text-lg border border-mainColor text-mainColor'
            onClick={()=>{
                handleAddProductToCart({id})
            }}
            >Add to cart</button>

              <button 
              className='text-red-500 text-2xl cursor-pointer hover:text-red-700'
              onClick={()=>{
                handleDeleteWishListElement({id})
              }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>    
    </>
  )
}
