import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import PrivateRoute from './components/utils/PrivateRoute'
import AdminRoute from './components/utils/AdminRoute'
import HomeScreen from './screens/public/homeScreen/HomeScreen'
import LoginScreen from './screens/public/loginScreen/LoginScreen'
import RegisterScreen from './screens/public/registerScreen/RegisterScreen'
import ProductsScreen from './screens/public/productsScreen/ProductsScreen'
import ProductScreen from './screens/public/productScreen/ProductScreen'
import FavoriteProducts from './screens/private/favoriteProducts/FavoriteProducts'
import AdminDashboard from './screens/admin/adminDashboard/AdminDashboard'
import AdminProducts from './screens/admin/adminProducts/AdminProducts'
import AdminProductEditScreen from './screens/admin/adminProductEditScreen/AdminProductEditScreen'
import AdminCategoriesScreen from './screens/admin/adminCategoriesScreen/AdminCategoriesScreen'
import AdminCategory from './screens/admin/adminCategory/AdminCategory'
import AdminSubCategory from './screens/admin/adminSubcategoryScreen/AdminSubCategory'
import FaqScreen from './screens/public/faqScreen/FaqScreen'
import Cgu from './screens/public/legal/Cgu'
import AdminUsersList from './screens/admin/adminUsersList/AdminUsersList'
import AdminUserEdit from './screens/admin/adminUserEdit/AdminUserEdit'
import AdminMessages from './screens/admin/adminMessages/AdminMessages'
import AdminMessage from './screens/admin/adminMessage/AdminMessage'
import AdminFavoriteProducts from './screens/admin/adminFavoriteProducts/AdminFavoriteProducts'
import AboutScreen from './screens/public/AboutScreen/AboutScreen'
import Cgv from './screens/public/legal/Cgv'
import MyProfilScreen from './screens/private/myProfil/MyProfilScreen'
import LandingScreen from './screens/public/landingScreen/LandingScreen'
import NotFound from './screens/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/connexion" element={<LoginScreen />} />
      <Route path="/landing" element={<LandingScreen />} />
      <Route path="/inscription" element={<RegisterScreen />} />
      <Route path="/nos-produits" element={<ProductsScreen />} />
      <Route path="/produit/:id" element={<ProductScreen />} />
      <Route path="/faq" element={<FaqScreen />} />
      <Route path="/mentions-legales" element={<Cgu />} />
      <Route path="/cgv" element={<Cgv />} />
      <Route path="/about" element={<AboutScreen />} />
      {/* Route générique pour gérer toutes les autres routes non définies */}
      <Route path="*" element={<NotFound />} />
      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/mes-produits-favoris" element={<FavoriteProducts />} />
        <Route path="/private/mon-profil" element={<MyProfilScreen />} />
      </Route>
      {/* Admin users */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/categories" element={<AdminCategoriesScreen />} />
        <Route path="/admin/category/:id" element={<AdminCategory />} />
        <Route path="/admin/sub-category/:id" element={<AdminSubCategory />} />
        <Route path="/admin/users" element={<AdminUsersList />} />
        <Route path="/admin/user-edit/:id" element={<AdminUserEdit />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/admin/message/:id" element={<AdminMessage />} />
        <Route path="/admin/favoris" element={<AdminFavoriteProducts />} />
        <Route
          path="/admin/product-edit/:id"
          element={<AdminProductEditScreen />}
        />
      </Route>
    </Route>,
  ),
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
