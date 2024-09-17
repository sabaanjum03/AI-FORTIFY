// import React from 'react';
// import backgroundImage from '../assets/pic1.png'; // Ensure you have the correct path to your image

// const Section = () => {
//   return (
//     <section
//       className="bg-black text-white py-20 px-8 md:px-24 flex flex-col items-start text-left space-y-8"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <h1 className="text-4xl md:text-6xl font-bold">
//         Lightning fast APIs. <br />
//        <span className='text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 hover:animate-gradient-hover '>Devs loved</span> , hacker hated.
//       </h1>
//       <p className="text-xl md:text-2xl max-w-2xl">
//         Integrates with your applications in minutes.
//       </p>
//       <p className="text-lg md:text-xl max-w-2xl">
//         Continuously evolving threat intelligence.
//       </p>
//       <p className="text-lg md:text-xl max-w-2xl">
//         Works with any model and stack.
//       </p>
//       <div className="flex space-x-4 mt-8">
//         <a
//           href="#"
//           className="bg-white text-black py-3 px-6 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-300 transition"
//         >
//           Book a demo
//         </a>
//         <a
//           href="#"
//           className="border border-white py-3 px-6 rounded-lg text-lg md:text-xl font-semibold hover:bg-white hover:text-black transition"
//         >
//           Start for free
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Section;














import React, { useRef, useEffect } from 'react';
import backgroundImage from '../assets/pic1.png'; // Ensure you have the correct path to your image
import videoSource from '../assets/acron2.mp4'; // Ensure you have the correct path to your video file

const Section = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play(); // Play video when section is in view
        } else {
          videoElement.pause(); // Pause video when section is out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="bg-black text-white py-20 px-8 md:px-24 flex flex-col md:flex-row items-start text-left space-y-8 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '0',
        marginRight: '0',
      }}
    >
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Lightning fast APIs. <br />
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 hover:animate-gradient-hover">
            Devs loved
          </span>
          , hacker hated.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          Integrates with your applications in minutes.
        </p>
        <p className="text-lg md:text-xl max-w-2xl">
          Continuously evolving threat intelligence.
        </p>
        <p className="text-lg md:text-xl max-w-2xl">Works with any model and stack.</p>
        <div className="flex space-x-4 mt-8">
          <a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-300 transition"
          >
            Book a demo
          </a>
          <a
            href="#"
            className="border border-white py-3 px-6 rounded-lg text-lg md:text-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Start for free
          </a>
        </div>
      </div>

      {/* Right Video */}
      <div className="w-full mr-0 right-0 md:w-1/2 border-[3px] border-white  rounded-lg h-auto relative">
        <video
          ref={videoRef}
          src={videoSource}
          className="w-full h-full object-cover transform transition-all duration-1000 ease-in-out hover:scale-105 hover:rotate-3 hover:-translate-y-1"
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default Section;





