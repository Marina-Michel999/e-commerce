import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Cart() {
  
  const {cartInfo , isLoading } = useContext(CartContext);

  if (isLoading) {
    return(
      <>
      <div className='min-h-[700px] flex justify-center'>
        <Loading/>
      </div>
      </>
    )
     
  }
  const {numOfCartItems , data} = cartInfo;
  const {products , totalCartPrice } = data
  return (
    <>
    <section>
      <div className="container mx-auto py-32 min-h-60">
      <div className='w-[95%] sm:w-[500px] md:w-[730px] lg:w-[950px]  sm mx-auto p-3 sm:p-10 shadow-2xl my-14'>
        <div className='space-y-2'>
          <div  className='text-mainColor font-bold text-2xl space-x-2'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Your cart</span>

          </div>
          <p className='text-gray-500 text-sm'>{numOfCartItems} items</p>
          {products.length > 0 
          ? products.map((product)=>{
            return <CartItem 
            key={product._id} 
            count={product.count}
            price={product.price}
            imageCover={product.product.imageCover}
            ratingsAverage={product.product.ratingsAverage}
            title={product.product.title}
            category={product.product.category.name}
            id={product.product.id}
            />
          })
          :<div className='p-5 flex justify-center items-center'>
            <p className='text-xl'>your cart is empty</p>
          </div>
        }

          <div className='bg-gray-500/20 h-0.5 w-full'></div>
          <div className='flex justify-between items-center'>
            <div className='space-x-1'>
              <span className='font-bold'>total price : </span> 
              <span>{totalCartPrice} EGP</span>
            </div>
            <Link to={'../checkOut'}>
            <button className='btn bg-mainColor hover:bg-fuchsia-700 font-light text-lg text-white'>check out</button>

            </Link>
          </div>
        </div>
      </div>
      </div>

    </section>
    </>
  )
}
