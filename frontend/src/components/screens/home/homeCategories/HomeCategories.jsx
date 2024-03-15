import './homeCategories.css'

const HomeCategories = () => {
  return (
    <section className="home-categories">
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">Pièces détachées</h2>
        <ul>
          <li>    <p> Toutes pièce mécanique</p> </li>
          <li>   <p> Carrosserie / Phares</p> </li>
          <li>
            <p>

            Feux / Clignotants / Vitres / Pare-brise
            </p>
            </li>
          <li>
            
             <p>Toutes pièce éléctronique et éléctrique </p>
              </li>
          <li>
            <p>
            Véhicules
            </p>
           </li>
          <li>
            <p>
            Poids lourds
            </p>
          </li>
          <li>Engins 12 et 24 Volts</li>
        </ul>
   
        <p className='explain'>
          Pour un devis, envoyer un mail avec une copie de votre carte grise ou
          plaque constructeur + photos et description détaillée de votre pièce
          avec son numéro d'origine si visible
        </p>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Engins - Véhicules - Pelles - Camions
        </h2>
        <ul>
            <li> <p>Véhicules:</p> Occasion SUV et Pick Up japonais et coréens</li>
            <li>
                <p>
                Mini-Pelles
                </p>
                Neuves et d'occasion de 0,8 Tonnes + grosse unités hydrauliques de 2à à 50 Tonnes.
            </li>
            <li>
                <p>Pelles-rétro</p>
            </li>
            <li>
                <p>
                Camions et engins
                </p>
            </li>
        </ul>

        <p className='explain'>Nombreuse marques et modèles disponible.</p>
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
