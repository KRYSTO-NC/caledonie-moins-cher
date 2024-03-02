import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../../../slices/productsApiSlice'
import { useDispatch } from 'react-redux'
import Loader from '../../../components/shared/loader/Loader'
import Slider from '../../../components/shared/slider/Slider'
import './productScreen.css'
import Modal from '../../../components/shared/modal/Modal'

const ProductScreen = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data: product, isLoading, error } = useGetProductDetailsQuery(id)

  const renderDescription = () => {
    if (!product.description) return null

    const paragraphs = product.description.split('@')

    return paragraphs.map((paragraph, index) => (
      <p className="desc-p" key={index}>
        {paragraph}
      </p>
    ))
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error?.data?.message}</div>
      ) : (
        <div className="page-container">
          <Slider product={product} />
          <div className="price"></div>
          <div className="product-details">
            <h1>{product.name}</h1>
            {product.priceRange ? (
              <div div className="price-range">
                <p>
                  A partir de : {product.priceRangeMin.toLocaleString()}XPF  <span>* </span>
                 
                    {' '}
                  <p> <span>*</span> <i>Selons les options choisit / Hors fret et frais de douanes</i> </p>  
                  
                </p>
              </div>
            ) : (
              <div className="price-range">

              <p className='price'>{product.price.toLocaleString()} XPF <span>*</span></p>
              <p> <span>*</span><i>Hors fret et frais de douanes</i></p>
              </div>
            )}
            <div className="product-actions">
            <Modal modalBtn={"demander un devis ou des renseignements"}>
              <div className="modal-content">
                <h2>Demander un devis ou des renseignements</h2>
                <form className='form'>
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message"></textarea>
                  </div>
                  <button className="btn">Envoyer</button>
                </form>
              </div>
            </Modal>
              </div>
            <div className="description">
            <h2>Détails sur ce produit</h2>
              
              {renderDescription()}</div>
          </div>

          <div className="container-tab">
            <h2>Caractéristiques de ce produits</h2>
            <table className="options">
              <tbody>
                {product.options.map((option, index) => (
                  <tr key={index}>
                    <td className="colored">{option.name}</td>
                    <td>{option.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductScreen
