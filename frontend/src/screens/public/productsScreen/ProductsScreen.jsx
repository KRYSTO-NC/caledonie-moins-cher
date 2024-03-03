import React, { useState, useEffect } from 'react';
import './productScreen.css';
import ProductCard from '../../../components/screens/products/productCard/ProductCard';
import Loader from '../../../components/shared/loader/Loader';
import { useGetAllProductsQuery } from '../../../slices/productsApiSlice';
import { useGetCategoriesQuery } from '../../../slices/categoriesSlice';
import { useGetSubCategoriesByCategoryQuery } from '../../../slices/subCategoriesApiSlice';
import { FaTimes } from 'react-icons/fa';

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const ProductsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const {
    data: products,
    isLoading: loadingProducts,
    error: errorProducts,
  } = useGetAllProductsQuery();

  const { data: categories } = useGetCategoriesQuery();
  const { data: subcategories, refetch: refetchSubcategories } = useGetSubCategoriesByCategoryQuery(selectedCategory);

  const filterProductsByCategory = (products, category, subcategory) => {
    return products?.filter(
      (product) => {
        const isProductIncluded =
          (category === '' || (product.category && String(product.category._id) === category)) &&
          (subcategory === '' || (product.subCategory && String(product.subCategory._id) === subcategory));

        console.log('Product:', product);
        console.log('Is included:', isProductIncluded);

        return isProductIncluded;
      }
    );
  };

  const categoryFilteredProducts = filterProductsByCategory(products, selectedCategory, selectedSubCategory);

  useEffect(() => {
    // Réinitialiser la sous-catégorie sélectionnée lorsque la catégorie change
    setSelectedSubCategory('');
    // Rafraîchir la liste des sous-catégories pour la nouvelle catégorie sélectionnée
    refetchSubcategories();
  }, [selectedCategory]);

  const filteredProducts = categoryFilteredProducts?.filter((product) =>
    removeAccents(product.name).includes(removeAccents(searchTerm))
  ) || [];

  const isAllCategoriesSelected = selectedCategory === '';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSubCategory('');
  };

  if (loadingProducts) {
    return (
      <div className="page-container">
        <Loader />
      </div>
    );
  } else if (errorProducts) {
    return (
      <div className="page-container">
        <h1>Une erreur est survenue</h1>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Nos produits</h1>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Rechercher un produit"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-product">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          {categories &&
            categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>

        {/* Ajouter un menu déroulant pour les sous-catégories */}
        {subcategories && subcategories.length > 0 && (
          <select
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            disabled={isAllCategoriesSelected}
          >
            <option value="">Toutes les sous-catégories</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        )}

        {/* Bouton de réinitialisation */}
        <button onClick={resetFilters}><FaTimes/></button>
      </div>

      <section className="flex-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductsScreen;
