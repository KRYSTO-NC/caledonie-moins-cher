import { FaBox, FaEnvelope, FaFolder, FaHeart, FaUsers } from 'react-icons/fa'
import './adminDashboard.css'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='container-dashboard'>
        <h1>Administration du site</h1>

        <div className="btns-container">
            <Link to="/admin/categories" className="btn-block"> <FaFolder/> Gérer les categories</Link>
            <Link to="/admin/products" className="btn-block"><FaBox/> Gérer les produits</Link>
            <Link to="/admin/messages" className="btn-block"> <FaEnvelope/> Gérer les messages</Link>
            <Link to="/admin/users" className="btn-block"><FaUsers/> Gérer les utilisateurs</Link>
            <Link to="/admin/favoris" className="btn-block"><FaHeart/> Les favoris</Link>
            
        </div>
    </div>
  )
}

export default AdminDashboard