import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSubCategoriesByCategoryQuery, useCreateSubCategoryMutation } from '../../../slices/subCategoriesApiSlice';
import { useGetCategoryDetailsQuery } from '../../../slices/categoriesSlice';
import './adminCategory.css';
import Modal from '../../../components/shared/modal/Modal';
import AdminSubCategoryCard from '../../../components/screens/admin/AdminSubCategoryCard';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AdminCategory = () => {
  const { id } = useParams();

  const {
    data: categoryDetails,
    error: categoryError,
  } = useGetCategoryDetailsQuery(id);
  const {
    data: subcategories,
    error: subcategoriesError,
    refetch: refetchSubcategories,
  } = useGetSubCategoriesByCategoryQuery(id);

  const [newSubCategory, setNewSubCategory] = useState({
    name: '',
    description: '',
    category: categoryDetails && categoryDetails._id ? categoryDetails._id : '',
  });

  const [
    createSubCategory,
    { isLoading: creatingSubCategory },
  ] = useCreateSubCategoryMutation();

  const handleCreateSubCategory = async () => {
    try {
      const trimmedName = newSubCategory.name.trim();
      const trimmedDescription = newSubCategory.description.trim();

      if (!trimmedName || !trimmedDescription) {
        toast.error('Le nom et la description sont requis pour créer une sous-catégorie.');
        return;
      }

      if (!newSubCategory.category) {
        toast.error('La catégorie est requise pour créer une sous-catégorie.');
        return;
      }

      const { data: createdSubCategory, error } = await createSubCategory({
        name: trimmedName,
        description: trimmedDescription,
        category: newSubCategory.category,
      });

      if (createdSubCategory) {
        toast.success('Sous-catégorie créée avec succès');
        setNewSubCategory({
          name: '',
          description: '',
          category: categoryDetails && categoryDetails._id ? categoryDetails._id : '',
        });
        refetchSubcategories();
      } else if (error) {
        toast.error(error.data.message || error.error);
      }
    } catch (error) {
      toast.error('Erreur lors de la création de la sous-catégorie');
    }
  };

  useEffect(() => {
    if (categoryDetails && categoryDetails._id) {
      setNewSubCategory((prev) => ({
        ...prev,
        category: categoryDetails._id,
      }));
    }
  }, [categoryDetails]);

  if (!categoryDetails || !subcategories) {
    return <p>Loading...</p>;
  } else {
    // Créer une copie du tableau de sous-catégories et trier la copie par ordre alphabétique
    const sortedSubcategories = [...subcategories].sort((a, b) => a.name.localeCompare(b.name));

    return (
      <div className="page-container">
        <section className="heading">
          <h2>Catégorie : {categoryDetails?.name}</h2>
          <p>{categoryDetails?.description}</p>
        </section>

        {categoryError && <p>Error fetching category: {categoryError.message}</p>}
        {subcategoriesError && <p>Error fetching subcategories: {subcategoriesError.message}</p>}
        
        <Modal modalBtn={"Ajouter une sous catégorie   +"}>
          <div>
            <h3>Ajouter une sous-catégorie</h3>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>
                  Nom:
                  <input
                    type="text"
                    value={newSubCategory.name}
                    onChange={(e) => setNewSubCategory({ ...newSubCategory, name: e.target.value })}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Description:
                  <input
                    type="text"
                    value={newSubCategory.description}
                    onChange={(e) => setNewSubCategory({ ...newSubCategory, description: e.target.value })}
                  />
                </label>
              </div>
              <button
                className="btn btn-block"
                onClick={handleCreateSubCategory}
                disabled={creatingSubCategory}
              >
                Ajouter
              </button>
            </form>
          </div>
        </Modal>

        <div className='subcategories'>
          <h3>Sous-catégories</h3>
          <div className="subCategoryCard-container">
            {sortedSubcategories.filter(Boolean).map((subcategory) => (
              <AdminSubCategoryCard
                key={subcategory._id}
                subcategory={subcategory}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default AdminCategory;
