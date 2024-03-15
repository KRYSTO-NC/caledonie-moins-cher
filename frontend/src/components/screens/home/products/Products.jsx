import React from 'react'
import { useGetAllProductsQuery } from '../../../../slices/productsApiSlice';
import ProductCard from '../../products/productCard/ProductCard';

const Products = () => {

    const {
        data: products,
        isLoading: loadingProducts,
        error: errorProducts,
      } = useGetAllProductsQuery();
  return (
    <div className='page-container'>
        <h2>Nos produits</h2>

        {loadingProducts ? (
            <div>Loading...</div>
        ) : errorProducts ? (
            <div>Error: {errorProducts?.data?.message}</div>
        ) : (
            <div className='flex-container'>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        )}
        )
    </div>
  )
}

export default Products