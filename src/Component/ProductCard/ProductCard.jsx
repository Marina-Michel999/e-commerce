import React, { useContext } from 'react'
import { calcAfterDicount } from '../../utils/calcDiscout';
import ProductRating from '../ProuductRating/ProductRating';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { WishListContext } from '../../context/WishlistContext';

export default function ProductCard({productInfo}) {
    const {
        imageCover ,
        price ,
        priceAfterDiscount ,
        ratingsAverage ,
        ratingsQuantity ,
        title,
        category,
        id
} = productInfo;

const {handleAddProductToCart} = useContext(CartContext)
const {handleAddProductTowishList , idWishListArray ,wishListKey} = useContext(WishListContext)
const idListLocalStorage = localStorage.getItem(wishListKey)
  return (
    <>
                <div className="card shadow-md hover:shadow-lg hover:shadow-mainColor transition-shadow duration-300 overflow-hidden relative">
                    <div className='flex justify-center'>
                        <Link to={`product/${id}`}>
                            <img
                                src={imageCover}
                                className='h-50 mx-auto w-45 object-cover'
                            />                            
                        </Link>

                    </div>
                    <div className="content p-4 space-y-3">
                        <div className='space-y-2'>
                            <span className='text-sm text-gray-500'>{category.name}</span>
                            <h2 className='font-semibold'>
                                <Link to={`product/${id}`}>
                                    {title}                                
                                </Link>
                            </h2>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='*:text-ratindColor stars'>
                                <ProductRating ratingAmount={ratingsAverage}/>
                            </div>                 
                            <span>{ratingsAverage}</span>
                            <span>({ratingsQuantity})</span>
                        </div>
                        <div className='flex justify-between items-center pb-2'>
                            <div className="price space-x-3">
                                {priceAfterDiscount
                                ?<span className='text-mainColor font-bold'>{priceAfterDiscount} EGP</span>
                                :<span className='text-mainColor font-bold'>{price} EGP</span>
                                }
                                {priceAfterDiscount
                                ?<del className='text-sm text-gray-500'>{price} EGP</del>
                                :""
                            }
                            </div>
                            <button 
                            className='btn p-0 size-8 text-white rounded-full bg-mainColor hover:bg-fuchsia-600 transition-colors duration-200'
                            onClick={()=>{
                                handleAddProductToCart({id})
                            }}
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>

                        </div>

                    </div>
                    <div className="actions absolute flex flex-col gap-3 top-4 right-4 text-gray-500 *:cursor-pointer *:text-lg *:hover:text-mainColor *:transition-colors *:duration-200">
                        <i 
                        className={` fa-heart ${idWishListArray?.includes(id) || idListLocalStorage?.includes(id)?"fa-solid text-red-500":"fa-regular"}`}
                        onClick={()=>{
                            handleAddProductTowishList({id})
                            console.log(idWishListArray)
                        }}
                        ></i>
                        <i className="fa-solid fa-code-compare"></i>
                        <Link to={`product/${id}`}>
                            <i className="fa-regular fa-eye"></i>

                        </Link>
                    </div>
                    {priceAfterDiscount 
                    ?<span className='absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md'>{calcAfterDicount({ priceAfterDiscount , price})}%</span>
                    :""                    
                }
                </div>
    </>
  )
}
