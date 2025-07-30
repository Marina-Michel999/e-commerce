import React from 'react'

export default function HomeFeature() {
  return (
    <>
        <ul className='*:flex *:items-center *:gap-3 grid sm:grid-cols-3 space-y-2 p-6 mx-auto '>
            <li className='flex md:justify-center'>
              <div className="icon size-12 rounded-full bg-fuchsia-100 text-lg flex justify-center items-center text-mainColor">
                <i className="fa-solid fa-star"></i>
              
              </div>
              <div className="content">
                <h3 className='font-bold'>high qualitiy</h3>
              </div>
            </li>
            <li className='flex md:justify-center'>
              <div className="icon size-12 rounded-full bg-fuchsia-100 text-lg flex justify-center items-center text-mainColor">
                  <i className="fa-solid fa-truck-fast"></i> 
              </div>
              <div className="content">
                <h3 className='font-bold'>fast delivery</h3>
              </div>
            </li>
            <li className='flex md:justify-center'>
              <div className="icon size-12 rounded-full bg-fuchsia-100 text-lg flex justify-center items-center text-mainColor">
                <i className="fa-solid fa-shield-halved"></i>              
                </div>
              <div className="content">
                <h3 className='font-bold'>secure shopping</h3>
              </div>
            </li>
          </ul>
    </>
  )
}
