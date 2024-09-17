import React from 'react';

// Replace these with your actual image paths
import userImage from '../assets/covers.png'; // Path to the user's image
import logoImage from '../assets/cover.png'; // Path to the logo image
import sectionBgImage from '../assets/cover.png'; // Path to the background image

const TestimonialSection = () => {
  return (
    <div
      className="relative flex items-center min-h-screen overflow-hidden bg-fixed bg-center bg-cover px-8"
      style={{
        backgroundImage: `url(${sectionBgImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header on Left Side */}
      <div className="relative text-white top-1/2 left-2 transform -translate-y-1/2 z-20">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-10">
          Leading enterprises, foundation model providers, and startups{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
            trust Lakera to protect their AI.
          </span>
        </h1>
      </div>

      {/* Testimonial Block Covering Max Width */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-40 p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          {/* User Info */}
          <div className="flex items-center mb-4 md:mb-0 md:mr-6">
            <img
              src={userImage}
              alt="User"
              className="w-16 h-16 rounded-full mr-4 border-2 border-white"
            />
            <div>
              <h3 className="font-semibold text-white text-2xl">Seraphina Goldfarb-Tarrant</h3>
              <p className="text-gray-400  text-sm">Head of Safety at Cohere</p>
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg text-white italic mb-4 md:mb-0 flex-grow text-center md:text-left">
            "We have been impressed throughout our collaboration with Lakera."
          </blockquote>
        </div>
        <p className="text-base text-[30px] mb-10 text-gray-400 text-center md:text-left">
          The team has extensive expertise and deep understanding of complex security challenges like prompt injection attacks and other AI security threats. We look forward to continuing to work together to address these.
        </p>

        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logoImage} alt="Logo" className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;









