import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Dinstrict 10 Fellowship Group</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-200">About</a>
          </li>
          <li>
            <a href="/events" className="text-white hover:text-gray-200">Events</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
