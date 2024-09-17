
// import React from 'react';
// import logo from '../assets/ai-logo.svg'; // Adjust path according to your folder structure

// const Footer = () => {
//     return (
//         <footer className="bg-black text-white px-6 rounded-2xl py-12 md:px-12 md:py-24">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-wrap justify-between">
//                     {/* Left Section */}
//                     <div className="w-full md:w-1/4 mb-8 md:mb-0 p-[30px] text-center md:text-left">
//                     <img src= {logo} alt="Company Logo" className="mx-auto md:mx-0  bg-white mb-4 w-70 h-35"/>
//                         <h4 className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-300 to-blue-500 mb-4"></h4>
//                        <span classname="mb-5 py-10 text-zinc-400">
//                         <p classname="mb-5 py-10 text-zinc-400">Combines innovation, developer satisfaction, and hacker deterrence.</p>
//                         </span>
//                         <div className="mb-4 mt-5">
//                             <button className="bg-neon-green text-gray-900 py-2 px-4 rounded mb-2 mr-2 transition-transform transform hover:scale-105">Book a demo</button>
//                             <button className="border border-neon-green text-neon-green py-2 px-4 rounded transition-transform transform hover:scale-105">Start for free</button>
//                         </div>
//                     </div>

//                     {/* Middle Section (Products) */}
//                     <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center px-[30px] top-10 md:text-left">
//                         <h5 className="text-lg font-semibold mt-20  mb-4">Products</h5>
//                         <ul className="space-y-2">
//                             <li className="hover:text-teal-300 transition duration-300">Lakera Guard</li>
//                             <li className="hover:text-teal-300 transition duration-300">Lakera PII Detection</li>
//                             <li className="hover:text-teal-300 transition duration-300">Gandalf</li>
//                             <li className="hover:text-teal-300 transition duration-300">Mosscap</li>
//                         </ul>
//                     </div>

//                     {/* Right Section (Resources) */}
//                     <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center px-[30px] md:text-left">
//                         <h5 className="text-lg font-semibold mt-20 mb-4">Resources</h5>
//                         <ul className="space-y-2">
//                             <li className="hover:text-teal-300 transition duration-300">Blog</li>
//                             <li className="hover:text-teal-300 transition duration-300">Events</li>
//                             <li className="hover:text-teal-300 transition duration-300">Documentation</li>
//                             <li className="hover:text-teal-300 transition duration-300">Changelog</li>
//                             <li className="hover:text-teal-300 transition duration-300">ML Glossary</li>
//                             <li className="hover:text-teal-300 transition duration-300">Privacy Policy</li>
//                             <li className="hover:text-teal-300 transition duration-300">Impressum</li>
//                         </ul>
//                     </div>

//                     {/* Far Right Section (Company) */}
//                     <div className="w-full md:w-1/4 mb-8 md:mb-0 px-[30px] text-center md:text-left">
//                         <h5 className="text-lg font-semibold mt-20 mb-4">Company</h5>
//                         <ul className="space-y-2">
//                             <li className="hover:text-teal-300 transition duration-300">About</li>
//                             <li className="hover:text-teal-300 transition duration-300">News</li>
//                             <li className="hover:text-teal-300 transition duration-300">Careers</li>
//                             <li className="hover:text-teal-300 transition duration-300">Momentum</li>
//                             <li className="hover:text-teal-300 transition duration-300">Partnerships</li>
//                             <li className="hover:text-teal-300 transition duration-300">Contact</li>
//                         </ul>
//                     </div>

//                     {/* Company Details */}
//                     <div className="w-full px-[30px] text-gray-300 md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
//                         <p className="mt-4">Secureyourhack inc.</p>
//                        <p>445, AIHP Horizon, Udyog Vihar Phase V, Gurugram, Haryana – 122022</p>
//                         <p classname="text-white">+91 8683833333</p>
//                     </div>

//                     {/* Social Media Section */}
//                     <div className="w-full md:w-1/4 text-center md:text-left">
//                         <h5 className="text-lg hover:text-teal-300 font-semibold mb-4">Follow Us</h5>
//                         <div className="flex justify-center md:justify-start space-x-4">
//                             <a href="#" className="hover:text-neon-green transition duration-300">
//                                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                     {/* Instagram SVG */}
//                                     <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm4.75-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
//                                 </svg>
//                             </a>
//                             <a href="#" className="hover:text-neon-green transition duration-300">
//                                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                     {/* Facebook SVG */}
//                                     <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.94 3.61 9.02 8.33 9.87v-7h-2.5v-2.87h2.5v-2.17c0-2.48 1.5-3.87 3.77-3.87 1.07 0 1.98.08 2.24.12v2.6l-1.54.01c-1.21 0-1.44.58-1.44 1.42v1.88h2.87l-.37 2.87h-2.5v7c4.72-.85 8.33-4.93 8.33-9.87 0-5.5-4.46-9.96-9.96-9.96z"/>
//                                 </svg>
//                             </a>
//                             <a href="#" className="hover:text-neon-green transition duration-300">
//                                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                     {/* LinkedIn SVG */}
//                                     <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h14zm-11 5h-2.5v8h2.5v-8zm-1.25-1.13c-.8 0-1.25.55-1.25 1.25s.45 1.25 1.25 1.25 1.25-.55 1.25-1.25-.45-1.25-1.25-1.25zm7.25 1.13h-2.5v1.05h-.03c-.2-.38-.68-.8-1.38-.8-1.48 0-2.5 1.05-2.5 2.88v3.77h2.5v-3.53c0-.78.14-1.55 1-1.55s.9.7.9 1.47v3.62h2.5v-3.76c0-1.54-.83-2.6-2.1-2.6z"/>
//                                 </svg>
//                             </a>
//                             <a href="#" className="hover:text-neon-green transition duration-300">
//                                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                     {/* Twitter SVG */}
//                                     <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.379 4.482 13.978 13.978 0 0 1-10.16-5.151 4.822 4.822 0 0 0-.666 2.475 4.92 4.92 0 0 0 2.19 4.095 4.902 4.902 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.907 4.89a4.902 4.902 0 0 1-2.224.084c.629 1.957 2.445 3.379 4.6 3.419a9.867 9.867 0 0 1-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.934 13.934 0 0 0 7.548 2.209c9.142 0 14.307-7.721 14.307-14.412 0-.22-.005-.439-.014-.657a10.243 10.243 0 0 0 2.5-2.608"/>
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;






















