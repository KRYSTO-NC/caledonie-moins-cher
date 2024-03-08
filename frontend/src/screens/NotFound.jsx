import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='page-container'>
      <div className="notFound-container">
        <h1>OUPS</h1>
        <h2>404 JJKJKKJJJ</h2>
        <p>Désolée, la page que vous demandez n'est pas trouvée.</p>
        <Link className='btn btn-block' to={"/"}>Retour à l'accueil</Link>
      </div>
    </div>
  );
}

export default NotFound;
