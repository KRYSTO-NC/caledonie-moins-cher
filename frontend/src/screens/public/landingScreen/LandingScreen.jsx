import { Link } from 'react-router-dom'
import './landingScreen.css'
import { FaSearch } from 'react-icons/fa'

const LandingScreen = () => {
  return (
    <div>
        <div className="searchEngine">
            <div className="search-links">

          <Link to="/nos-produits">Protections de l'acheteur</Link>
          <Link to="/nos-produits">Mode de paiments</Link>
            </div>

            <div className="search">
              
                <input type="text" placeholder="Rechercher un produit" />
                <button className='btn'><FaSearch/></button>
            </div>
        </div>
       <div className="page-container">
          
       </div>
    </div>
  )
}

export default LandingScreen