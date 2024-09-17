





// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { RiArrowRightUpLine } from "react-icons/ri";
// import backgroundImage from "../assets/bg4.png"; // Update the path accordingly

// const Dashboard = () => {
//   const textRef = useRef(null);
//   const buttonRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Text entrance animation
//     gsap.fromTo(
//       textRef.current,
//       { y: 100, opacity: 0 },
//       { y: 0, opacity: 1, duration: 2, ease: "power4.out", delay: 0.5 }
//     );

//     // Cursor-following button animation
//     const moveButton = (e) => {
//       const x = e.clientX - buttonRef.current.offsetWidth / 2;
//       const y = e.clientY - buttonRef.current.offsetHeight / 2;

//       gsap.to(buttonRef.current, {
//         x: x,
//         y: y,
//         duration: 0.2,
//         ease: "power3.out",
//       });
//     };

//     containerRef.current.addEventListener("mousemove", moveButton);

//     return () => {
//       containerRef.current.removeEventListener("mousemove", moveButton);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Main Text */}
//       <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
//         <h1
//           ref={textRef}
//           className="text-[6vw] lg:text-[12vw] font-extrabold leading-tight  text-gray-200 tracking-wide"
//           style={{ fontFamily: "'Poppins', sans-serif" }} // Modern font family
//         >
//           SECURE <br /> YOUR AI <br /> NOW
//         </h1>
//       </div>

//       {/* Button Following Cursor */}
//       <div
//         ref={buttonRef}
//         className="absolute bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full h-[8vw] w-[8vw] flex p-6 items-end justify-end font-semibold  "
//         style={{
//           fontFamily: "'Poppins', sans-serif", // Modern font family
         
//         }}
//       >
//         LEARN MORE
//         <RiArrowRightUpLine className="ml-2 top-0 text-[1.5vw]" />
//       </div>

//       {/* Informational Paragraph */}
//       <div className="absolute bottom-16 right-20 text-white max-w-sm text-xl leading-relaxed">
//         <p style={{ fontFamily: "'Poppins', sans-serif" }}>
//           Protect your AI infrastructure with cutting-edge security solutions.
//           Discover how we can help secure your data and enhance your AI
//           capabilities.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



















import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { RiArrowRightUpLine } from "react-icons/ri";
import backgroundImage from "../assets/bg4.png"; // Update the path accordingly

const Dashboard = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  useEffect(() => {
    // Text entrance animation
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power4.out", delay: 0.5 }
    );

    // Button entrance animation
    gsap.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 1.5 }
    );
  }, []);

  return (
    <div
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Text */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
        <h1
          ref={textRef}
          className="text-[6vw] lg:text-[12vw] font-extrabold leading-tight text-gray-200 tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          SECURE YOUR AI NOW
        </h1>
      </div>

      {/* Separate Button */}
      <div
        ref={buttonRef}
        className="absolute right-40 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full h-[10vw] w-[10vw] flex items-center justify-center"
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Icon */}
        <RiArrowRightUpLine
          ref={iconRef}
          className="text-[3vw] absolute top-2 right-2 "
        />
        {/* Button Text */}
        <span className="text-xl absolute bottom-10 text-center">LEARN MORE</span>
      </div>

      {/* Informational Paragraph */}
      <div className="absolute bottom-16 right-20 text-white max-w-sm text-xl leading-relaxed">
        <p style={{ fontFamily: "'Poppins', sans-serif" }}>
          Protect your AI infrastructure with cutting-edge security solutions.
          Discover how we can help secure your data and enhance your AI
          capabilities.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
