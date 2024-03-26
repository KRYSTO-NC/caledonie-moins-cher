import './adminFavoriteProducts.css';
import { useGetFavoriteProductsQuery } from '../../../slices/favoriteProductsSlice';
import { Link } from 'react-router-dom';

const AdminFavoriteProducts = () => {
  const {
    data: userFavoriteProducts,
    isLoading,
    isError,
    refetch,
  } = useGetFavoriteProductsQuery();

  return (
    <div className="page-container">
      <div className="heading">
        <h1>Produits favoris</h1>
        <p>
          Retrouvez sur cette page tous les produits que les utilisateurs ont ajoutés à leurs favoris.
        </p>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {isError?.data?.message}</div>
      ) : (
        <div>
          <div className="flex-container">
            {userFavoriteProducts.map((favorite) => (
              <div key={favorite._id}>
                <div className="card-like">
                  <h4>
                    <Link
                      to={`/produit/${favorite.products._id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {favorite.products.name} ({favorite.products.numMail})
                    </Link>{' '}
                  </h4>
                  <div>
                    Utilisateur: <span>{favorite.userId.name} </span>
                  </div>
                  <div>
                    <a
                      className="btn btn-block"
                      href={`mailto:${favorite.userId.email}`}
                    >
                      Envoyer un email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFavoriteProducts;
