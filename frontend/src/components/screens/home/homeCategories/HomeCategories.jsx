import './homeCategories.css'

const HomeCategories = () => {
  return (
    <section className="home-categories">
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">Pièces détachées</h2>
        <ul>
          <li>
            {' '}
            <p> Toutes pièce mécanique</p>{' '}
          </li>
          <li>
            {' '}
            <p> Carrosserie / Phares</p>{' '}
          </li>
          <li>
            <p>Feux / Clignotants / Vitres / Pare-brise</p>
          </li>
          <li>
            <p>Toutes pièce éléctronique et éléctrique </p>
          </li>
          <li>
            <p>Véhicules</p>
          </li>
          <li>
            <p>Poids lourds</p>
          </li>
          <li>Engins 12 et 24 Volts</li>
        </ul>

        <p className="explain">
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
          <li>
            {' '}
            <p>Véhicules:</p> Occasion SUV et Pick Up japonais et coréens
          </li>
          <li>
            <p>Mini-Pelles</p>
            Neuves et d'occasion de 0,8 Tonnes + grosse unités hydrauliques de
            2à à 50 Tonnes.
          </li>
          <li>
            <p>Pelles-rétro</p>
            Neuves et d'occasions
          </li>
          <li>
            <p>Camions et engins</p>
            Neuf et d'occasion 10 / 12 roues semi-remorque et articulés.
          </li>
        </ul>

        <p className="explain">Nombreuse marques et modèles disponible.</p>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Bateaux / Quadski Jet-Ski + remorques
        </h2>
        <ul>
          <li>
            <p>Bateaux</p>
            Neufs et d'occasion alu/gonflable/fibre de verre et fibre de
            carbonne (pour bateau transparant touristique)
          </li>
          <li>
            <p>Quadski</p>
            Neufs 1500 CM3 / tout-terrain et amphibie 2 en 1 (80 KM/H)
          </li>
          <li>
            <p>Jet-Ski</p>
            Neufs et d'occasion
          </li>
          <li>
            <p>Remorques Galva</p>
            neuves et tout taille pour bateaux jet-ski et engins en tout genre.
          </li>
          <li>
            <p>Propulseurs</p>
            pour bateaux et jet-ski
          </li>
        </ul>
        <p className="explain">Nombreuse marques et modèles disponible</p>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Articles / produits et jouet
        </h2>
        <ul>
          <li>
            <p>Pêche</p>
            Tout pour la pêche en mer et en rivière
          </li>
          <li>
            <p>Camping</p>
            Tout pour le camping
          </li>
          <li>
            <p>Sports</p>
            Tout pour le sport
          </li>
          <li>
            <p>Loisirs</p>
            Tout pour vos loisirs et activités sur terre et en mer.
          </li>
          <li>
            <p>Jouets divers et variés</p>
            pour enfants/ adolescents quads et véhicules télécommandés par les
            parents
          </li>
        </ul>
      </div>
      <div className="categorie-card-home">
        <h2 className="categorie-card-home-title">
          Outillage / Matériel et matériaux
        </h2>

        <ul>
          <li>
            <p>Mécanique et carrosserie</p>
            <ul>
                <li>
                    Caisses à outils - crics
                </li>
                <li>
                pont de levage - démonte pneus - équilibreuse
                </li>
                <li>
                Presse hydrauliques - Outils de carrosserie
                </li>
                <li>
                Vibreuses - ponceuses - Salles de peinture
                </li>
             
               
            </ul>
          </li>
          <li>
            <p>Constructions</p>
          </li>
        </ul>
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
