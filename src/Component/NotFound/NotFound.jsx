import React from 'react'
import notFoundPic from '../../assets/404.jpg'

export default function NotFound() {
  return (
    <>
    <div className='mx-auto container '>
        <img src={notFoundPic} alt="" className='w-full' />
    </div>
    </>
  )
}
