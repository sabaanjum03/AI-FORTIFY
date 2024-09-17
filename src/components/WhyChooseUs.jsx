// import React from "react";
// import { FaShieldAlt, FaRocket, FaHandshake } from "react-icons/fa"; // Icons used for features

// const WhyChooseUs = () => {
//   return (
//     <div className="py-16 bg-gray-100">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
//             Why Choose Us
//           </h2>
//           <p className="text-lg text-gray-600 mt-2">
//             Discover the benefits of partnering with us and how we stand out from the competition.
//           </p>
//         </div>

//         {/* Features */}
//         <div className="flex flex-wrap justify-center">
//           {/* Feature 1 */}
//           <div className="w-full md:w-1/3 lg:w-1/4 p-4 text-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="mb-4 text-4xl text-purple-600">
//                 <FaShieldAlt />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Security
//               </h3>
//               <p className="text-gray-600">
//                 We provide top-notch security features to ensure your data is always protected.
//               </p>
//             </div>
//           </div>

//           {/* Feature 2 */}
//           <div className="w-full md:w-1/3 lg:w-1/4 p-4 text-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="mb-4 text-4xl text-purple-600">
//                 <FaRocket />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Innovation
//               </h3>
//               <p className="text-gray-600">
//                 We are at the forefront of technology, offering innovative solutions to drive your success.
//               </p>
//             </div>
//           </div>

//           {/* Feature 3 */}
//           <div className="w-full md:w-1/3 lg:w-1/4 p-4 text-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="mb-4 text-4xl text-purple-600">
//                 <FaHandshake />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Partnership
//               </h3>
//               <p className="text-gray-600">
//                 We build strong partnerships and work closely with you to achieve your goals.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;














// CardSection.jsx

import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-screen h-screen bg-[#f6f9fc] flex flex-col justify-center items-center p-8">
      {/* Header Section */}
      <div className="text-left mb-12 w-full px-24 max-w-8xl">
      
        <h1 className="text-center bg-slate-200 w-[18vw] h-14 flex items-center justify-center font-mono font-bold text-xl mb-12 px-5 py-1 text-gray-500 rounded-3xl">
          Cybersecurity for you
        </h1>
        <h2 className="text-6xl font-semibold text-gray-700 mb-6">
          WHY CHOOSE <span className="text-gray-400">KIYOSHI</span>
        </h2>
        <p className="text-xl font-poppins text-gray-600 max-w-3xl">
          Use this space to promote the business, its products or its services. 
          Help people become familiar with the business and its offerings. Emphasize your business's unique selling points and how users can benefit.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-24 max-w-8xl">
        {/* Card 1 */}
        <div className="bg-green-100 border-2 border-gray-300  p-8 rounded-3xl transition-all transform hover:-translate-y-2 duration-300">
          <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-2xl text-white font-bold text-lg mb-6">
            1
          </div>
          <h3 className="text-2xl mt-10 font-semibold  font-poppins text-gray-600 mb-4">
            Reclaim more than 70% of time and resources spent on patching
          </h3>
          <p className="text-gray-600 text-xl leading-relaxed mb-10">
            Reduce patch management costs by more than 70%. With our automated patching solutions, your team can focus on more strategic initiatives instead of wasting time on tedious maintenance tasks.
          </p>
          <a href="#" className="text-blue-500 mt-6  text-xl hover:underline">
            Learn more &rarr;
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 border-2 border-gray-300   p-8 rounded-3xl transition-all transform hover:-translate-y-2 duration-300">
          <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-2xl text-white font-bold text-lg mb-6">
            2
          </div>
          <h3 className="text-2xl mt-10  font-semibold  font-poppins text-gray-600 mb-4">
            Manage your pipeline continuously with full governance
          </h3>
          <p className="text-gray-600 text-xl  font-poppins  leading-relaxed mb-10">
            Our pipeline management system ensures continuous deployment and governance, offering peace of mind for your development and operations teams. Achieve compliance while boosting productivity.
          </p>
          <a href="#" className="text-blue-500 my-8 text-xl hover:underline">
            Explore pipeline solutions &rarr;
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-green-100 p-8 rounded-3xl border-2 border-gray-300  transition-all transform hover:-translate-y-2 duration-300">
          <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-2xl text-white font-bold text-lg mb-6">
            3
          </div>
          <h3 className="text-2xl mt-10 font-poppins font-semibold text-gray-600 mb-4">
            Keep your data safe while your team works remotely
          </h3>
          <p className="text-gray-600 text-xl  font-poppins  leading-relaxed mb-10">
            Secure your remote workforce with our data protection suite. With robust encryption, multi-factor authentication, and secure file sharing, your team can work safely from anywhere in the world.
          </p>
          <a href="#" className="text-blue-500 text-xl mt-6  hover:underline">
            Secure your data &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;



