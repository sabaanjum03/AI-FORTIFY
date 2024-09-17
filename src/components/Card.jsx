import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import sectionBgImage from '../assets/pic2.png'; // Import section background image

// AnimatedCard component with dynamic counter and glass effect
const AnimatedCard = ({ target, description, id }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in milliseconds
    const step = Math.ceil(target / (duration / 20)); // Calculate step size

    const counter = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div
      className="flex flex-col rounded-[30px] justify-center items-center border-[3px] border-opacity-30 border-white bg-transparent backdrop-blur-md p-6 text-center text-white shadow-lg h-[85%] transform transition-transform duration-500 hover:scale-105 hover:border-opacity-60"
      style={{
        background: 'rgba(255, 255, 255, 0.1)', // Glass effect
      }}
    >
      <h2 className="text-5xl font-extrabold mb-2 text-gradient animate-text-wave">{count.toLocaleString()}</h2>
      <p className="mt-2 text-lg">{description}</p>
      <span className="mt-4 text-gray-300 text-sm">{id}</span>
    </div>
  );
};

// Main Card component that renders all AnimatedCard components
const Card = () => {
  useEffect(() => {
    gsap.fromTo(".card", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 }
    );

    gsap.fromTo(".header-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      className="relative flex flex-col items-center bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${sectionBgImage})` }}
    >
      <div className="text-center text-white mb-12">
        <h1 className="header-text text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Impact in Numbers
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-8">
        <AnimatedCard
          target={50000}
          description="In funding secured for our clients"
          id="/001"
        />
        <AnimatedCard
          target={1200}
          description="Awards backing our excellence"
          id="/002"
        />
        <AnimatedCard
          target={2015}
          description="Founded, 9 years of experience"
          id="/003"
        />
        <AnimatedCard
          target={25000}
          description="Monthly E-commerce visits"
          id="/004"
        />
        <AnimatedCard
          target={300}
          description="Increase in sign-up conversion rate"
          id="/005"
        />
        <AnimatedCard
          target={42}
          description="Increase in the app’s retention rate"
          id="/006"
        />
      </div>
    </div>
  );
};

export default Card;
