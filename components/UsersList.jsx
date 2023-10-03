import Link from 'next/link'
import React from 'react'

const UsersList = ({email, id}) => {
  return (
    <Link href={`details/${id}`} className=' flex justify-between items-center gap-10 border-l-2 border-lime-500  p-4 m-5 hover:border-2'>
      <div>
        {email}
      </div>
      
    </Link>
  )
}

export default UsersList