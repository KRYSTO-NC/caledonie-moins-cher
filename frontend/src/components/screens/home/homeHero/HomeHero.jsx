import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './homeHero.css'

const HomeHero = () => {
  const words = [
    'Engin de chantier',
    'Pneumatiques',
    'Pièces détachées',
    'Camping',
    'Articles de sports',
    'Ordinateurs',
    'Téléphone',
    'Eclairage',
    'Electricité',
    'Carrosserie',
    'Outillage',
    'Equipement de garage',
    'EPI',
    'Engins de levage',
  ]

  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500) // Change every 2 seconds (adjust as needed)

    return () => clearInterval(intervalId)
  }, [words.length])

  return (
    <div className="showcase">
      <div className="showcase-content">
        <div className="content">
          <div className="title">
            <h1> <span>Calédonie </span> Moins Cher</h1>
           
            <i>Les Meilleurs Prix du Marché en Nouvelle-Calédonie</i>
          </div>
          <h2>
            <span className="typing-animation">{words[currentWord]}</span>
          </h2>

          <Link to="/nos-produits">
            <button className="btn">Découvrir nos produits</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
