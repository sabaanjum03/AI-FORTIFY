
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-lg text-white flex items-center px-8 md:px-16 justify-between py-4 z-50 shadow-lg">
//       <div className="flex items-center">
//         <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="Logo" className="h-10 mr-6" />
//         <span className="font-bold text-2xl tracking-widest uppercase">Kiyoshi</span>
//       </div>
//       <nav className="flex space-x-16">
//         <a href="/product" className="relative group text-lg md:text-xl font-medium">
//           <span className="group-hover:text-gray-300 transition-colors">PRODUCT</span>
//           <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
//         </a>
//         <a href="/company" className="relative group text-lg md:text-xl font-medium">
//           <span className="group-hover:text-gray-300 transition-colors">COMPANY</span>
//           <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
//         </a>
//         <a href="/knowledge" className="relative group text-lg md:text-xl font-medium">
//           <span className="group-hover:text-gray-300 transition-colors">CONTACT</span>
//           <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
//         </a>
//         <a href="/careers" className="relative group text-lg md:text-xl font-medium">
//           <span className="group-hover:text-gray-300 transition-colors">CAREERS</span>
//           <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
//         </a>
//         <a href="/careers" className="relative group text-lg md:text-xl font-medium">
//           <span className="group-hover:text-gray-300 transition-colors"></span>
//           <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
//         </a>
//       </nav>
//       <button className="bg-orange-600 hover:bg-orange-700 text-white py-4 px-6  rounded-2xl">
//         BOOK A DEMO
//      </button>
      
//     </header>
//   );
// };

// export default Header;

















import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-lg text-white flex items-center px-8 md:px-16 justify-between py-4 z-50 shadow-lg">
      <div className="flex items-center">
        <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="Logo" className="h-10 mr-6" />
        <span className="font-bold text-2xl tracking-widest uppercase">AI Fortify</span>
      </div>
      <nav className="flex space-x-16">
        <Link to="/" className="relative group text-lg md:text-xl font-medium">
          <span className="group-hover:text-gray-300 transition-colors">HOME</span>
          <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
        </Link>
        <Link to="/product" className="relative group text-lg md:text-xl font-medium">
          <span className="group-hover:text-gray-300 transition-colors">PRODUCT</span>
          <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
        </Link>
        <Link to="/company" className="relative group text-lg md:text-xl font-medium">
          <span className="group-hover:text-gray-300 transition-colors">COMPANY</span>
          <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
        </Link>
        <Link to="/contact" className="relative group text-lg md:text-xl font-medium">
          <span className="group-hover:text-gray-300 transition-colors">CONTACT</span>
          <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
        </Link>
        <Link to="/careers" className="relative group text-lg md:text-xl font-medium">
          <span className="group-hover:text-gray-300 transition-colors">CAREERS</span>
          <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-300"></div>
        </Link>
      
      </nav>
      <button className="bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-2xl">
        BOOK A DEMO
      </button>
    </header>
  );
};

export default Header;



