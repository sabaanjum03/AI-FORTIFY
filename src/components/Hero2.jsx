
import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing icons
import { gsap } from 'gsap'; // Import GSAP for animations
import sectionBgImage from '../assets/pic8.png'; // Path to the background image

const Hero2 = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP animations only run once
    const buttonElement = buttonRef.current;

    // Animate button on load
    gsap.fromTo(
      buttonElement,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 1 }
    );

    // Animate title on load
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 50, color: '#ffffff' },
      { opacity: 1, y: 0, color: '#f3f3f3', duration: 1.5, ease: 'power2.out', delay: 0.5 }
    );

    // Animate description on load
    gsap.fromTo(
      '.hero-description',
      { opacity: 0, y: 50, color: '#aaaaaa' },
      { opacity: 1, y: 0, color: '#e0e0e0', duration: 1.5, ease: 'power2.out', delay: 0.7 }
    );

    // Button hover animation
    gsap.to(buttonElement, {
      scale: 1.1,
      backgroundColor: '#f8f8f8',
      color: '#333',
      paused: true,
      ease: 'power2.out',
      duration: 0.3,
    });

    buttonElement.addEventListener('mouseenter', () => gsap.to(buttonElement, { scale: 1.1 }));
    buttonElement.addEventListener('mouseleave', () => gsap.to(buttonElement, { scale: 1 }));

    // Cleanup event listeners
    return () => {
      buttonElement.removeEventListener('mouseenter', () => gsap.to(buttonElement, { scale: 1.1 }));
      buttonElement.removeEventListener('mouseleave', () => gsap.to(buttonElement, { scale: 1 }));
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover px-8"
      style={{ backgroundImage: `url(${sectionBgImage})` }}
    >
      <div className="relative inset-0 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="hero-title text-[10vw] mt-0 md:text-10xl font-extrabold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400 transition duration-500 ease-in-out hover:scale-105">
            Secure Your AI Solutions
          </h1>
          <p className="hero-description text-gray-300 text-[100px] md:text-2xl max-w-6xl mx-auto mb-8 transition duration-500 ease-in-out hover:text-white">
            We deliver cutting-edge AI technologies prioritizing security, privacy, and ethical standards. Empower your business to harness AI safely and effectively, ensuring a future where innovation and integrity go hand in hand.
          </p>
          <p className="hero-description text-gray-300 text-[100px] md:text-2xl max-w-6xl mx-auto mb-16 mt-20 transition duration-500 ease-in-out hover:text-white">
            Want to see how we do it?
          </p>
          <div>
            <a
              href="/services"
              ref={buttonRef}
              className="inline-flex items-center px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:text-teal-400"
            >
              Explore Our Secure AI Services <FaArrowRight className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;







