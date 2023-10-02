import Remove from '@/components/Remove';
import React from 'react'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/register/${id}`, {
    cache: "no-store",
  });
  
  return res.json();
}


const page = async ({ params }) => {
  const { id } = params;
  const users = await getData(id);
  return (
    <div className='text-center'>
      <h1>{users.id}</h1>
      <h1>{users.email}</h1>
      <h1>{users.password}</h1>

    <Remove id={users.id}/>
    </div>
  )
}

export default page