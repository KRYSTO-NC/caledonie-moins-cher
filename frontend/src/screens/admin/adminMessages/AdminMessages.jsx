import React, { useState } from 'react';
import { useGetMessagesQuery } from '../../../slices/messagesApiSlice';
import Loader from '../../../components/shared/loader/Loader';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminMessages = () => {
  const { data: messages, isLoading, isError } = useGetMessagesQuery();
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredMessages =
    selectedStatus === 'all'
      ? messages
      : messages.filter((message) => message.status === selectedStatus);

  return (
    <div className="page-container">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Une erreur est survenue</p>
      ) : (
        <div>
          <h1>Messages ({filteredMessages?.length})</h1>

          <div>
            <label htmlFor="statusFilter">Filtrer par statut: </label>
            <select
              id="statusFilter"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">Tous les messages</option>
              <option value="A traiter">A traiter</option>
              <option value="En attente">En attente</option>
              <option value="Terminé">Terminé</option>
            </select>
          </div>

          {filteredMessages.length === 0 ? (
            <p className="red-info">Aucun messages</p>
          ) : (
            <table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Objet</th>
                  <th>Produit</th>
                  <th>Utilisateur</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message._id}>
                    <td>{message.status}</td>
                    <td>{new Date(message.createdAt).toLocaleDateString()}</td>
                    <td>{message.object}</td>

                    {message.product ? (
                      <td>
                        {' '}
                        <Link
                          target="_blank"
                          to={`/product/${message.product._id}`}
                        >
                          {message.product.numMail}{' '}
                        </Link>{' '}
                      </td>
                    ) : (
                      <td>Produit non spécifié</td>
                    )}
                    {message.user ? (
                      <>
                        <td>{message.user.name}</td>
                      </>
                    ) : (
                      <>
                        <td>
                          <FaTimes />
                        </td>
                      </>
                    )}

                    <td>{message.responseMail}</td>
                    <td>{message.phone}</td>
                    <td>
                      <Link to={`/admin/message/${message._id}`}>
                        <button variant="light" className="btn-sm">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}

export default AdminMessages
