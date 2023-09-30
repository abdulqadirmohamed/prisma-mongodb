import React from 'react'

const UsersList = ({email}) => {
  return (
    <div className=' flex justify-between items-center gap-10 border-2 border-black p-4 m-5'>
      <div>
        {email}
      </div>
      <button>
        Delete
      </button>
    </div>
  )
}

export default UsersList