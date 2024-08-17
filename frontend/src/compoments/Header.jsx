import React from 'react'
import { TbBrandAbstract } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-center sm:justify-between bg-black text-gray-300 p-4 px-6 shadow-lg">
        <Link to="/" className="gap-1 hidden sm:flex font-bold bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            <TbBrandAbstract className="size-6 text-[aqua]"/> Abstract | Help Center
        </Link>
        <button className="flex gap-2 items-center font-bold bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text"> 
            <TbBrandAbstract className="size-4 sm:hidden"/>
            Submit a request
        </button>
    </header>
  )
}

export default Header
