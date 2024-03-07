import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative bg-gray-800 text-white py-20 px-4 flex items-center"
      style={{
        backgroundImage: "url('https://imgs.search.brave.com/L2asOpnegHMcYInW049uaHUpRA11P27CULyz-GCA86o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iMjIw/MzgwNC5zbXVzaGNk/bi5jb20vMjIwMzgw/NC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNS9iaWJsZS1z/dHVkeS5qcGc_bG9z/c3k9MSZzdHJpcD0x/JndlYnA9MQ')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '700px', // Adjust the height as needed
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10 bg-white bg-opacity-75 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to D10 Bible Study Group</h1>
        <p className="text-lg mb-8">Join us as we explore the depths of God's Word together</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">Join Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
