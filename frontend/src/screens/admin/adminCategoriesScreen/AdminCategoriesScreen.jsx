import React, { useState, useEffect } from 'react';
import './adminCategories.css';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation } from '../../../slices/categoriesSlice';
import { FaEdit, FaEye, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Modal from '../../../components/shared/modal/Modal';

const AdminCategoriesScreen = () => {
  const { data, isLoading, error, refetch } = useGetCategoriesQuery();

  const [createCategory, { isLoading: loadingCreate }] = useCreateCategoryMutation();
  const [updateCategory, { isLoading: loadingUpdate }] = useUpdateCategoryMutation();

  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState('');

  useEffect(() => {
    if (data) {
      // Créer une copie du tableau de données et trier la copie par ordre alphabétique
      const sortedCategories = [...data].sort((a, b) => a.name.localeCompare(b.name));
      // Utiliser les catégories triées directement sans besoin de modifier le tableau d'origine
      // setData(sortedCategories);
    }
  }, [data]);

  const createCategoryHandler = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir ajouter une catégorie ?')) {
      try {
        await createCategory();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const updateCategoryHandler = async (categoryId) => {
    try {
      await updateCategory({
        categoryId,
        name: newCategoryName,
      });
      console.log(updateCategory);
      setEditingCategoryId(null);
      setNewCategoryName('');
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="page-container">
      <section className="heading">
        <h1>Categories</h1>
        <button className="btn" onClick={createCategoryHandler}>
          <FaPlus /> Ajouter une catégorie
        </button>
      </section>
      {loadingCreate && <p>Loading...</p>}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="admin-categories-container">
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Voir</th>
                <th>Editer</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>
                    <Link to={`/admin/category/${category._id}`}>
                      <FaEye />
                    </Link>
                  </td>
                  <td>
                    <Modal modalBtn={<FaEdit />}>
                      <h1>Modifier la catégorie</h1>
                      <div className="form">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            updateCategoryHandler(category._id);
                          }}
                        >
                          <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                              type="text"
                              id="name"
                              placeholder="Entrez le nom de la catégorie"
                              value={newCategoryName}
                              onChange={(e) => setNewCategoryName(e.target.value)}
                            />
                          </div>
                          <button className="btn" type="submit">
                            Modifier
                          </button>
                        </form>
                      </div>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminCategoriesScreen;
