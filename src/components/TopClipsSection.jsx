
// import React from 'react';
// import clip1 from '../assets/das1.png';
// import clip2 from '../assets/das2.png';
// import clip3 from '../assets/das3.png';

// const TopClipsSection = () => {
//   return (
//     <div className="bg-black text-white py-16 px-8 font-sans">
//       {/* Header Section */}
//       <div className="max-w-6xl mx-auto text-center">
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight transform transition duration-500 hover:scale-105">
//           TROY <span className="block">STOCKERT</span>
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-400 tracking-wide">
//           PROFESSIONAL PLAYER FOR TEAM TREXX
//         </p>
//       </div>

//       {/* Gradient Header */}
//       <div className="mt-12 max-w-6xl mx-auto">
//         <div className="bg-gradient-to-r from-orange-500 to-purple-800 p-8 text-center rounded-lg">
//           <h2 className="text-3xl font-bold uppercase tracking-wider">
//             TROY'S TOP CLIPS
//           </h2>
//         </div>
//       </div>

//       {/* Clips Section */}
//       <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Clip 1 */}
//         <div className="bg-black border border-orange-600 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
//           <img src={clip1} alt="Clip 1" className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <p className="text-center font-semibold text-lg transform transition duration-500 hover:scale-110">
//               Road to the League (Season 4)
//             </p>
//           </div>
//         </div>

//         {/* Clip 2 */}
//         <div className="bg-black border border-orange-600 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
//           <img src={clip2} alt="Clip 2" className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <p className="text-center font-semibold text-lg transform transition duration-500 hover:scale-110">
//               Championship Night Stream (Season 4)
//             </p>
//           </div>
//         </div>

//         {/* Clip 3 */}
//         <div className="bg-black border border-orange-600 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
//           <img src={clip3} alt="Clip 3" className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <p className="text-center font-semibold text-lg transform transition duration-500 hover:scale-110">
//               Fun With Friends: Boys' Night In
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopClipsSection;




























import React from 'react';
import clip1 from '../assets/das1.png';
import clip2 from '../assets/das2.png';
import clip3 from '../assets/das3.png';
import bgImage from '../assets/pro3.png'; // Make sure to add your background image to assets

const TopClipsSection = () => {
  return (
    <div 
      className="relative bg-cover bg-center text-white py-16 px-8 font-sans"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight transform transition duration-500 hover:scale-105">
          SECURING <span className="block">AI</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 tracking-wide">
          PROVIDING CUTTING-EDGE AI SERVICES
        </p>
      </div>

      {/* Gradient Header */}
      <div className="relative z-10 mt-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-orange-500 to-red-800 p-8 text-center rounded-lg">
          <h2 className="text-3xl font-bold uppercase tracking-wider">
            OUR TOP SERVICES
          </h2>
        </div>
      </div>

      {/* Clips Section */}
      <div className="relative z-10 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Clip 1 */}
        <div className="bg-black border border-orange-500 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src={clip1} alt="Service 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-center font-semibold text-lg transform transition duration-500 hover:scale-110">
              AI Security Solutions
            </p>
          </div>
        </div>

        {/* Clip 2 */}
        <div className="bg-black border border-orange-500 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src={clip2} alt="Service 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-center font-semibold text-lg transform transition duration-500 hover:scale-110">
              Machine Learning Models
            </p>
          </div>
        </div>

        {/* Clip 3 */}
        <div className="bg-black border border-orange-500 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src={clip3} alt="Service 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-center font-semibold text-lg transform transition duration-500 hover:scale-110">
              Advanced Data Analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopClipsSection;


