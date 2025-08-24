import React from 'react'
import { Link } from 'react-router';
const Navbar = () => { 
  return(
    <div className="bg-gray-800 p-3 ">
      <div className="flex justify-between items-center m-3">
        <h1 className="text-white">Note Board</h1>
        <Link to="/createnote">
        <button className="text-white bg-green-500 p-3 border-2 rounded-3">+ Add Note</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar