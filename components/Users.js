import React from 'react'
import UsersList from './UsersList';

const getAllUsers = async()=>{
    try {
        const res = await fetch('http://localhost:3000/api/register',{
            cache: 'no-store'
        });
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const Users = async () => {
    const {users} = await getAllUsers()
  return (
    <div>
        {users ? users.map((user)=>(
            <UsersList email={user.email} id={user.id}/>
        )) : 'No data'}
    </div>
  )
}

export default Users