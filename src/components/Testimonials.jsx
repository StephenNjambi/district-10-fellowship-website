import React from 'react';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Member',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue turpis non nunc pretium, vitae placerat lorem pharetra.',
    },
    {
      name: 'Jane Smith',
      role: 'Volunteer',
      comment: 'Vivamus efficitur, purus non fermentum malesuada, metus mauris luctus justo, vel efficitur felis justo ut magna.',
    },
    {
      name: 'Michael Johnson',
      role: 'Participant',
      comment: 'Fusce convallis nunc quis felis tincidunt, ut convallis elit sollicitudin. Nam vel sollicitudin metus, id condimentum turpis.',
    },
  ];

  return (
    <div className="bg-blue-500 py-20 px-4"> {/* Change the background color class here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg mb-4">{testimonial.comment}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} alt={testimonial.name} />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-bold">{testimonial.name}</div>
                  <div className="text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
