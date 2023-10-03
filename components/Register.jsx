'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
    const router = useRouter()
    const [data, setData] = useState ({
        name: "",
        email: "",
        password: ""
    })

    const registerUser = async (e) =>{
      e.preventDefault();

        const res = await fetch('/api/register/',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data})
        })
        const userInfo = await res.json()
        console.log(userInfo)
        router.push('/')
    }
    
  return (
    <div>
      <form onSubmit={registerUser}>
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 outline-none border-2 border-blue-700 my-2"
            value={data.name}
            onChange={(e)=> setData({...data, name: e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-2 outline-none border-2 border-blue-700 my-2"
            value={data.email}
            onChange={(e)=> setData({...data, email: e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 outline-none border-2 border-blue-700 my-2"
            value={data.password}
            onChange={(e)=> setData({...data, password: e.target.value})}
          />
        </div>
        <div>
          <button  className="bg-blue-700 text-white px-4 py-2">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
