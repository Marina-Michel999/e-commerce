import React, { useContext, useEffect , useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { getOrders } from '../../services/payment-services'
import Loading from '../Loading/Loading'
import ProductRating from '../ProuductRating/ProductRating'

export default function Order() {
  const {token} = useContext(AuthContext)
  const [orders , setOrders] =useState(null)

  const [isLoading , setIsLoading] =useState(true)

   async function handleGetOrder() {
    try {
      setIsLoading(true)
    const respose = await getOrders(token)
    if (respose.success) {
    console.log(respose)
    setOrders(respose.data.data)
    setIsLoading(false)
    console.log(respose.data.data)       
    }
     
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }

  }
  useEffect(()=>{
    handleGetOrder()
  },[])
  if (isLoading) {
    return(
            <>
            <div className='min-h-[700px] flex justify-center'>
              <Loading/>
            </div>
            </>
    )
  }
  console.log(orders)
  return (
    <>
        <section className='py-32 min-h-40'>
          <div className="container mx-auto">
          <div className='w-[95%] sm:w-[500px] md:w-[730px] lg:w-[950px]  sm mx-auto py-8 px-5 sm:p-10 shadow-2xl my-14'>
            <div className='space-y-2'>
              <div  className='font-bold text-2xl space-x-2'>
                <span> order List</span>
    
              </div>
              <div className='bg-gray-500/20 h-0.5 w-full'></div>
              {orders?orders.map((order)=>(
                <div>
                {
                  // setCartItem(order.cartItems)
                (order.cartItems)?.map((item)=>(
                <div  className=" relative cart-item flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center">
                    <div className='flex  gap-3 items-center py-3'>
                    <img src={item.product.imageCover} className='size-24 object-cover rounded-xl'/>
                    <div className='space-y-1'>
                      <p className='font-bold text-xl line-clamp-1'>{item.product.title}</p>
                      <p className='text-gray-500 text-sm '>{item.product.category.name}</p>
                      <div className='space-x-2'>                                    
                        <span className='text-mainColor font-bold'>{item.price} EGP</span>
                        
                      <div className='*:text-ratindColor stars'>
                          <ProductRating ratingAmount={item.product.ratingsAverage}/>
                      </div>
                      </div>

                    </div>
                    </div>
                     {
                      order.paymentMethodType === 'cash'?
                      <div className='bg-red-500 text-white text-xs px-2 py-1 w-fit rounded-lg absolute  top-1 -left-3 '>unpaid</div>
                      :
                      <div className='bg-green-300 text-white text-xs px-2 py-1 w-fit rounded-lg absolute  top-1 -left-3 '>paid</div>

                     }
                      
                      
                      

                
                </div>
                ))
                }
                </div>
              ))
              :
              <p>your order list is empty</p>
            }

 
    
            </div>
          </div>
          </div>
    
        </section>
    </>
  )
}
