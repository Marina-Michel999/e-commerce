import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import HomeFeature from '../HomeFeatures/HomeFeature'
import HomeCategories from '../HomeCategories/HomeCategories'
import HomeDeals from '../HomeDeals/HomeDeals'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'

export default function Home() {
  return (
    <>
    <div className='py-24'>
      <HomeSlider></HomeSlider>
      <HomeFeature></HomeFeature>
      <HomeCategories></HomeCategories>
      <HomeDeals></HomeDeals>
      <FeaturedProduct></FeaturedProduct>
    </div>

    </>
  )
}
