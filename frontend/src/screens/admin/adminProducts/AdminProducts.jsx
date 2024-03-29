import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa';
import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} from '../../../slices/productsApiSlice';
import { toast } from 'react-toastify';
import './adminProduct.css';
import Paginate from '../../../components/utils/Paginate';
import Loader from '../../../components/shared/loader/Loader';
import ThUser from '../../../components/screens/admin/ThUser';

const AdminProducts = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error, refetch } = useGetAllProductsQuery();
  const [searchTermNumMail, setSearchTermNumMail] = useState('');
  const [searchTermName, setSearchTermName] = useState('');

  console.log(data);

  const [
    deleteProduct,
    { isLoading: loadingDelete },
  ] = useDeleteProductMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      try {
        await deleteProduct(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const [
    createProduct,
    { isLoading: loadingCreate },
  ] = useCreateProductMutation();

  const createProductHandler = async () => {
    if (window.confirm('Etes vous sur de vouloir ajouter un nouveau produit ?')) {
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  // Logique pour filtrer et trier les produits
  const filteredProducts = data?.filter((product) =>
    product.numMail.includes(searchTermNumMail) &&
    product.name.toLowerCase().includes(searchTermName.toLowerCase())
  ).sort((a, b) => parseFloat(a.numMail) - parseFloat(b.numMail));

  // Gestion de la saisie de la recherche par numéro de mail
  const handleNumMailSearchChange = (e) => {
    setSearchTermNumMail(e.target.value);
  };

  // Gestion de la saisie de la recherche par nom
  const handleNameSearchChange = (e) => {
    setSearchTermName(e.target.value);
  };

  return (
    <>
      <div className="page-container">
        <div>
          <h1>Produits ({data?.length})</h1>
        </div>

        <div>
          <button className="btn" onClick={createProductHandler}>
            <FaPlus /> Nouveau produit
          </button>
        </div>

        <div className="search-admin">
          <input
            type="text"
            placeholder="Rechercher par numéro de mail"
            value={searchTermNumMail}
            onChange={handleNumMailSearchChange}
          />
        </div>

        <div className="search-admin">
          <input
            type="text"
            placeholder="Rechercher par nom"
            value={searchTermName}
            onChange={handleNameSearchChange}
          />
        </div>

        {loadingCreate && <Loader />}
        {loadingDelete && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>Error: {error.data?.message}</div>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Mail N°</th>
                   <th>Ajouter par</th>
                  <th>Nom</th>
                  <th>PRIX</th>
                  <th>CATEGORIE</th>
                  <th>SOUS CATEGORIE</th>
                  <th>MARQUE</th>
                  <th>URL</th>
                  <th>Modifier </th>
                </tr>
              </thead>
              <tbody>
  {filteredProducts.map((product) => (
    <tr key={product._id} >
      <td className="td-mail">
        <Link  className={product.countInStock === 0 ? 'OUT' : ''}  to={`/produit/${product._id}`} target="_blank">
          {' '}
          {product.numMail}{' '}
        </Link>
      </td>
      <ThUser userId={product.user} />
      <td>{product.name}</td>
      <td>XPF{product.price}</td>
      <td>{product.category?.name}</td>
      <td>{product.subCategory?.name}</td>
      <td>{product.brand}</td>
      <td>
        <a href={product.url}>
          {' '}
          <FaEye style={{ color: 'green' }} />
        </a>
      </td>
      <td>
        <Link
          style={{ color: 'orange' }}
          to={`/admin/product-edit/${product._id}`}
        >
          <FaEdit />
        </Link>
        {/* <button onClick={() => deleteHandler(product._id)}>
          <FaTrash style={{ color: 'red' }} />
        </button> */}
      </td>
    </tr>
  ))}
</tbody>

            </table>
            <Paginate pages={data.pages} page={data.page} isAdmin={true} />
          </>
        )}
      </div>
    </>
  );
};

export default AdminProducts;
