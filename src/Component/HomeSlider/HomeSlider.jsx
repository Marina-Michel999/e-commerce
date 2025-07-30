import React from 'react'
import {Swiper} from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Navigation, Pagination , Autoplay } from 'swiper/modules'
import "swiper/css/pagination"
import "swiper/css/navigation"
import homeSliderImg_1 from '../../assets/slider-image-1.jpeg'
import homeSliderImg_2 from '../../assets/slider-image-2.jpeg'
import homeSliderImg_3 from '../../assets/slider-image-3.jpeg'




export default function HomeSlider() {
  return (
    <>
        <Swiper
        loop={true}
        // slidesPerView={2}
        modules={[Pagination, Navigation , Autoplay]}
        pagination={{clickable:true}}
        navigation={true}
        autoplay={{delay:5000}}
        >
            <SwiperSlide>
                <div style={{backgroundImage:`url("${homeSliderImg_1}")` , backgroundSize:"cover" , backgroundPosition:"center"}}>
                    <div className="overlay text-white pl-32 py-25 bg-gradient-to-r from-fuchsia-600/95 to-fuchsia-600/40">
                        <div className="container space-y-4">
                            <h2 className='text-2xl font-bold'>fresh product deliverd <br/> to your door</h2>
                            <p>get 20% offer for your frist order</p>
                            <div className='space-x-3'>
                                <button className='btn text-mainColor border-2 border-white bg-white hover:bg-transparent hover:text-white'>shop now</button>
                                <button className='btn text-white bg-transparent border-2 border-white hover:bg-white hover:text-mainColor'>view deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage:`url("${homeSliderImg_2}")` , backgroundSize:"cover" , backgroundPosition:"center"}}>
                    <div className="overlay text-white pl-32 py-25 bg-gradient-to-r from-fuchsia-600/95 to-fuchsia-600/40">
                        <div className="container space-y-4">
                            <h2 className='text-2xl font-bold'>fresh product deliverd <br/> to your door</h2>
                            <p>get 20% offer for your frist order</p>
                            <div className='space-x-3'>
                                <button className='btn text-mainColor border-2 border-white bg-white hover:bg-transparent hover:text-white'>shop now</button>
                                <button className='btn text-white bg-transparent border-2 border-white hover:bg-white hover:text-mainColor'>view deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage:`url("${homeSliderImg_3}")` , backgroundSize:"cover" , backgroundPosition:"center"}}>
                    <div className="overlay text-white pl-32 py-25 bg-gradient-to-r from-fuchsia-600/95 to-fuchsia-600/40">
                        <div className="container space-y-4">
                            <h2 className='text-2xl font-bold'>fresh product deliverd <br/> to your door</h2>
                            <p>get 20% offer for your frist order</p>
                            <div className='space-x-3'>
                                <button className='btn text-mainColor border-2 border-white bg-white hover:bg-transparent hover:text-white'>shop now</button>
                                <button className='btn text-white bg-transparent border-2 border-white hover:bg-white hover:text-mainColor'>view deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            
           
        </Swiper>
    </>
  )
}
