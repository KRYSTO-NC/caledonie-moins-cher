import { useSelector } from "react-redux"
import { useGetFavoriteProductsQuery } from "../../../slices/favoriteProductsSlice";
import ProductCard from "../../../components/screens/products/productCard/ProductCard";


const FavoriteProducts = () => {

    const { data:favoriteProducts, isError, isLoading } =  useGetFavoriteProductsQuery();
    const { userInfo } = useSelector((state) => state.auth);
  
    console.log(favoriteProducts);

  const myFavorites = favoriteProducts?.filter(product => product.user === userInfo.id);
 
 
  return (
    <div className="page-container">
        <div className="heading">
            <h1>Mes favoris</h1>
        </div>

        <div className="flex-container">
            {myFavorites?.map((product) => (
              <ProductCard key={product._id} product={product.products}/>
            ))}
        </div>
    </div>
  )
}

export default FavoriteProducts