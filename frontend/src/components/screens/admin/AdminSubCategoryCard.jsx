import React from 'react';
import { Link } from 'react-router-dom';
import './adminComponents.css';
import Modal from '../../shared/modal/Modal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDeleteSubCategoryMutation } from '../../../slices/subCategoriesApiSlice';

const AdminSubCategoryCard = ({ subcategory }) => {
  const [deleteSubCategory, { isLoading: deletingSubCategory }] = useDeleteSubCategoryMutation();

  const handleDelete = async () => {
    try {
      await deleteSubCategory(subcategory._id);
      window.location.reload();
     
      toast.success('Sous-catégorie supprimée avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de la sous-catégorie :', error);
      toast.error('Erreur lors de la suppression de la sous-catégorie');
    }
  };

  return (
    <div      className="admin-sub-category-card">
    <Link
      to={`/admin/sub-category/${subcategory._id}`}
  
      >
      <p>{subcategory.name}</p>
  
     
    </Link>
      <button className="btn" onClick={handleDelete} disabled={deletingSubCategory}>
        <FaTrash />
      </button>
      </div>
  );
};

export default AdminSubCategoryCard;
