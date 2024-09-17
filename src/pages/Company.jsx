

import React, { useState, useEffect } from "react";
import { FaUserTie, FaHandshake, FaDesktop, FaChartLine } from "react-icons/fa";
import teamImage1 from "../assets/d2.jpg"; // Replace with actual path
import teamImage2 from "../assets/d1.jpg"; // Replace with actual path
import teamImage3 from "../assets/d3.jpg"; // Replace with actual path
import "tailwindcss/tailwind.css";

const CombinedPage = () => {
  // State to manage the count for each number in Company Section
  const [employees, setEmployees] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [platforms, setPlatforms] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  // useEffect to create the counting effect
  useEffect(() => {
    const targetValues = {
      employees: 150,
      customers: 100,
      platforms: 50,
      activeUsers: 500,
    };

    const incrementCounts = () => {
      const increment = 1;

      const updateCount = (stateSetter, targetValue) => {
        let current = 0;
        const timer = setInterval(() => {
          if (current >= targetValue) {
            clearInterval(timer);
          } else {
            current += increment;
            stateSetter(current);
          }
        }, 10); // Adjust timing for slower/faster effect
      };

      updateCount(setEmployees, targetValues.employees);
      updateCount(setCustomers, targetValues.customers);
      updateCount(setPlatforms, targetValues.platforms);
      updateCount(setActiveUsers, targetValues.activeUsers);
    };

    incrementCounts();
  }, []);

  const teamMembers = [
    {
      name: "Avatar",
      title: "CEO and Founder",
      image: teamImage1,
      linkedin: "https://www.linkedin.com/in/agnes-mickelson",
    },
    {
      name: "Kiyoshi",
      title: "VP Sales",
      image: teamImage2,
      linkedin: "https://www.linkedin.com/in/gustavo-de-silva",
    },
    {
      name: "Rou",
      title: "CTO and Founder",
      image: teamImage3,
      linkedin: "https://www.linkedin.com/in/halou-wang",
    },
  ];

  return (
    <div className="w-full">
      {/* Section 1: Company Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-white">
        {/* Container with distance between sides */}
        <div className="w-full max-w-8xl grid grid-cols-1 lg:grid-cols-2 gap-12 p-24">
          {/* Left Side: Main Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1
              className="text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-snug"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Secure AI for the Modern World
            </h1>
            <p
              className="text-lg lg:text-xl text-gray-200 mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Discover advanced AI solutions that prioritize security and
              innovation. Our expertise in AI will help you safeguard your data
              while enhancing your digital strategy.
            </p>
            <p
              className="text-lg lg:text-xl text-gray-200 mb-10"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our cutting-edge technology ensures that your digital
              transformation is both secure and efficient. We offer a range of
              services designed to meet the highest standards of safety and
              performance, allowing you to focus on what matters most: growing
              your business and engaging with your audience.
            </p>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Feature Card 1 */}
            <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-2xl p-8 text-left transition duration-300 hover:shadow-lg hover:bg-gray-700 flex flex-col justify-end h-72">
              <FaUserTie className="text-gray-200 text-5xl absolute top-3 left-4 mt-2 ml-2" />
              <h3
                className="text-6xl text-white font-semibold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {employees}
              </h3>
              <p
                className="text-gray-300 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Employees
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-2xl p-8 text-left transition duration-300 hover:shadow-lg flex flex-col justify-end h-72">
              <FaHandshake className="text-gray-200 text-5xl absolute top-3 left-4 mt-2 ml-2" />
              <h3
                className="text-6xl text-white font-semibold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                +{customers}
              </h3>
              <p
                className="text-gray-300 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Customers
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-2xl p-8 text-left transition duration-300 hover:shadow-lg flex flex-col justify-end h-72">
              <FaDesktop className="text-gray-200 text-5xl absolute top-3 left-4 mt-2 ml-2" />
              <h3
                className="text-6xl text-white font-semibold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {platforms}
              </h3>
              <p
                className="text-gray-300 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Supported Platforms
              </p>
            </div>
            {/* Feature Card 4 */}
            <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-8 text-left transition duration-300 hover:shadow-lg flex flex-col rounded-2xl justify-end h-72">
              <FaChartLine className="text-gray-200 text-5xl absolute top-3 left-4 mt-2 ml-2" />
              <h3
                className="text-6xl text-white font-semibold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {activeUsers.toLocaleString()}
              </h3>
              <p
                className="text-gray-300 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Daily Active Users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Team Section */}
      <section className="flex flex-col items-center bg-white justify-center min-h-screen w-full p-44">
        <h1 className="text-center bg-slate-200 font-bold text-xl mb-12 px-5 py-1 text-gray-500 rounded-3xl">
          OUR LEADERS
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          <span className="text-gray-400"> MEET THE </span> TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-6 md:px-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Frame-like design around the image */}
              <div className="p-8 rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-between top-0 flex-grow px-6">
                <div>
                  <h3 className="text-5xl font-bold px-2 mb-2 text-gray-200">
                    {member.name}
                  </h3>
                  <p className="text-xl px-2 text-gray-300">{member.title}</p>
                </div>
                {/* LinkedIn link aligned to bottom right */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-gray-300 self-end mb-6 hover:underline"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CombinedPage;



