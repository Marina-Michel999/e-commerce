import { Link } from 'react-router-dom'
import React, { useContext, useEffect , useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading';
import { CalcLeftedTime } from '../../utils/calcLeftDate';
import { ProductContext } from '../../context/ProductContext';

export default function HomeDeals() {
    const [leftedTime , setLeftedTime] = useState({hour: 0 , min:0 , sec:0 })
    const {isLoadind , products  } = useContext(ProductContext)

    useEffect(()=>{
       const timer = setInterval(()=>{ 
            const newTimeLeft = CalcLeftedTime();          
            setLeftedTime(newTimeLeft);
        } , 1000)
        return function () {
            clearInterval(timer)
        }
    } , []);
  if (isLoadind === true){
    return <Loading/>
  }
  const deals = products.filter((product)=>
    product.priceAfterDiscount
  ).slice(0 , 8)
//   console.log(deals)
  return (
    <>
    <section>
        <div className="container mx-auto px-12 py-4">
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3  py-6'>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-bold'>Deals of the day</h2>
                    <div className='flex gap-2'>
                    <p>offers ends in:</p>
                    <div className='size-7  rounded-sm bg-black text-white flex justify-center items-center '>{leftedTime.hour}</div>
                    <span>:</span>
                    <div className='size-7  rounded-sm bg-black text-white flex justify-center items-center '>{leftedTime.min}</div>
                    <span>:</span>
                    <div className='size-7  rounded-sm bg-black text-white flex justify-center items-center '>{leftedTime.sec}</div>

                </div>

                </div>
            <div>
                <Link
                className='text-mainColor  hover:text-fuchsia-700 transition-colors  duration-200'
                to={`/deals`}
                >view all deals</Link>
            </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {deals.map((dealedProduct)=> <ProductCard key={dealedProduct._id} productInfo={dealedProduct}/>)}
            </div>


        </div>
    </section>
    </>
  )
}
