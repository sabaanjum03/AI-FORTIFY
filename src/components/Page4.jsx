

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// const Page4 = () => {
//   // Refs to control video elements
//   const videoRefs = [useRef(null), useRef(null), useRef(null)];
//   const containerRefs = [useRef(null), useRef(null), useRef(null)];

//   useEffect(() => {
//     const videos = videoRefs.map(ref => ref.current);
//     const containers = containerRefs.map(ref => ref.current);

//     const onMouseEnter = (video) => {
//       gsap.to(video, { opacity: 1, duration: 0.5, ease: "power2.out" });
//       video.play();
//     };

//     const onMouseLeave = (video) => {
//       gsap.to(video, { opacity: 0, duration: 0.5, ease: "power2.out" });
//       video.pause();
//       video.currentTime = 0;
//     };

//     containers.forEach((container, index) => {
//       const video = videos[index];
//       container.addEventListener("mouseenter", () => onMouseEnter(video));
//       container.addEventListener("mouseleave", () => onMouseLeave(video));
//     });

//     return () => {
//       containers.forEach((container, index) => {
//         const video = videos[index];
//         container.removeEventListener("mouseenter", () => onMouseEnter(video));
//         container.removeEventListener("mouseleave", () => onMouseLeave(video));
//       });
//     };
//   }, []);

//   return (
//     <div id="page4" className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-white relative pb-[13vh]">
//       {/* Section 1 */}
//       <div ref={containerRefs[0]} className="section w-full h-[72vh] flex items-center justify-between px-[10vw] pt-[13vh] pb-0">
//         {/* Left Content */}
//         <div className="sec-left h-full w-[25%] pt-[3vh] border-t-2 border-black">
//           <h2 className="text-[2.1vw] font-medium font-poppins text-gray-200">Secure You AI Advantage</h2>
//           <p className="text-gray-300 mt-[10vh] text-[1.2vw]">
//             Unlock the true potential of AI for your business. We provide cutting-edge AI products designed to secure your data and enhance your efficiency.
//           </p>
//         </div>

//         {/* Right Content */}
//         <div className="sec-right h-full w-[70%] bg-blanchedalmond relative">
//           <img
//             src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp"
//             alt="Rhea Cover"
//             className="h-full w-full object-cover"
//           />
//           <video
//             ref={videoRefs[0]}
//             muted
//             src="/videos/acron.mp4"
//             className="h-full w-full absolute top-0 left-0 object-cover opacity-0 transition-opacity ease-linear duration-100"
//           />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div ref={containerRefs[1]} className="section w-full h-[72vh] flex items-center justify-between px-[10vw] pt-[13vh] pb-0">
//         {/* Left Content */}
//         <div className="sec-left h-full w-[25%] pt-[3vh] border-t-2 border-black">
//           <h2 className="text-[2.1vw] font-medium text-gray-200 font-poppins">AI Security Solutions</h2>
//           <p className="text-gray-300 mt-[10vh] text-[1.2vw]">
//             Our AI-driven security solutions protect your organization from modern cyber threats while optimizing your workflow.
//           </p>
//         </div>

//         {/* Right Content */}
//         <div className="sec-right h-full w-[70%] bg-blanchedalmond relative">
//           <img
//             src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65cb66041ce86ac3784aaba1_Afrotech%20-%20cover_horizontal.webp"
//             alt="AfroTech Cover"
//             className="h-full w-full object-cover"
//           />
//           <video
//             ref={videoRefs[1]}
//             muted
//             src="https://lazarev.kiev.ua/cases/la24/afrotech-cover-big.mp4"
//             className="h-full w-full absolute top-0 left-0 object-cover opacity-0 transition-opacity ease-linear duration-100"
//           />
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div ref={containerRefs[2]} className="section w-full h-[72vh] flex items-center justify-between px-[10vw] pt-[13vh] pb-0">
//         {/* Left Content */}
//         <div className="sec-left h-full w-[25%] pt-[3vh] border-t-2 border-black">
//           <h2 className="text-[2.1vw] font-medium text-gray-200 font-poppins">Advanced AI Products</h2>
//           <p className="text-gray-900 mt-[10vh] text-[1.2vw]">
//             Explore our advanced AI products designed for scalability, security, and efficiency across multiple sectors.
//           </p>
//         </div>

//         {/* Right Content */}
//         <div className="sec-right h-full w-[70%] bg-blanchedalmond relative">
//           <img
//             src="https://cdn.prod.website-files.com/64a5e6675a4159253d0ee3e0/655f63a7ea3d8b7bae8ffda4_Video.webp"
//             alt="Advanced AI Cover"
//             className="h-full w-full object-cover"
//           />
//           <video
//             ref={videoRefs[2]}
//             muted
//             src="https://lazarev.kiev.ua/cases/la24/pika-cover-big-s.mp4"
//             className="h-full w-full absolute top-0 left-0 object-cover opacity-0 transition-opacity ease-linear duration-100"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page4;












































import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Page4 = () => {
  // Refs to control video and container elements
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    const onMouseEnter = () => {
      gsap.to(video, { opacity: 1, duration: 0.5, ease: "power2.out" });
      video.play();
    };

    const onMouseLeave = () => {
      gsap.to(video, { opacity: 0, duration: 0.5, ease: "power2.out" });
      video.pause();
      video.currentTime = 0;
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div id="page4" className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-white relative pb-[13vh]">
      {/* Section 1 */}
      <div ref={containerRef} className="section w-full h-[72vh] flex items-center justify-between px-[10vw] pt-[13vh] pb-0">
        {/* Left Content */}
        <div className="sec-left h-full w-[25%] pt-[3vh] border-t-2 border-black">
          <h2 className="text-[2.1vw] font-medium font-poppins text-gray-200">Secure Your AI Advantage</h2>
          <p className="text-gray-300 mt-[10vh] text-[1.2vw]">
            Unlock the true potential of AI for your business. We provide cutting-edge AI products designed to secure your data and enhance your efficiency.
          </p>
        </div>

        {/* Right Content */}
        <div className="sec-right h-full w-[70%] bg-blanchedalmond relative">
          <img
            src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp"
            alt="Rhea Cover"
            className="h-full w-full object-cover"
          />
          <video
            ref={videoRef}
            muted
            src="/videos/acron.mp4"
            className="h-full w-full absolute top-0 left-0 object-cover opacity-0 transition-opacity ease-linear duration-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;


