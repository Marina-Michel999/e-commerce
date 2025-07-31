import {Swiper} from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Pagination} from 'swiper/modules'
import "swiper/css/pagination"
import "swiper/css/navigation"
import ProductRating from '../ProuductRating/ProductRating'
import { calcAfterDicount } from '../../utils/calcDiscout'
import { CartContext } from '../../context/CartContext';
import React, { useContext } from 'react'
import { WishListContext } from '../../context/WishlistContext'




export default function ProductDetailsCard({productDetails}) {
const {handleAddProductToCart ,  handleCountCart , idWishListArray} = useContext(CartContext)
const {handleAddProductTowishList ,} = useContext(WishListContext)
const {quantity , brand ,images , priceAfterDiscount , ratingsAverage , ratingsQuantity , title ,price ,description , id , count} = productDetails;
const idListLocalStorage = localStorage.getItem('idWishList')

  console.log(productDetails)
  return (
    <>
    <section className='py-34'>
 
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row p-10 shadow-2xl md:w-5/6 md:mx-auto  my-7 mx-4 gap-4 relative">
                <div className="psroduct-slider md:w-1/3">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable:true}}
                    >
                        <SwiperSlide>
                            <img className='' src={images[0]}/>                           
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={images[1]}/>                           
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={images[2]}/>                           
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={images[3]}/>                           
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="productDtails md:w-2/3 p-5 space-y-5">
                    <div className='space-y-3'>
                        <span className={` ${quantity ? 'bg-mainColor/70' : 'bg-red-500/70' } rounded-lg text-white text-sm p-2`}>{quantity ? "in stock" :"out of stock"}</span>
                        <h2 className='text-xl font-bold'>{title}</h2>
                        <div className='gap-3 flex'>
                            <div className='*:text-ratindColor stars'>
                                <ProductRating ratingAmount={ratingsAverage}/>
                                                           
                                                                                     
                            </div>
                            <div className='space-x-2'>
                                <span className='text-gray-500 text-sm'>{ratingsAverage}</span>
                                <span className='text-gray-500 text-sm'>({ratingsQuantity})</span>
                            </div>
                        </div>
                        <div className='space-x-2'>
                    
                            <span className='text-mainColor font-bold'>{priceAfterDiscount ? priceAfterDiscount : price} EGP</span>
                            {priceAfterDiscount? <del className='text-sm text-gray-500'>{price} EGP</del> : ""}
                            {priceAfterDiscount? <span className='py-1 px-2 rounded-sm text-white bg-red-400 text-sm'>save {calcAfterDicount({price , priceAfterDiscount})}%</span> :""}
                        </div>
                    </div>
                    <div className='w-full h-0.5 bg-gray-500/20 '></div>
                    <div className='space-y-3'>
                        <p className='description text-gray-500'>{description}</p>
                        <p className='text-gray-500'><span className='text-md font-bold text-gray-700'>Brand</span> : {brand.name}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-gray-500'><span className='text-md font-bold text-gray-700'>Quantity</span> : {quantity}</p>
                            <div className='px-4 py-1 border border-mainColor/20 rounded-md flex justify-between items-center space-x-10 *:text-lg'>
                                <button
                                 onClick={()=>{
                                 handleCountCart({id , count:count + 1})
                                }}
                                ><i className="fa-regular fa-square-plus"></i></button>
                                <p>{count ? count : "1"}</p>
                                <button
                                onClick={()=>{
                                handleCountCart({id , count:count - 1})
                                }}
                                ><i className="fa-regular fa-square-minus"></i></button>
                            </div>
                        </div>
                    </div>
                    <button 
                    className='btn w-full bg-mainColor text-white text-center hover:bg-fuchsia-700 *:text-lg *:font-light space-x-2'
                    onClick={()=>{
                        handleAddProductToCart({id})
                    }}
                    >
                        <i className="fa-solid fa-cart-plus"></i>
                        <span>Add to cart</span>
                    </button>
                    <div className="actions absolute flex flex-col gap-5 top-10 right-10 text-gray-500 *:cursor-pointer  *:transition-colors *:duration-200 text-2xl">
                        <i 
                        className={` fa-heart hover:text-red-600 hover:font-bolder ${idWishListArray?.includes(id) || idListLocalStorage?.includes(id)?"fa-solid text-red-500":"fa-regular"}`}
                        onClick={()=>{
                            handleAddProductTowishList({id})
                            console.log(idWishListArray)
                        }}                        
                        ></i>
                        <i className="fa-solid fa-code-compare hover:text-mainColor"></i>
                    </div>

                </div>
            </div>
        </div>
    </section>
          
    </>
  )
}
