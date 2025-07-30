import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Loading from '../Loading/Loading'
import { createOrder } from '../../services/payment-services'
export default function CheckOut() {
    const {cartInfo , isLoading , setCartInfo} =useContext(CartContext)
    const navigate = useNavigate();
    const validationSchema = yup.object({
        paymentMethod:yup.string().required('payment method is required'),
        shippingAddress:yup.object({
            phone:yup.string().required('phone is requried').matches(/^(\+2)?01[0125][0-9]{8}$/ , 'phone is invalide'),
            details:yup.string().required('address is required'),
            city:yup.string().required('city is required'),

        })
    })

    async function handleCreatingOrders(values) {
        try {
            const response = await createOrder({cartId , paymentMethod:values.paymentMethod , shippingAddress:values.shippingAddress})
            if (response.success) {
                if (response.data.data.session) {
                    location.href = response.data.data.session.url
                }else{
                    navigate('/order')
                    setCartInfo({})
                }
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    const formik = useFormik({
        initialValues:{
            paymentMethod:"online",
            shippingAddress:{
                details: "",
                phone: "",
                city: ""
        }
        },
        validationSchema,
        onSubmit:handleCreatingOrders
    })
    if (isLoading) {
        return(
            <>
                <div className='flex justify-center items-center min-h-96'>
                    <Loading/>
                </div>
            </>
        ) 
    }
    const {cartId  , data  } = cartInfo;
    const { totalCartPrice , products  } = data;
    const tax = Math.trunc(totalCartPrice*(10/100))

    console.log(formik)
  return (
    <>
    <section className='py-32'>
        <div className="container mx-auto py-10">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='w-[95%] sm:w-[90%] mx-auto '>
                    <div className="title text-mainColor text-3xl py-3 ">checkout</div>
                    <div className=' gap-3 flex flex-col md:flex-row  '>
                        <div className='lg:flex-2/3 md:flex-1/2  w-full shadow-xl p-5 rounded-md'>
                            <div  className='py-5 space-y-5'>
                                <div className='space-y-5'>
                                    <p className='text-xl font-bold py-3'>payment method</p>
                                    <div className='space-y-7'>
                                        <label htmlFor='payCach' className='flex items-center gap-2 text-xl p-3 border border-mainColor/40 rounded-md'>
                                            <input 
                                            type='radio' 
                                            id='payCach' 
                                            name='payment'
                                            value={'cash'}
                                            onChange={(e)=>{
                                                formik.setFieldValue('paymentMethod' , e.target.value)
                                            }}
                                            />
                                            <i className="fa-solid fa-money-bill-1-wave text-3xl text-mainColor "></i>
                                            <span >cach payment</span>
                                        </label>
                                        <label htmlFor='payCach' className='flex items-center gap-2 text-xl p-3 border border-mainColor/40 rounded-md'>
                                                <input 
                                                type='radio' 
                                                id='payCach' 
                                                name='payment'
                                                value={'online'}
                                                onChange={(e)=>{
                                                formik.setFieldValue('paymentMethod' , e.target.value)
                                            }}

                                                />
                                                <i className="fa-solid fa-credit-card text-3xl text-mainColor "></i>
                                                <span >online payment</span>
                                        </label>
                                    </div>
                                </div>

                                <div className='space-y-5 py-5'>
                                    <p className='text-xl font-bold'>personal details</p>
                                    <div className='space-y-3 py-2'>
                                        <div className='flex flex-col gap-1.5'>
                                            <label htmlFor='details' className='text-lg'>address</label>
                                            <input 
                                            type='text' 
                                            id='details' 
                                            className='border w-full border-mainColor/40 p-2.5 rounded-md outline-0'
                                            name='shippingAddress.details'
                                            value={formik.values.shippingAddress.details}
                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}

                                            />
                                            {formik.touched.shippingAddress?.details && formik.errors.shippingAddress?.details ? <p className='text-red-600'>{formik.errors.shippingAddress.details}</p> :''}

                                        </div>
                                        <div className='flex flex-col gap-1.5'>
                                            <label htmlFor='phone' className='text-lg'>phone</label>
                                            <input 
                                            type='text' 
                                            id='phone' 
                                            className='border w-full border-mainColor/40 p-2.5 rounded-md outline-0'
                                            name='shippingAddress.phone'
                                            value={formik.values.shippingAddress.phone}
                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}

                                            />
                                            {formik.touched.shippingAddress?.phone && formik.errors.shippingAddress?.phone && <p className='text-red-600'>{formik.errors.shippingAddress.phone}</p>}

                                        </div>
                                        <div className='flex flex-col gap-1.5'>
                                            <label htmlFor='city' className='text-lg'>city</label>
                                            <input 
                                            type='text' 
                                            id='city' 
                                            className='border w-full border-mainColor/40 p-2.5 rounded-md outline-0'
                                            name='shippingAddress.city'
                                            value={formik.values.shippingAddress.city}
                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                        
                                            />
                                            {formik.touched.shippingAddress?.city && formik.errors.shippingAddress?.city ? <p className='text-red-600'>{formik.errors.shippingAddress.city}</p>:''}

                                        </div>
                                    </div>
                
                                </div>
                        
    

                            </div>
                        </div>
                        <div className='lg:flex-1/3 md:flex-1/2 shadow-xl p-5'>
                            <p className='text-2xl'>order summery</p>
                            <div className=''>
                                <div className='max-h-80 overflow-auto'>
                                {products.map((product)=>(
                                <div key={product._id} className=" cart-item flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center w-full ">
                                    <div className='flex  gap-3 items-center py-3  w-full'>
                                        <img src={product.product.imageCover} className='size-16 object-cover rounded-xl'/>
                                        <div className='space-y-1 w-full'>
                                            <p className='font-bold line-clamp-1'>{product.product.title}</p>
                                            <div className='flex justify-between items-center'>
                                                <p className='text-gray-500 text-sm '>Quantity: {product.count}</p>
                                                <span className='text-mainColor font-bold text-sm'> {product.price} EGP</span>
    
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                ))}
                                </div>

    
                                <div className='bg-gray-500/20 h-0.5 w-full'></div>
                                <div className='py-5 space-y-1.5'>
                                    <div className='flex justify-between items-center '>
                                    <p className='text-gray-500 text-lg'>subtotal</p>
                                    <p className='text-lg'>{totalCartPrice} EGP</p>
                                    </div>
                                    <div className='flex justify-between items-center '>
                                    <p className='text-gray-500 text-lg'>delivery</p>
                                    <p className='text-lg'>80 EGP</p>
                                    </div>
                                    <div className='flex justify-between items-center '>
                                    <p className='text-gray-500 text-lg'>tax</p>
                                    <p className='text-lg'>{tax} EGP</p>
                                    </div>
                                  
                                </div>
                                <div className='bg-gray-500/20 h-0.5 w-full '></div>
                                    <div className='flex justify-between items-center py-4 '>
                                        <p className=' font-bold text-lg'>Total</p>
                                        <p className='text-lg font-bold'>{totalCartPrice + 80 + tax} EGP</p>
                                    </div>
                                    <div className='py-5 space-y-2'>
                                        <button 
                                        type='submit'  
                                        className='btn bg-mainColor text-white font-light w-full text-lg hover:bg-fuchsia-700 '
                                        onClick={()=>{
                                            console.log('submit btn')
                                        }}
                                        >proceed to payment</button>
                                        <Link to={'/cart'} className='btn  text-mainColor bg-transparent font-light w-full text-lg border border-mainColor hover:bg-mainColor hover:text-white'>return to cart</Link>

                                        
                                    </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
 
    </section>
    </>
  )
}
