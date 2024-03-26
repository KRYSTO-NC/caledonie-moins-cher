import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminComponents.css';
import Modal from '../../shared/modal/Modal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDeleteSubCategoryMutation, useUpdateSubCategoryMutation } from '../../../slices/subCategoriesApiSlice';

const AdminSubCategoryCard = ({ subcategory}) => {
  const [deleteSubCategory, { isLoading: deletingSubCategory }] = useDeleteSubCategoryMutation();
  const [updateSubCategory, { isLoading: updatingSubCategory }] = useUpdateSubCategoryMutation();
  const [newCategoryName, setNewCategoryName] = useState('')
  const [editingCategoryId, setEditingCategoryId] = useState(null)


  const handleEdit = async () => {
    try {
      await updateSubCategory({
        subCategoryId: subcategory._id,
        category: subcategory.category._id,
        name: newCategoryName,
      })
      console.log(updateSubCategory)
      setEditingCategoryId(null)
      setNewCategoryName('')
//  window.location.reload()
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }


  return (
    <div className="admin-sub-category-card">
      <Link to={`/admin/sub-category/${subcategory._id}`}>
        <p>{subcategory.name}</p>
      </Link>
      <div className="action-buttons">
    



        <Modal modalBtn={<FaEdit />}>
                    <h1>Modifier la catégorie</h1>
                    <div className="form">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          handleEdit()
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
      </div>
    </div>
  );
};

export default AdminSubCategoryCard;
