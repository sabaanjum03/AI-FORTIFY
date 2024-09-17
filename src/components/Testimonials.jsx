
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sectionBgImage from '../assets/pic8.png'; // Path to the background image

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
 
  {
    id: 1,
    name: "Nick Chapman",
    position: "Chief Product Officer, Pika AI",
    feedback: "I had the pleasure of working with Maria and Lera backed by the amazing design team at Lazarev, and I cannot recommend them highly enough. From start to finish, they were excellent communicators and made the entire process incredibly smooth.",
    image: "/path/to/image1.jpg"
  },
  {
    id: 1,
    name: "Nick Chapman",
    position: "Chief Product Officer, Pika AI",
    feedback: "I had the pleasure of working with Maria and Lera backed by the amazing design team at Lazarev, and I cannot recommend them highly enough. From start to finish, they were excellent communicators and made the entire process incredibly smooth.",
    image: "/path/to/image1.jpg"
  },
  {
    id: 1,
    name: "Nick Chapman",
    position: "Chief Product Officer, Pika AI",
    feedback: "I had the pleasure of working with Maria and Lera backed by the amazing design team at Lazarev, and I cannot recommend them highly enough. From start to finish, they were excellent communicators and made the entire process incredibly smooth.",
    image: "/path/to/image1.jpg"
  },
  {
    id: 1,
    name: "Nick Chapman",
    position: "Chief Product Officer, Pika AI",
    feedback: "I had the pleasure of working with Maria and Lera backed by the amazing design team at Lazarev, and I cannot recommend them highly enough. From start to finish, they were excellent communicators and made the entire process incredibly smooth.",
    image: "/path/to/image1.jpg"
  },
  {
    id: 1,
    name: "Nick Chapman",
    position: "Chief Product Officer, Pika AI",
    feedback: "I had the pleasure of working with Maria and Lera backed by the amazing design team at Lazarev, and I cannot recommend them highly enough. From start to finish, they were excellent communicators and made the entire process incredibly smooth.",
    image: "/path/to/image1.jpg"
  },
  {
    id: 1,
    name: "Nick Chapman",
    position: "Chief Product Officer, Pika AI",
    feedback: "I had the pleasure of working with Maria and Lera backed by the amazing design team at Lazarev, and I cannot recommend them highly enough. From start to finish, they were excellent communicators and made the entire process incredibly smooth.",
    image: "/path/to/image1.jpg"
  },

  // Add more testimonials here
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const testimonialsRef = useRef([]);

  useEffect(() => {
    const element = containerRef.current;
    gsap.fromTo(
      testimonialsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
 
    <div className="testimonial-section min-h-screen py-20 flex items-start justify-center bg-black
     text-white px-10"
     style={{ backgroundImage: `url(${sectionBgImage})` }}>
      {/* Left Side: Header and Description */}
      <div className="w-full md:w-2/5 flex flex-col justify-start pr-10 sticky top-[20%]  self-start">
        <h2 className="text-6xl font-bold mb-4 leading-tight">
          Clients speak out: what they say about our AI services
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Even though the world of the decentralized web is a next-level experience, it has fundamental issues that hinder your project from growing. Having partnered with various Web3 startups, we developed key steps to address each with design.
        </p>
      </div>

      {/* Right Side: Testimonials */}
      <div ref={containerRef} className="w-full md:w-1/2 text-gray-300 relative px-16 space-y-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (testimonialsRef.current[index] = el)}
            className="testimonial-card"
          >
            <div className="flex items-start mb-4">
              <span className="text-gray-500 mr-4 text-xl">/{index + 1}</span>
              <div>
                <p className="text-2xl  mb-4 leading-tight">"{testimonial.feedback}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full border border-white mt-8 mr-3"
                  />
                  <div>
                    <h3 className="text-lg mt-8 text-red-300 font-bold">{testimonial.name}</h3>
                    <p className="text-sm mt-1  text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Testimonials;












