import React, { useRef, useEffect } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri'; // Importing the new arrow icon
import gsap from 'gsap';

const Asksec = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Mouse move effect for the image
    const onMouseMove = (e) => {
      gsap.to(imageRef.current, {
        x: e.clientX - containerRef.current.getBoundingClientRect().left - imageRef.current.offsetWidth / 2,
        y: e.clientY - containerRef.current.getBoundingClientRect().top - imageRef.current.offsetHeight / 2,
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
        duration: 0.5,
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', onMouseMove);

    // Section entrance animation
    const animateSection = () => {
      gsap.fromTo(
        itemsRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', stagger: 0.3 }
      );

      // Icon up-down animation
      gsap.fromTo(
        ".arrow-icon",
        { y: -5 },  // Initial position
        {
          y: 5,     // Final position
          repeat: -1,  // Repeat infinitely
          yoyo: true,  // Reverse animation
          duration: 1, // Duration of each cycle
          ease: 'power1.inOut'
        }
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSection();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  const aiSecurityQuestions = [
    "How can AI enhance cybersecurity in 2024?",
    "What are the key challenges of securing AI systems?",
    "How to implement ethical AI security practices?",
    "Why AI-driven security is crucial for enterprises?",
  ];

  return (
    <div
      ref={containerRef}
      className="h-screen w-full  relative px-[10.5vw] pt-[5vw] pb-[8vw]  bg-black flex items-center border-t border-gray-800 justify-between"
    >
      <div className="h-full w-2/5 flex flex-col items-start justify-between pt-3 space-y-4">
        <p className="text-[4vw] text-white leading-tight tracking-wide">
          Insights into AI Security and Protection Strategies
        </p>
        <h5 className="text-white w-3/4 font-light text-[1.1vw]">
          Discover the latest advancements in AI-driven security, explore best practices to protect your data, and
          stay ahead of emerging threats with our expert insights and resources.
        </h5>
      </div>

      <div className="h-full w-1/2">
        {aiSecurityQuestions.map((question, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="relative pt-[1vw] pb-[5vw] border-b border-gray-800 opacity-0 transform transition-all duration-500 ease-in-out group hover:bg-gray-900 hover:shadow-lg"
          >
            <h2 className="text-[1.4vw] text-white font-light flex items-center justify-between group-hover:text-gray-200 transition duration-300 ease-in-out">
              {question}
            </h2>
            <RiArrowRightUpLine className="arrow-icon  absolute top-0 right-0 m-2 text-white transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-400" />
          </div>
        ))}
      </div>

      <img
        ref={imageRef}
        src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp"
        alt="AI Security"
        className="absolute h-[7vw] w-[7vw] rounded-full object-cover opacity-0 scale-0 pointer-events-none"
      />
    </div>
  );
};

export default Asksec;
