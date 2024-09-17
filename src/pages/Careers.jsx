// import React from "react";

// const Career = () => {
//   const positions = [
//     {
//       title: "Chief Information Security Officer (CISO)",
//       description: "This is the space to describe an open position and tell people how to apply for the job.",
//     },
//     {
//       title: "Security Operations Manager",
//       description: "This is the space to describe an open position and tell people how to apply for the job.",
//     },
//     {
//       title: "Cloud Security Architect",
//       description: "This is the space to describe an open position and tell people how to apply for the job.",
//     },
//     {
//       title: "Threat Intelligence Analyst",
//       description: "This is the space to describe an open position and tell people how to apply for the job.",
//     },
//     {
//       title: "Security Compliance Specialist",
//       description: "This is the space to describe an open position and tell people how to apply for the job.",
//     },
//     {
//       title: "DevSecOps Engineer",
//       description: "This is the space to describe an open position and tell people how to apply for the job.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 flex justify-center items-center px-4 py-12">
//       <h1 className="text-center bg-slate-200 font-bold  text-xl mb-12 px-5 py-1 text-gray-500 rounded-3xl">OUR LEADERS</h1>
//        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
//         <span className="text-gray-400"> MEET THE </span> TEAM
//        </h2>
//       <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-24 gap-4">
//         {positions.map((position, index) => (
//           <div
//             key={index}
//             className="bg-gray-900 text-white p-6 rounded-3xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-5xl font-semibold my-8">{position.title}</h3>
//             <p className="my-10 text-2xl">{position.description}</p>
//             <a
//               href="#apply"
//               className="text-orange-400 my-10 font-semibold text-lg hover:underline flex items-center"
//             >
//               APPLY NOW <span className="ml-2">&rarr;</span>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Career;
































import React from "react";

const Career = () => {
  const positions = [
    {
      title: "Chief Information Security Officer (CISO)",
      description: "This is the space to describe an open position and tell people how to apply for the job.",
    },
    {
      title: "Security Operations Manager",
      description: "This is the space to describe an open position and tell people how to apply for the job.",
    },
    {
      title: "Cloud Security Architect",
      description: "This is the space to describe an open position and tell people how to apply for the job.",
    },
    {
      title: "Threat Intelligence Analyst",
      description: "This is the space to describe an open position and tell people how to apply for the job.",
    },
    {
      title: "Security Compliance Specialist",
      description: "This is the space to describe an open position and tell people how to apply for the job.",
    },
    {
      title: "DevSecOps Engineer",
      description: "This is the space to describe an open position and tell people how to apply for the job.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-white flex flex-col justify-center items-center  px-4 py-32">
      <header className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl h-14 w-[20vw] text-center font-bold bg-gray-400 text-white  font-mono rounded-3xl p-2 my-16">
          start with us 
        </h1>
        <h2 className="text-4xl md:text-8xl font-Bold font-poppins text-gray-300">
          CAREERS
        </h2>
      </header>

      <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-24  gap-4">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white p-8 rounded-3xl shadow-lg border border-gray-600 transition-transform transform hover:scale-105"
          >
            <h3 className="text-3xl md:text-4xl font-bold my-6">{position.title}</h3>
            <p className="text-lg md:text-xl text-gray-300 my-6">{position.description}</p>
            <a
              href="#apply"
              className="text-orange-500 font-semibold text-lg hover:underline flex items-center"
            >
              APPLY NOW <span className="ml-2">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;

