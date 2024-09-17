// import React from 'react';
// import { FaArrowRight, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import herobgImage from '../assets/h1.jpg'; // Ensure you have the correct path to your image

// const Hero = ({ height = '900px' }) => {
//   return (
//     <section
//       className="flex items-start justify-start bg-cover bg-center"
//       style={{ 
//         backgroundImage: `url(${herobgImage})`, 
//         height: height 
//       }}
//     >
//       <div className="text-left top-[25%] ml-40 p-8 max-w-4xl mt-20">
//         <h1 className="text-[60px] text-white lg:text-[80px] font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 hover:animate-gradient-hover">
//           Secure AI Solutions
//         </h1>
//         <p className="text-xl lg:text-2xl text-gray-300 mb-6">
//           Our website is dedicated to delivering cutting-edge AI technologies that prioritize security, privacy, and ethical standards. 
//           We empower businesses to harness AI safely and effectively, ensuring a future where innovation and integrity go hand in hand.
//         </p>
//         <div className="flex flex-col items-start space-y-4">
//           <Link 
//             to="/services" 
//             className="relative inline-flex items-center px-8 py-4 rounded-full border-2 text-lg font-semibold text-transparent bg-clip-text transition-all duration-300 neon-border"
//           >
//             <FaArrowRight className="text-xl text-white" />
//             <span className="ml-2 text-white">Explore Our Secure AI Services</span>
//           </Link>
//           <Link 
//             to="/contact" 
//             className="relative inline-flex items-center px-8 py-4 rounded-full border-2 text-lg font-semibold text-transparent bg-clip-text transition-all duration-300 neon-border"
//           >
//             <FaEnvelope className="text-xl text-white" />
//             <span className=" ml-2 text-white">Contact Us</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;







// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import bgImage from '../assets/h1.jpg'; // Replace with your background image

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
//     );

//     gsap.to('.smog-effect', {
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         end: '+=500',
//         scrub: true,
//       },
//       opacity: 0.2,
//       y: -100,
//       ease: 'power2.out',
//     });
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative h-screen flex items-center justify-center bg-cover bg-center text-white font-poppins"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Smog Effect */}
//       <div className="absolute inset-0 smog-effect bg-black opacity-60 mix-blend-overlay"></div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center px-8 md:px-16">
//         <h1 className="text-4xl sm:text-5xl md:text-[8vw] font-extrabold leading-tight tracking-wider">
//           Secure Your AI<br />
//           <span className="text-orange-500">Protect & Innovate</span>
//         </h1>
//         <p className="mt-6 text-sm sm:text-lg md:text-2xl max-w-5xl mx-auto">
//           Our solutions safeguard your AI models against adversarial attacks, ensuring data privacy, model integrity, and secure deployment.
//         </p>
//         <div className="mt-10 flex justify-center space-x-4">
//           <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
//             Get Started
//           </button>
//           <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
//             Learn More
//           </button>
//         </div>
//       </div>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//         <svg
//           className="relative block"
//           viewBox="0 0 1440 320"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#000000"
//             d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,160C672,171,768,213,864,213.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;















import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../assets/h1.jpg'; // Replace with your background image
import MovingDiv from './MovingDiv';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    );

    gsap.to('.smog-effect', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
      opacity: 0.2,
      y: -100,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white font-poppins"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Smog Effect */}
      <div className="absolute inset-0 smog-effect bg-black opacity-60 mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 md:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-[8vw] font-extrabold leading-tight tracking-wider">
          Secure Your AI<br />
          <span className="text-orange-500">Protect & Innovate</span>
        </h1>
        <p className="mt-6 text-sm sm:text-lg md:text-2xl max-w-5xl mx-auto">
          Our solutions safeguard your AI models against adversarial attacks, ensuring data privacy, model integrity, and secure deployment.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>

      {/* Moving Div */}
      <MovingDiv />

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,160C672,171,768,213,864,213.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