// import React from 'react';
// import logo from '../assets/logo1.png';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white px-6 py-16 md:px-16 md:py-32 rounded-2xl font-sans">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
      
//         <div className="flex flex-col items-center md:items-start space-y-6">
//           <img src={logo} alt="Saba Logo" className="h-[15vw] w-[15vw] pl-0 ml-0 mb-6 transform transition-transform duration-500 hover:scale-110"/>
//           <button className="bg-orange-600 text-white text-lg px-10 py-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-orange-500">
//             TRY FOR FREE
//           </button>
//           <a href="#!" className="mt-4 text-base text-gray-500 hover:text-orange-400 transition-colors duration-300">
//             Open positions
//           </a>
//         </div>
        
//         <div className="flex flex-col items-center md:items-start space-y-4">
//           <h4 className="font-bold text-2xl mb-4 text-gray-200">Contact</h4>
//           <p className="hover:text-orange-400 transition-colors duration-300 text-lg">Info@mysite.com</p>
//           <p className="hover:text-orange-400 transition-colors duration-300 text-lg">Tel: 123-456-7890</p>
//           <p className="hover:text-orange-400 transition-colors duration-300 text-lg">
//             500 Terry Francine Street,<br/>San Francisco, CA 94158
//           </p>
//         </div>

//         <div className="flex flex-col items-center md:items-start space-y-4">
//           <h4 className="font-bold text-2xl mb-4 text-gray-200">Navigation</h4>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Product</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Company</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Careers</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Knowledge</a>
//         </div>

//         <div className="flex flex-col items-center md:items-start space-y-4">
//           <h4 className="font-bold text-2xl mb-4 text-gray-200">Follow Us</h4>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Instagram</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Facebook</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">LinkedIn</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">X</a>
//         </div>
//       </div>
      
//       <div className="text-center border-t border-gray-700 mt-20 pt-8 text-lg text-gray-500">
//         <p>&copy; 2035 by Sikura. Built on <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Wix Studio</a></p>
//         <div className="flex justify-center space-x-8 mt-6">
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Terms & Conditions</a>
//           <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Accessibility Statement</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

































import React from 'react';
import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-16 md:px-16 md:py-32 rounded-2xl font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
      
        <div className="flex flex-col items-center md:items-start space-y-6">
          <img src={logo} alt="Saba Logo" className="h-[15vw] w-[15vw] mb-6 transform transition-transform duration-500 hover:scale-110"/>
          <button className="bg-orange-600 text-white text-lg px-10 py-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-orange-500">
            TRY FOR FREE
          </button>
          <a href="#!" className="mt-4 text-xl  text-gray-400 hover:text-orange-400 transition-colors duration-300 underline">
            Open positions
          </a>
        </div>
        
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-bold text-2xl mb-4 text-gray-300">Contact</h4>
          <p className="hover:text-orange-400 transition-colors duration-300 text-lg">Info@mysite.com</p>
          <p className="hover:text-orange-400 transition-colors duration-300 text-lg">Tel: 123-456-7890</p>
          <p className="hover:text-orange-400 transition-colors duration-300 text-lg">
            500 Terry Francine Street,<br/>San Francisco, CA 94158
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-bold text-2xl mb-4 text-gray-300">Navigation</h4>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Product</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Company</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Careers</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Knowledge</a>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-bold text-2xl mb-4 text-gray-300">Follow Us</h4>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Instagram</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">Facebook</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">LinkedIn</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300 text-lg">X</a>
        </div>
      </div>
      
      <div className="text-center border-t border-gray-700 mt-20 pt-8 text-lg text-gray-500">
        <p>&copy; 2035 by Sikura. Built on <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Wix Studio</a></p>
        <div className="flex justify-center space-x-8 mt-6">
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Terms & Conditions</a>
          <a href="#!" className="hover:text-orange-400 transition-colors duration-300">Accessibility Statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
