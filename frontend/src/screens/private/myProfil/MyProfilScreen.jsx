import './myProfilScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
  useDeleteUsersMutation,
} from '../../../slices/userApiSlice'
import { logout } from '../../../slices/authSlice'
import Modal from '../../../components/shared/modal/Modal'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const MyProfilScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const { data: profil, isLoading, isError, refetch } = useGetUserDetailsQuery(
    userInfo._id,
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [updatedUsername, setUpdatedUsername] = useState('')
  const [updatedEmail, setUpdatedEmail] = useState('')

  const [updateUser] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUsersMutation()

  const handleUpdateUsername = async () => {
    try {
      await updateUser({
        userId: userInfo._id,
        name: updatedUsername,
      })
      toast.success("Nom d'utilisateur mis à jour avec succès")
      refetch()
      // Optionally, you can refetch the user details after updating.
    } catch (error) {
      console.error('Error updating username:', error)
    }
  }

  const handleUpdateEmail = async () => {
    try {
      await updateUser({
        userId: userInfo._id,
        email: updatedEmail,
      })
      console.log(updateUser)
      toast.success('Email mis à jour avec succès')
      refetch()
    } catch (error) {
      console.error('Error updating email:', error)
    }
  }

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userInfo._id)

      dispatch(logout()) // You need to create a logout action
      toast.success('Votre compte a été supprimé avec succès')
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return (
    <div className="page-container">
      <div className="heading">
        <h1>
          Bienvenue sur votre profil <span> {userInfo.name}</span>
        </h1>
      </div>

      <div className="profil-info-details">
        <h2 className="subtitle">Vos Informations personnelles</h2>
        <div className="profil-detail">
          <h5>Nom d'utilisateur:</h5>
          <p>{profil?.name}</p>
        </div>
        <div className="profil-detail">
          <h5>Email:</h5>
          <p>{profil?.email}</p>
        </div>
      </div>

      <div className="danger-zone">
        <Modal modalBtn="Changer mon email" onConfirm={handleUpdateEmail}>
          <form className="form">
            <div className="form-group">
              <label htmlFor="updatedEmail">Nouvel email:</label>
              <input
                type="email"
                id="updatedEmail"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn">Changer mon email</button>
            </div>
          </form>
        </Modal>

        <Modal
          modalBtn="Changer mon nom d'utilisateur"
          onConfirm={handleUpdateUsername}
        >
          <form className="form">
            <div className="form-group">
              <label htmlFor="updatedUsername">
                Nouveau nom d'utilisateur:
              </label>
              <input
                type="text"
                id="updatedUsername"
                value={updatedUsername}
                onChange={(e) => setUpdatedUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn">Changer mon nom d'utilisateur</button>
            </div>
          </form>
        </Modal>

        <Modal modalBtn="Changer de mots de passe">
          <div className="form">
            <div className="form-group">
              <label htmlFor="password">Ancien mot de passe</label>
              <input type="password" id="password" />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">Nouveau mot de passe</label>
              <input type="password" id="newPassword" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword">
                Confirmer le nouveau mot de passe
              </label>
              <input type="password" id="confirmNewPassword" />
            </div>
            <button className="btn">Changer le mot de passe</button>
          </div>
        </Modal>

        <Modal modalBtn="Supprimer mon compte">
          <h2>Êtes-vous sûr de vouloir supprimer votre compte?</h2>
          <p style={{ color: 'red', fontWeight: 'bolder', fontSize: '2rem' }}>
            Attention !! Cette action est irréversible.
          </p>
          <div className="actions-btns-container">
            {/* Add your logic for Yes and No buttons here */}
            <button
              onClick={handleDeleteUser}
              style={{ backgroundColor: 'red' }}
              className="btn"
            >
              Oui
            </button>
            <button style={{ backgroundColor: 'green' }} className="btn">
              Non
            </button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default MyProfilScreen
