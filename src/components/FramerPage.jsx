




import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import video1 from '../assets/acron.mp4'; // Example video files
import video2 from '../assets/acron2.mp4';
import video3 from '../assets/acron.mp4';
import image2 from '../assets/das2.png';
import image4 from '../assets/das4.png';
import image6 from '../assets/das1.png';
import bgImage1 from '../assets/dascard.png';
import bgImage2 from '../assets/dascard.png';
import bgImage3 from '../assets/dascard.png';
import bgImage4 from '../assets/dascard.png';
import bgImage5 from '../assets/dascard.png';
import bgImage6 from '../assets/dascard.png';

gsap.registerPlugin(ScrollTrigger);

const FramerPage = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Images animation (up-down floating effect)
    imagesRef.current.forEach((img) => {
      gsap.fromTo(
        img,
        { y: 0 },
        {
          y: -20,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Section animations
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-12 flex flex-col items-center">
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-20">
        {/* <h1 className="text-[4vw] font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-blue-300 ">
          Comprehensive Security <br> <span> Solutions for AI Products </span> </br>
        </h1> */}
        <h1 className="text-[3vw] font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" style={{ fontFamily: 'Poppins, sans-serif' }}> Solutions for AI Products
</h1>


        <p className="text-xl mt-4">
          We ensure that your AI systems are protected from a wide range of attacks, allowing you to focus on innovation.
        </p>
      </div>

      {/* 6 Div Section */}
      <div className="grid grid-cols-2 gap-7 max-w-7xl mx-auto">
        {/* Row 1 */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="w-full md:w-60%  rounded-[2vw] p-8 shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage1})` }}
        >
          <h2 className="text-2xl font-semibold">AI Security Architecture</h2>
          <p className="mt-4">
            Our AI security architecture is designed to protect your systems from data breaches, model inversion attacks, and more.
          </p>
          {/* Replacing Image with Video */}
          <video
            ref={(el) => (imagesRef.current[0] = el)}
            src={video1}
            alt="Design"
            className="mt-8 rounded"
            autoPlay
            loop
            muted
          />
        </div>

        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-full md:w-40% rounded-[2vw] p-8 shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage2})` }}
        >
          <h2 className="text-2xl font-semibold">Real-time Threat Detection</h2>
          <p className="mt-4">
            We provide real-time threat detection to safeguard your AI from adversarial attacks and unauthorized access.
          </p>
          <img
            ref={(el) => (imagesRef.current[1] = el)}
            src={image2}
            alt="Collaborate"
            className="mt-8 rounded"
          />
        </div>

        {/* Row 2 */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="w-full md:w-60% p-8 rounded-[2vw] shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage3})` }}
        >
          <h2 className="text-2xl font-semibold">Secure Model Deployment</h2>
          <p className="mt-4">
            Ensure that your AI models are deployed securely with measures to prevent model theft and tampering.
          </p>
          <img
            ref={(el) => (imagesRef.current[2] = el)}
            src={image4}
            alt="Advanced Features"
            className="mt-8 rounded"
          />
        </div>
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="w-full md:w-40% rounded-[2vw] p-8 shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage4})` }}
        >
          <h2 className="text-2xl font-semibold">Compliance and Monitoring</h2>
          <p className="mt-4">
            Stay compliant with industry standards and regulations, with continuous monitoring of your AI systems.
          </p>
          {/* Replacing Image with Video */}
          <video
            ref={(el) => (imagesRef.current[3] = el)}
            src={video2}
            alt="Community"
            className="mt-8 rounded"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Row 3 */}
        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="w-full md:w-40% p-8 rounded-[2vw] shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage5})` }}
        >
          <h2 className="text-2xl font-semibold">Data Privacy and Integrity</h2>
          <p className="mt-4">
            Protect the privacy and integrity of your data, ensuring that your AI systems are both secure and trustworthy.
          </p>
          {/* Replacing Image with Video */}
          <video
            ref={(el) => (imagesRef.current[4] = el)}
            src={video3}
            alt="Integrations"
            className="mt-8 rounded"
            autoPlay
            loop
            muted
          />
        </div>
        <div
          ref={(el) => (sectionsRef.current[5] = el)}
          className="w-full md:w-60% p-8 rounded-[2vw] shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage6})` }}
        >
          <h2 className="text-2xl font-semibold">24/7 Support and Incident Response</h2>
          <p className="mt-4">
            Our team is available 24/7 to provide support and respond to any security incidents that may arise.
          </p>
          <img
            ref={(el) => (imagesRef.current[5] = el)}
            src={image6}
            alt="Support"
            className="mt-8 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default FramerPage;





