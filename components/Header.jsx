import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-center py-6">
      <div className="w-1/3 mx-auto flex justify-between">
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/create">Create</Link>
        </div>
        <div>
          <Link href="#">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
