"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Remove = ({id}) => {
    const router = useRouter()
    const removeUser = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/register/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.push("/");
            }
        }
    };
  return (
    <div>
      <button
        onClick={removeUser}
        className="bg-red-700 text-white px-4 py-2 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Remove;
