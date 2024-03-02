import ProductCard from '../../../components/screens/products/productCard/ProductCard'
import Loader from '../../../components/shared/loader/Loader'
import { useGetAllProductsQuery } from '../../../slices/productsApiSlice'

const ProductsScreen = () => {
  const {
    data: products,
    isLoading: loadingProducts,
    error: errorProducts,
  } = useGetAllProductsQuery()

  console.log(products)

  if (loadingProducts) {
    return (
      <div className="page-container">
        <Loader />
      </div>
    )
  } else if (errorProducts) {
    return (
      <div className="page-container">
        <h1>Une erreur est survenue</h1>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>Nos produits</h1>

      <section className="flex-container">
        {products.map((product) => (
         <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default ProductsScreen
