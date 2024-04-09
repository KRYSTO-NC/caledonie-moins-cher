import React, { useEffect, useState } from 'react';
import { useGetAllProductsQuery } from '../../../../slices/productsApiSlice';
import ProductCard from '../../products/productCard/ProductCard';
import { useGetCategoriesQuery } from '../../../../slices/categoriesSlice';
import { useGetSubCategoriesByCategoryQuery } from '../../../../slices/subCategoriesApiSlice';
import Loader from '../../../shared/loader/Loader';
import { Link } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';

const Products = () => {
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const { data: categories } = useGetCategoriesQuery();
  const { data: subcategories, refetch: refetchSubcategories } = useGetSubCategoriesByCategoryQuery(selectedCategory);
  const {
    data: products,
    isLoading: loadingProducts,
    error: errorProducts,
  } = useGetAllProductsQuery();

  const filterProductsByCategory = (products, category, subcategory) => {
    return products?.filter(
      (product) => {
        const isProductIncluded =
          (category === '' || (product.category && String(product.category._id) === category)) &&
          (subcategory === '' || (product.subCategory && String(product.subCategory._id) === subcategory));

        return isProductIncluded;
      }
    );
  };

  const categoryFilteredProducts = filterProductsByCategory(products, selectedCategory, selectedSubCategory);

  useEffect(() => {
    setSelectedSubCategory('');
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

  const noResultsParagraph = (
    <div className='no-result'>
      <p className="message-red" style={{ marginTop: "3rem", textAlign: "center", fontSize: "2rem" }}>
        Aucun produit ne correspond à votre critère ... <br />
        <span >Vous pouvez chercher "bateau", "camping", "pelleteuse", ect. </span>
        <button onClick={resetFilters}> RÉINITIALISER LES FILTRES <FaTimes /></button>
      </p>
    </div>
  );

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

  // Mélanger les produits pour les afficher dans un ordre aléatoire
  const shuffledProducts = [...filteredProducts].sort(() => Math.random() - 0.5);

  return (
    <>
      <div>
        <div className="">
          <div className="search form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page-container yellow">
        <div className="filter-product">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {categories &&
              [...categories].sort((a, b) => a.name.localeCompare(b.name)).map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
          {subcategories && subcategories.length > 0 && (
            <select
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              disabled={isAllCategoriesSelected}
            >
              <option value="">Toutes les sous-catégories</option>
              {[...subcategories].sort((a, b) => a.name.localeCompare(b.name)).map((subcategory) => (
                <option key={subcategory._id} value={subcategory._id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
          )}
          <button onClick={resetFilters}><FaTimes /></button>
        </div>
        <section className="flex-container">
          {shuffledProducts.length === 0 ? (
            noResultsParagraph
          ) : (
            shuffledProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default Products;
