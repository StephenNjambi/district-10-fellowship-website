import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Sample leaders data
  const leaders = [
    {
      role: 'Chair',
      name: 'Caroline Ndonye',
      image: 'https://imgs.search.brave.com/QvhzqNsPR7rM7qkfsfE-Doad5wWK7NUu1C8AYSrl2Sc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/NjMxMTk5NC9waG90/by9hZnJpY2FuLWxl/YWRlci1tYW5hZ2Vy/LWFuZC1jZW8td2l0/aC1hLWJ1c2luZXNz/LXdvbWFuLWluLXRo/ZS1vZmZpY2Utd2l0/aC1oZXItdGVhbS1p/bi10aGUud2VicD9i/PTEmcz0xNzA2Njdh/Jnc9MCZrPTIwJmM9/MkVzdGQ4VTBLb0FO/c2xXSzBtckpVTlpW/Sjd5SjluT1JwQjEz/cmpfcTYyST0',
    },
    {
      role: 'Vice Chair',
      name: 'Jane Smith',
      image: 'https://media.istockphoto.com/id/1441980127/photo/successful-mature-adult-businessman-stands-in-corporate-office.jpg?s=612x612&w=0&k=20&c=k-mT8UQ57BinOoCkfV_d9Ey3p_jG6oJaqt8GRfEJl4g=',
    },
    {
      role: 'Secretary',
      name: 'Jean Eyase',
      image: 'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=',
    },
    {
      role: 'Finance',
      name: 'Emily Brown',
      image: 'https://media.istockphoto.com/id/1482994186/photo/black-man-portrait-smile-or-corporate-worker-for-financial-growth-or-accounting-work-company.jpg?s=612x612&w=0&k=20&c=c41iMFlvrOTAkM-1mlPO-wPYazHY3ONOL9se3LuYS5c=',
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-center mb-24">
          D10 is among the district subgroups for Bible study groups from Lavington United Church. We gather at the church every second Sunday of the month for Bible study and fellowship. Our study materials are provided by Lavington United Church for the districts to use.
        </p>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img className="w-full h-40 object-cover" src={leader.image} alt={leader.role} />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{leader.role}</h3>
                <p className="text-sm">{leader.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
