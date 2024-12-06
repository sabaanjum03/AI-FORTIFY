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
