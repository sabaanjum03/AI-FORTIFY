
import React from "react";
import backgroundImage from "../assets/fram.png"; // Adjust the path accordingly

const Statistics = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-dark-bg text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <p className="text-primary uppercase tracking-widest text-xl font-bold">
          Lakera in Numbers
        </p>
        <h1 className="text-6xl font-extrabold mt-4">
          Start fast and stay <span className="text-accent">secure.</span>
        </h1>
      </div>

      {/* Statistics Cards */}
      <div className="h-90 w-50 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-4 px-4">
        <div className="bg-neumorphic-light rounded-lg p-16 w-full max-w-md h-60 text-center shadow-neumorphic transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-6xl font-extrabold text-white">100M+</h2>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            real-world vulnerabilities collected
          </p>
        </div>
        <div className="bg-neumorphic-light rounded-lg p-16 w-full max-w-md h-60 text-center shadow-neumorphic transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-6xl font-extrabold text-white">32%</h2>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            of the vulnerabilities found are critical
          </p>
        </div>
        <div className="bg-neumorphic-light rounded-lg p-16 w-full max-w-md h-60 text-center shadow-neumorphic transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-6xl font-extrabold text-white">&lt; 5mins</h2>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            to integrate Lakera
          </p>
        </div>
       {/* try to set */}
       
        {/* <div className="bg-neumorphic-light rounded-lg p-16 w-full max-w-md h-60 text-center shadow-neumorphic transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-6xl font-extrabold text-white">&lt; 5mins</h2>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            to integrate Lakera
          </p>
        </div>
        <div className="bg-neumorphic-light rounded-lg p-16 w-full max-w-md h-60 text-center shadow-neumorphic transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-6xl font-extrabold text-white">&lt; 5mins</h2>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            to integrate Lakera
          </p>
        </div> */}
      
      </div>
    </div>
    </div>
  );
};

export default Statistics;



