// import React from 'react';
// import profilePic from '../assets/das1.png'; // Adjust the image path as necessary
// import trophyPic from '../assets/pro.png'; // Adjust the image path as necessary
// import { motion } from 'framer-motion';

// const System = () => {
//   return (
//     <div className="bg-black text-white p-12 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center lg:items-start justify-between">
//       {/* Left side: Text content with animations */}
//       <div className="flex-1 max-w-xl space-y-6 lg:pr-12">
//         <motion.p 
//           className="text-2xl font-bold text-gradient bg-gradient-to-r from-teal-400 to-purple-500"
//           initial={{ opacity: 0, x: -100 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8 }}
//         >
//           Kirill Lazarev
//         </motion.p>
//         <motion.p 
//           className="text-sm text-gray-400"
//           initial={{ opacity: 0, x: -100 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Founder of Lazarev.
//         </motion.p>
//         <motion.div 
//           className="text-5xl font-extrabold leading-tight"
//           initial={{ opacity: 0, x: -100 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <span>We don't just build products, </span>
//           <span className="italic text-gradient bg-gradient-to-r from-pink-400 to-orange-500">we build partnerships.</span>
//         </motion.div>
//         <motion.div 
//           className="text-lg leading-relaxed space-y-4"
//           initial={{ opacity: 0, x: -100 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <p>
//             Our design journey is a rigorous one. We delve deep into user and market research, product positioning, prototyping, and visual design. We don't stop until we reach a successful launch and beyond.
//           </p>
//           <p>
//             We challenge the norms. Our team doesn't just ask "what" but delves into the "why" and explores "how" to achieve the best outcomes for our clients.
//           </p>
//         </motion.div>
//       </div>

//       {/* Right side: Image content with hover animation */}
//       <motion.div 
//         className="flex-shrink-0 mt-12 lg:mt-0 w-full max-w-md"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <img 
//           src={trophyPic} 
//           alt="Trophy" 
//           className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default System;
















import React from 'react';
import profilePic from '../assets/das1.png'; // Adjust the image path as necessary
import trophyPic from '../assets/pro.png'; // Adjust the image path as necessary
import { motion } from 'framer-motion';

const System = () => {
  return (
    <div className="bg-black text-white p-12 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0">
      
      {/* Left side: Text content with animations */}
      <div className="flex-1 max-w-70% space-y-6 lg:pr-12">
        <motion.p 
          className="text-2xl font-bold text-gradient bg-gradient-to-r from-teal-400 to-purple-500"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Kirill Lazarev
        </motion.p>
        <motion.p 
          className="text-sm text-gray-400"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Founder of Lazarev.
        </motion.p>
        
        <motion.div 
          className="text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>We don't just build products, </span>
          <span className="italic text-gradient bg-gradient-to-r from-pink-400 to-orange-500">we build partnerships.</span>
        </motion.div>
        
        <motion.blockquote 
          className="relative p-4 bg-gray-800 rounded-lg shadow-lg text-lg italic leading-relaxed"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            "Our design journey is a rigorous one. We delve deep into user and market research, product positioning, prototyping, and visual design. We don't stop until we reach a successful launch and beyond."
          </p>
          <p className="mt-4">
            "We challenge the norms. Our team doesn't just ask 'what' but delves into the 'why' and explores 'how' to achieve the best outcomes for our clients."
          </p>
          <div className="absolute -top-4 left-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">“</div>
        </motion.blockquote>

        <motion.div 
          className="flex space-x-4 mt-8"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img src={profilePic} alt="Kirill Lazarev" className="w-16 h-16 rounded-full shadow-lg" />
          <div className="text-gray-400">
            <p className="text-sm">Connect with Kirill Lazarev</p>
            <p className="text-lg font-semibold">Lazarev Design</p>
          </div>
        </motion.div>
      </div>

      {/* Right side: Image content with hover animation */}
      <motion.div 
        className="flex-shrink-0 mt-12 lg:mt-0 w-full max-w-md relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={trophyPic} 
          alt="Trophy" 
          className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
        />
        <motion.div 
          className="absolute bottom-0 left-0 bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-br-lg rounded-tl-lg text-white text-center font-semibold"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Excellence in Design
        </motion.div>
      </motion.div>
    </div>
  );
};

export default System;



