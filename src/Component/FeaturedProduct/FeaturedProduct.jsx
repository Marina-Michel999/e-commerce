
import { useContext } from 'react';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import { ProductContext } from '../../context/productContext';
export default function FeaturedProduct() {
    const {isLoadind , products  } = useContext(ProductContext)

  if (isLoadind === true){
    return <Loading/>
  }    
  return (
    <>
        <div className="container mx-auto px-12 py-4">
            <h2 className='text-2xl font-bold  py-4'>Feature product</h2>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {products.map((product)=> <ProductCard key={product._id} productInfo={product}/>)}
            </div>
        </div>
    </>
  )
}
