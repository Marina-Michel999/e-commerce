import React from 'react'
import logoImg from '../../assets/shopinity_logo.png'

export default function Footer() {
  return (
    <>
      <div className='shadow-3xl bg-gray-200 py-5'>
        <div className="container mx-auto flex flex-col px-5 sm:px-2  sm:flex-row gap-3 text-gray-500">
          <div className='sm:flex-2/5 flex-1/2 space-y-5'>
            <img src={logoImg} className='w-[100px]'/>
            <p className='text-gray-500'>Shopinity is a modern e-commerce store that offers quality products, fast delivery, and a seamless shopping experience.</p>
            <div className='*:text-lg flex gap-3 '>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-square-instagram"></i>
            </div>
          </div>
          <div className='sm:flex-1/5 flex-1/2 space-y-3'>
            <p className='font-bold text-lg'>Categories</p>
            <ul className='space-y-2'>
              <li>men's fasions</li>
              <li>women's fasions</li>
              <li>music</li>
              <li>electronics</li>
              <li>home</li>
              <li>mobiles</li>
            </ul>
          </div>
          <div className='sm:flex-1/5 flex-1/2'>
            <p className='font-bold text-lg'>Quick links</p>
            <ul className='space-y-2'>
              <li>about us</li>
              <li>contact us</li>
              <li>music</li>
              <li>terms of sevice</li>
              <li>shipping policy</li>
            </ul>          
          </div>
          <div className='sm:flex-1/5 flex-1/2'>
            <p className='font-bold text-lg'>Customer service</p>
            <ul className='space-y-2'>
              <li>my cart</li>
              <li>my wishList</li>
              <li>my Account</li>
              <li>help center</li>
            </ul>                 
          </div>

        </div>
      </div>
    </>
  )
}
