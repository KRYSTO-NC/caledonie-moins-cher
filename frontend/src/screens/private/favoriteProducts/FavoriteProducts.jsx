import { useSelector } from "react-redux";
import { useGetFavoriteProductsQuery } from "../../../slices/favoriteProductsSlice";
import ProductCard from "../../../components/screens/products/productCard/ProductCard";
import { Link } from "react-router-dom";

const AdminFavoriteProducts = () => {
  const { data: favoriteProducts, isError, isLoading } = useGetFavoriteProductsQuery();
  const { userInfo } = useSelector((state) => state.auth);

  console.log("favoriteProducts:", favoriteProducts);
  console.log("userInfo:", userInfo);

  // Filtrer les produits favoris pour ceux associés à l'utilisateur connecté
  const myFavorites = favoriteProducts?.filter(product => product?.userId?._id === userInfo._id);

  console.log("myFavorites:", myFavorites);

  return (
    <div className="page-container">
      <div className="heading">
        <h1>Mes favoris
        </h1>
      </div>

      <div className="flex-container">
        {/* Vérifier si myFavorites existe avant de le mapper */}
        {myFavorites && myFavorites.length > 0 ? (
          myFavorites.map((product) => (
            // Vérifier si product.userId existe avant d'accéder à _id
            <ProductCard key={product._id} product={product.products} />
          ))
        ) : (
          <>
          <p style={{marginBottom:"2rem"}} className="message-red">Vous n'avez pas de produits dans vos favoris</p>
          <Link className="btn-block" to={'/nos-produits'}>Retour à la boutique</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminFavoriteProducts;
