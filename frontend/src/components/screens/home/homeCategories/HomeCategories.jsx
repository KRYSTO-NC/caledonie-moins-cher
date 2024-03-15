import './homeCategories.css'

const HomeCategories = () => {
  return (
    <section className="home-categories">
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">Équipements</h2>
        <ul>
          <li>Toutes pièce mécanique</li>
          <li>Carrosserie / Phares</li>
          <li>Feux / Clignotants / Vitres / Pare-brise</li>
          <li>Toutes pièce éléctronique et éléctrique</li>
          <li>Véhicules</li>
          <li>Poids lourds</li>
          <li>Engins 12 et 24 Volts</li>
        </ul>
        <hr />
        <p>
          Pour un devis, envoyer un mail avec une copie de votre carte grise ou
          plaque constructeur + photos et description détaillée de votre pièce
          avec son numéro d'origine si visible
        </p>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Véhicules/Pelles Camions/ Engins
        </h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Bateaux / Quadski Jet-Ski + remorques
        </h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Articles / produits et jouet
        </h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Outillage / Matériel et matériaux
        </h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">Pneumatiques</h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">Maison & jardins</h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">Produits High-Tech</h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Conteneurs aménagés et chalet en bois
        </h2>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">Piscine et Spas</h2>
      </div>
    </section>
  )
}

export default HomeCategories
