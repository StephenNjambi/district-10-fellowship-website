import React from 'react';

const UpcomingEvents = () => {
  // Sample upcoming events data
  const events = [
    {
      title: 'Community Outreach',
      date: 'March 20, 2024',
      description: 'Join us as we volunteer in the local community to spread love and support.',
    },
    {
      title: 'Youth Retreat',
      date: 'April 5-7, 2024',
      description: 'Our annual youth retreat is coming up. Register now for a weekend of fun and spiritual growth.',
    },
    {
      title: 'Bible Conference',
      date: 'May 15-18, 2024',
      description: 'Save the date for our upcoming Bible conference. More details coming soon.',
    },
  ];

  return (
    <div className="bg-gray-200 py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <p className="text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
