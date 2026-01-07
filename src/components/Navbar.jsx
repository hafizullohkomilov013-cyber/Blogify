import React from 'react'
import BlogfyImg from '../../public/img/SVG.svg'

function Navbar() {
  return (
    <nav className="container flex justify-between ">
      <div className="cursor-pointer flex items-center gap-2 ">
        <img src={BlogfyImg} alt="" />
        <h2 className="text-[#4346EF]">Blogify</h2>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <div className="w-16 h-9 text-white bg-[#4346EF] flex items-center justify-center rounded-xl">
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
