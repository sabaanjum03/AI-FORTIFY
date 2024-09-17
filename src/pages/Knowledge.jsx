

import React, { useEffect, useState, useRef } from 'react';
import videoSrc from '../assets/acron.mp4'; // Import the video
import imageSrc from '../assets/fram.png'; // Import an example image

const Knowledge = () => {
  const [fundingCount, setFundingCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let fundingStart = 0;
    let awardsStart = 0;
    const fundingEnd = 500; // 500M+
    const awardsEnd = 120; // 120+

    const fundingInterval = setInterval(() => {
      if (fundingStart < fundingEnd) {
        fundingStart += 10;
        setFundingCount(fundingStart);
      }
    }, 50);

    const awardsInterval = setInterval(() => {
      if (awardsStart < awardsEnd) {
        awardsStart += 2;
        setAwardsCount(awardsStart);
      }
    }, 50);

    return () => {
      clearInterval(fundingInterval);
      clearInterval(awardsInterval);
    };
  }, []);

  // Auto-play video when it comes into view
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          videoRef.current.play();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
      
      {/* Left Side - Information Section */}
      <div className="relative bg-black text-white p-8 w-full lg:w-[60%] flex flex-col justify-start shadow-lg rounded-lg m-4 lg:m-8">
        
        {/* Video Section */}
        <div className="relative w-full h-auto mb-8">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            muted
          />
        </div>

        {/* Stats and Information Section */}
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold mb-4">Secure Your AI Future</h2>
            <p className="text-lg mb-4">
              We specialize in cutting-edge AI solutions to help you stay ahead in a rapidly evolving digital landscape. From AI-driven analytics to automated customer engagement, our services are designed to secure your competitive advantage.
            </p>
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="mb-4 lg:mb-0">
                <p className="text-6xl font-bold text-blue-400">{fundingCount}M+</p>
                <p className="text-lg">In funding raised by our clients.</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-blue-400">{awardsCount}+</p>
                <p className="text-lg">International awards won.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <blockquote className="text-lg italic border-l-4 border-blue-400 pl-4">
              “Lazarev fostered a positive engagement by delivering a navigable site that allowed users to absorb information quickly.”
            </blockquote>
            <p className="text-xl font-semibold">BOYD HOBBS</p>
            <p className="text-sm">PRESIDENT & OWNER, NODO FILM SYSTEMS</p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form Section */}
      <div 
        className="relative bg-cover bg-center text-white p-8 w-full lg:w-[40%] flex flex-col justify-between"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
          <h2 className="text-[4vw] font-bold mb-5">Let's Create Something Epic Together.</h2>
          <form className="space-y-4 text-[1vw]">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 focus:placeholder-opacity-100 placeholder-opacity-50"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 focus:placeholder-opacity-100 placeholder-opacity-50"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Company Name *"
                className="w-full p-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 focus:placeholder-opacity-100 placeholder-opacity-50"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Project Details *"
                className="w-full p-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 focus:placeholder-opacity-100 placeholder-opacity-50 h-32 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-3xl bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Explain Project Idea
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Knowledge ;
