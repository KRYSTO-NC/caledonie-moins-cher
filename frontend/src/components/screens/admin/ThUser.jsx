import React from 'react';
import { useGetUserDetailsQuery } from '../../../slices/userApiSlice';

const ThUser = ({ userId }) => {
  const { data: user, isLoading, isError } = useGetUserDetailsQuery(userId);

  return (
    <th>
      {user ? user.name : 'Inconnu'}
    </th>
  );
};

export default ThUser;