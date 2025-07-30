import {Link} from 'react-router-dom'
import React, { useContext } from 'react'
import Loading from '../Loading/Loading';
import { CategoriesContext } from '../../context/CategoryContext';

export default function HomeCategories() {
    const {categories , isLoadind} = useContext(CategoriesContext)
    if (isLoadind) {
        return <Loading></Loading>
    }
  return (
    <>
        <section>
            <div className="container mx-auto px-3 ">
                <div className='flex flex-col sm:flex-row sm:justify-between gap-3 pb-4 px-5 '>
                    <h2 className='font-bold text-2xl'>shop by category</h2>
                    <div  to={"/cat"} className='text-mainColor hover:text-fuchsia-700 transition-colors  duration-200 flex gap-2 items-center'>
                        <span >view all categories</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-8 '>
                    {categories.map((category)=>(
                    <Link 
                    key={category._id} 
                    className="card shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-center gap-3 p-4 bg-white cursor-pointer"
                    to={`/category/${category._id}`}
                    >
                    
                        <img className='size-16 rounded-full object-cover' src={category.image}/>
                        <h2>{category.name}</h2>
                    </Link>                       
                    ))}

                </div>
            </div>
        </section>
    </>
  )
}
