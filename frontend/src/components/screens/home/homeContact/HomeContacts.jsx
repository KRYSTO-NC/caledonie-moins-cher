import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateMessageMutation } from '../../../../slices/messagesApiSlice.js';
import './homeContact.css';

const HomeContacts = () => {
  const [name, setName] = useState('');
  const [responseMail, setResponseMail] = useState('');
  const [object, setObject] = useState('Demande de renseignements');
  const [wantCall, setWantCall] = useState(false);
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [createMessage, { isLoading: loadingCreate }] = useCreateMessageMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    const formData = {
      name,
      responseMail,
      object,
      wantCall,
      phone,
      content,
      
    };
 console.log('formData:', formData);
    try {
     await createMessage(formData);
      
      toast.success('Message envoyé avec succès!');
    

      // Réinitialise les valeurs après la soumission réussie
      resetForm();
    } catch (error) {
  
      toast.error('Erreur lors de l\'envoi du message');
    }
  };

  const resetForm = () => {
    setName('');
    setResponseMail('');
    setObject('Demande de renseignements');
    setWantCall(false);
    setPhone('');
    setContent('');
  };


  return (
    <section className="home-contact">
      <div className="heading">
        <h1>Nous contacter</h1>
        <p>
        Vous avez la possibilité de nous laisser un message en utilisant le formulaire ci-dessous ou en nous envoyant un email à l'adresse suivante : 
        <p className='mail'> informations@caledonie-moins-cher.com</p> 
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ color: 'white' }} htmlFor="">
            Votre nom et prénom
          </label>
          <input
            type="text"
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }} htmlFor="">
            Votre email
          </label>
          <input
            type="email"
            placeholder="entrez votre email"
            value={responseMail}
            onChange={(e) => setResponseMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }} htmlFor="">
            Objet de votre demande
          </label>
          <select
            value={object}
            onChange={(e) => setObject(e.target.value)}
          >
            <option value="Demande de renseignements">
              Demande de renseignements
            </option>
            <option value="Demande de devis">Demande de devis</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="form-group checkbox">
          <label style={{ color: 'white' }} htmlFor="">
            Vous souhaitez être rappelé ?
          </label>

          <input
            type="checkbox"
            name="wantCall"
            id="yes"
            checked={wantCall}
            onChange={() => setWantCall(!wantCall)}
          />
          <label htmlFor="yes">Oui</label>
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }} htmlFor="">
            Votre numéro de téléphone
          </label>
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label style={{ color: 'white' }} htmlFor="">
            Votre message
          </label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-block">Envoyer ma demande</button>
        </div>
      </form>
    </section>
  );
};

export default HomeContacts;
