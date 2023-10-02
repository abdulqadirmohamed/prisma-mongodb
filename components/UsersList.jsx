import Link from 'next/link'
import React from 'react'

const UsersList = ({email, id}) => {
  return (
    <Link href={`details/${id}`} className=' flex justify-between items-center gap-10 border-2 border-black p-4 m-5'>
      <div>
        {email}
      </div>
      
    </Link>
  )
}

export default UsersList