import React from 'react';

const Activities = () => {
  return (
    <>
      <div
        className="py-20 px-4"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1282155335/photo/a-kid-reading-the-holy-bible.jpg?s=612x612&w=0&k=20&c=TC0OwkqpSkO1L67YKi4P3p9hdGK4Mm-dWCoiyiTQWQE=')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Make the background image static
        }}
      >
        <div className="max-w-7xl mx-auto text-center bg-white bg-opacity-75 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Our Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Weekly Bible Study</h3>
              <p className="text-lg mb-4">Join us every Wednesday evening for an in-depth study of a selected Bible passage or topic.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">Learn More</button>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sunday Service</h3>
              <p className="text-lg mb-4">Join us every Sunday morning for worship, fellowship, and a message from the Word of God.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">Join Us on Sunday</button>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Missions</h3>
              <p className="text-lg mb-4">We organize missions trips to share the gospel, provide humanitarian aid, and make a positive impact on communities around the world.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">Join a Mission</button>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Retreats</h3>
              <p className="text-lg mb-4">Experience spiritual renewal and deep fellowship at our retreats, where we gather to seek God, study His Word, and grow together.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">Learn More</button>
            </div>
            {/* Add more activity cards as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
