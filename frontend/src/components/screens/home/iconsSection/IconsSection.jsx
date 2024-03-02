import './iconsSection.css'
import { FaCommentDollar, FaCubes, FaTruck } from 'react-icons/fa'

const IconsSection = () => {
  return (
    <section className="icons-section">
      <div className="flex-items">
        <div className="icon-container">
          <FaCubes />
          <h3>Diversité</h3>
          <p>Explorez notre vaste gamme de produits de qualité. Parmis plus de 5000 réfèrences</p>
        </div>
        </div>
<div className="flex-items">

        <div className="icon-container">
          <FaCommentDollar />
          <h3>Personnalisé</h3>
          <p>Obtenez des devis adaptés à vos besoins spécifiques.</p>
        </div>
</div>
<div className="flex-items">
        <div className="icon-container">
          <FaTruck/>
          <h3>Livraison</h3>
          <p>Recevez vos commandes rapidement et efficacement.</p>
        </div>
      </div>
    </section>
  )
}

export default IconsSection
