import React from 'react'
import { useGetUserDetailsQuery } from '../../../slices/userApiSlice'

const ThUser = ({userId}) => {

 const {data: user, isLoading, isError} = useGetUserDetailsQuery(userId)
 console.log(user);
  return (
    <th>
      {user.name}
    </th>
  )
}

export default ThUser