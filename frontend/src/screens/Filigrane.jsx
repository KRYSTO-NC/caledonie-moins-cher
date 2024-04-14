import React from 'react';
import './filigrance.css';
import { FaExclamation, FaStop, FaStopCircle } from 'react-icons/fa';

const Filigrane = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h1 className='large' style={{fontSize: "60px"}}> Accès au site non autorisé </h1>
          <p>
          <FaStopCircle style={{fontSize:'40px'}}/>
          </p>
      </div>
    </div>
  );
}

export default Filigrane;
