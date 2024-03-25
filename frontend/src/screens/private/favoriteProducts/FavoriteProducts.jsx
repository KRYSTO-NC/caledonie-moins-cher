import { useSelector } from 'react-redux'
import {
  useDeleteFavoriteProductMutation,
  useGetFavoriteProductsQuery,
} from '../../../slices/favoriteProductsSlice'
import ProductCard from '../../../components/screens/products/productCard/ProductCard'
import { Link } from 'react-router-dom'
import { FaHeartBroken } from 'react-icons/fa'

const AdminFavoriteProducts = () => {
  const {
    data: favoriteProducts,
    isError,
    isLoading,
    refetch,
  } = useGetFavoriteProductsQuery()
  const { userInfo } = useSelector((state) => state.auth)

  const [removeFavoriteProduct] = useDeleteFavoriteProductMutation()

  // Filtrer les produits favoris pour ceux associés à l'utilisateur connecté
  const myFavorites = favoriteProducts?.filter(
    (product) => product?.userId?._id === userInfo._id,
  )
  console.log(myFavorites)
  const handleRemoveFromFavorites = async (productId) => {
    try {
      await removeFavoriteProduct(productId)
      refetch()
      // Rechargez les favoris après la suppression
      // Ceci est facultatif, dépend de votre implémentation
      // Si votre useGetFavoriteProductsQuery le gère automatiquement, vous n'avez pas besoin de cette ligne
      // Assurez-vous simplement que votre hook useGetFavoriteProductsQuery gère correctement les mises à jour en temps réel des favoris
    } catch (error) {
      console.error(
        'Erreur lors de la suppression du produit des favoris:',
        error,
      )
    }
  }

  return (
    <div className="page-container">
      <div className="heading">
        <h1>Mes favoris</h1>
      </div>

      <div className="flex-container">
        {/* Vérifier si myFavorites existe avant de le mapper */}
        {myFavorites && myFavorites.length > 0 ? (
          myFavorites.map((product) => (
            // Vérifier si product.userId existe avant d'accéder à _id
            <>
              <div className="fav-card">
                <h2>{product?.products.name}</h2>
                <button
                  className="btn"
                  onClick={() => handleRemoveFromFavorites(product?._id)}
                >
                  <FaHeartBroken/>
                </button>
              </div>
            </>
          ))
        ) : (
          <>
            <p style={{ marginBottom: '2rem' }} className="message-red">
              Vous n'avez pas de produits dans vos favoris
            </p>
            <Link className="btn-block" to={'/nos-produits'}>
              Retour à la boutique
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default AdminFavoriteProducts
