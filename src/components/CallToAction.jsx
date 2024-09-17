import React from 'react';
import { FaPhoneAlt, FaRocket, FaSlack } from 'react-icons/fa';
import cardBgImage from '../assets/dascard.png'; // Import card background image
import sectionBgImage from '../assets/covers.png'; // Import section background image

const CallToAction = () => {
  return (
    <div
      className="relative py-16 px-8"
      style={{
        backgroundImage: `url(${sectionBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-12 leading-tight tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-gradient">
            Secure your GenAI today.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Protect your AI investments with our cutting-edge solutions and personalized support.
          </p>
        </div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card One: Book a Call */}
          <div
            className="card bg-cover bg-center p-6 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url(${cardBgImage})` }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full mr-4">
                  <FaPhoneAlt className="text-white text-3xl animate-spin-slow" />
                </div>
                <h2 className="text-2xl font-bold">Book a call with our team</h2>
              </div>
              <p className="text-lg mb-6">
                Our experts are here to provide personalized guidance and answer all your questions. Let’s discuss how we can help you achieve your goals.
              </p>
              <div className="flex justify-end">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-md flex items-center">
                  Book a Demo <FaPhoneAlt className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Card Two: Get Started for Free */}
          <div
            className="card bg-cover bg-center p-6 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url(${cardBgImage})` }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-4 rounded-full mr-4">
                  <FaRocket className="text-white text-3xl animate-bounce" />
                </div>
                <h2 className="text-2xl font-bold">Get started for free</h2>
              </div>
              <p className="text-lg mb-6">
                Experience the power of our platform with a free trial. No strings attached, just pure innovation at your fingertips.
              </p>
              <div className="flex justify-end">
                <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-md flex items-center">
                  Start for Free <FaRocket className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Card Three: Join Slack Community */}
          <div
            className="card bg-cover bg-center p-6 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url(${cardBgImage})` }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-pink-600 p-4 rounded-full mr-4">
                  <FaSlack className="text-white text-3xl animate-spin-slow" />
                </div>
                <h2 className="text-2xl font-bold">Join our Slack community</h2>
              </div>
              <p className="text-lg mb-6">
                Connect with a vibrant community of professionals and enthusiasts. Share insights, ask questions, and grow together.
              </p>
              <div className="flex justify-end">
                <button className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-semibold py-3 px-6 rounded-md flex items-center">
                  Join our Slack <FaSlack className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
