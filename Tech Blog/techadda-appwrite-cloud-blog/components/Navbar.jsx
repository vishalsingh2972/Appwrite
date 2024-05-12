import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-lg font-bold">Tech Adda</a>
        </div>
        <div className="hidden md:block">
          <a href="#" className="text-white mx-4">Home</a>
          <a href="#" className="text-white mx-4">About</a>
          <a href="#" className="text-white mx-4">Services</a>
          <a href="#" className="text-white mx-4">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
