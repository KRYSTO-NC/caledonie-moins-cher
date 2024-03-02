import './homeContact.css'

const HomeContacts = () => {
  return (
    <section className='home-contact'>
        <div className="heading">
        <h5>Vous ne trouvez pas ce que vous cherchez sur le site ?</h5>
         <p>Contacter-nous en donnant les spécificité du produit recherché. Nous nous engageont a vous répondre dans les 24 à 48 H</p>
        </div>
        <form className="form">
            <div className="form-group">
                <label style={{color:"white"}} htmlFor="">Votre nom et prènom</label>
                <input type="text" placeholder='Nom complet'/>
            </div>
            <div className="form-group">
                <label style={{color:"white"}} htmlFor="">Votre email</label>
                <input type="mail" placeholder='entrez votre email'/>
            </div>
            <div className="form-group">
                <label style={{color:"white"}} htmlFor="">Votre numéro de téléphone</label>
                <input type="phone" placeholder='Nom complet'/>
            </div>
            <div className="form-group">
                <label style={{color:"white"}} htmlFor="">Votre nom</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="form-group">
               <button className='btn btn-block'>Envoyer ma demande</button>
            </div>
        </form>
    </section>
  )
}

export default HomeContacts