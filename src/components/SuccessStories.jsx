import React from 'react';
import sectionBgImage from '../assets/pic3.png'; // Path to the background image

const SuccessStories = () => {
  return (
    <div className="flex flex-col relative h-screen bg-black md:flex-row justify-between  text-white items-start p-8 md:py-16"
    style={{ backgroundImage: `url(${sectionBgImage})` }}>
      {/* Left Section */}
      <div className="md:w-1/3 my-40 ml-20 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Success Stories Shaped by Our User Experience Design Agency
        </h1>
      </div>
      
      {/* Right Section */}
      <div className="md:w-2/3 my-40 ml-60 mr-20 space-y-8">
        <div>
          <h2 className="text-[20px] font-semibold text-gray-400 uppercase mb-2">Partnership Mentality</h2>
          <p className="text-[30px] font-semibold text-gray-300">
            Along with taking the lead in designing AI-powered solutions, we embody a partnership mentality. This exact commitment has been the bedrock of our clients’ successes. When you choose to collaborate with us, we promise to be right where your audience's changing desires meet your ambitious business goals. We don't settle for mediocrity; we strive for excellence in every Figma pixel, every touchpoint, and every UX interaction.
          </p>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold text-gray-400 uppercase mb-2">Results</h2>
          <p className="text-[30px] font-semibold text-gray-300">
            That is how we've built 50+ sustainable startup products and helped 400+ brands secure millions in funding, achieve successful acquisitions, and establish themselves as globally recognized companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;


