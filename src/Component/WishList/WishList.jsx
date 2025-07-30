import React, { useContext } from 'react'
import { WishListContext } from '../../context/WishlistContext'
import Loading from '../Loading/Loading'
import ProductRating from '../ProuductRating/ProductRating'
import WishListItem from '../WishListItem/WishListItem'

export default function WishList() {
  const {wishListInfo , isLoading , count} =useContext(WishListContext)
  if (isLoading) {
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
    <section>
      <div className="container mx-auto py-32">
      <div className='w-[95%] sm:w-[500px] md:w-[730px] lg:w-[950px]  sm mx-auto py-8 px-5 sm:p-10 shadow-2xl my-14'>
        <div className='space-y-2'>
          <div  className='font-bold text-2xl space-x-2'>
            <i className="fa-regular fa-heart text-red-500"></i>            
            <span> wish list</span>

          </div>
          <p className='text-gray-500 text-sm'>{count?count:0} items</p>
          <div className='bg-gray-500/20 h-0.5 w-full'></div>
          {wishListInfo.map((product)=>(
            <WishListItem
            key={product.id}
            price={product.price}
            imageCover={product.imageCover}
            ratingsAverage={product.ratingsAverage}
            title={product.title}
            category={product.category?.name}
            id={product.id}
            priceAfterDiscount={product.priceAfterDiscount}
            />

          ))}

        </div>
      </div>
      </div>

    </section>
    </>
  )
}
  