import './HomeArticles.css'
import articleImg from '../../../../assets/img/article.jpg'
import { Link } from 'react-router-dom'
const HomeArticles = () => {
  return (
    <section className="home-articles">
      <div className="container">
        <h2>Notre mission </h2>
        <div className="articles-container">
          <article className="article-card bg-primary">
            <img src={articleImg} alt="" />
            <div>
              <div className="category category-ent">Notre engagement</div>
              <Link to={'/'}>
                <h3>Vos fournir le prix le plus bas</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam facere in laboriosam recusandae quasi necessitatibus
                ex amet unde culpa labore.
              </p>
            </div>
          </article>
          <article className="article-card bg-dark">
            <div className="category category-ent">Pour qui ?</div>
            <Link to={'/'}>
              <h3>Professionnels et particulier</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              facere in laboriosam recusandae quasi necessitatibus ex amet unde
              culpa labore.
            </p>
          </article>
          <article className="article-card">
            <img src={articleImg} alt="" />
            <div className="category category-tech">FRET</div>
            <Link to={'/'}>
              <h3>Avions ou bateau</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              facere in laboriosam recusandae quasi necessitatibus ex amet unde
              culpa labore.
            </p>
          </article>
          <article className="article-card">
            <div className="category category-tech">TGC</div>
            <Link to={'/'}>
              <h3>EXONERATION</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              facere in laboriosam recusandae quasi necessitatibus ex amet unde
              culpa labore.
            </p>
            <img src={articleImg} alt="" />
          </article>
      
          <article className="article-card">
            <img src={articleImg} alt="" />
            <div className="category category-tech">Normes</div>
            <Link to={'/'}>
              <h3>Notre garantie</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              facere in laboriosam recusandae quasi necessitatibus ex amet unde
              culpa labore.
            </p>
          </article>

          <article className="article-card bg-dark">
            <div className="category category-ent">Retour</div>
            <Link to={'/'}>
              <h3>Si la reception n'est pas conforme</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              facere in laboriosam recusandae quasi necessitatibus ex amet unde
              culpa labore.
            </p>
          </article>
          <article className="article-card bg-primary">
            <div>
              <div className="category category-ent">+ de 5000 références disponible</div>
              <Link to={'/'}>
                <h3>Comment acheter un produit</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam facere in laboriosam recusandae quasi necessitatibus
                ex amet unde culpa labore.
              </p>
            </div>
            <img src={articleImg} alt="" />
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeArticles
