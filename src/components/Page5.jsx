import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Page5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black w-full p-20 flex items-start justify-between relative">
      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 pt-[3vw] h-[10vw]  text-[20px] w-[10vw] px-8 font-semibold  text-white rounded-full border-none sticky top-[25%] shadow-lg transform hover:scale-105 transition-transform duration-300">
        Become a Client
      </button>

      <div className="w-[70%] text-white">
        <p className="text-[2.1vw] font-sans text-gray-200 leading-tight">
          <span className="inline-block w-[15vw] bg-gradient-to-r from-purple-400 to-pink-500 h-[2px]"></span>
          We secure your AI systems at every stage of their{" "}
          <span className="inline-block w-[15vw] bg-gradient-to-r from-pink-500 to-yellow-500 h-[2px]"></span>
          evolution, providing cutting-edge solutions at each interaction.
          Whether it's developing robust AI models, fortifying against cyber
          threats, ensuring data privacy, or optimizing algorithmic
          transparency, we offer a suite of custom-tailored AI security services
          that meet your exact needs.
        </p>

        <div className="w-full mt-20 py-20">
          <div className="border-t border-gray-700 py-8">
            <details open className="group">
              <summary className="cursor-pointer">
                <h1 className="text-[3vw] font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  AI Security Services
                </h1>
                <div className="flex my-8 space-x-4">
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-purple-400 to-pink-500">
                    Threat Analysis
                  </h4>
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-purple-400 to-pink-500">
                    Data Encryption
                  </h4>
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-purple-400 to-pink-500">
                    Privacy Management
                  </h4>
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-purple-400 to-pink-500">
                    Compliance Audits
                  </h4>
                </div>
              </summary>

              <div className="space-y-16">
                {["Threat Analysis", "Data Encryption", "Privacy Management", "Compliance Audits"].map(
                  (title) => (
                    <div
                      key={title}
                      className="relative flex items-start justify-between py-12 border-t border-gray-700 transition-all duration-1000 group-hover:border-gradient-to-r from-purple-400 to-pink-500"
                    >
                      <div className="absolute inset-0 bg-gray-800 transform -translate-y-full opacity-0 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100"></div>
                      <h3 className="text-[1.6vw] font-normal transition-all duration-1000 group-hover:pl-4 z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        {title}
                      </h3>
                      <p className="w-[55%] text-[0.8vw] z-10">
                        Our {title} service ensures that your AI systems are
                        protected against the latest security threats. We
                        provide comprehensive strategies to safeguard your
                        data, models, and algorithms from malicious attacks and
                        vulnerabilities.
                      </p>
                      <RiArrowRightUpLine className="text-[1vw] transition-all duration-1000 group-hover:pr-4 z-10" />
                    </div>
                  )
                )}
              </div>
            </details>
          </div>

          <div className="border-t border-gray-700 py-8">
            <details className="group">
              <summary className="cursor-pointer">
                <h1 className="text-[3vw] font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Advanced AI Protection
                </h1>
                <div className="flex my-8 space-x-4">
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-green-400 to-blue-500">
                    Real-Time Monitoring
                  </h4>
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-green-400 to-blue-500">
                    Secure Development
                  </h4>
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-green-400 to-blue-500">
                    Model Integrity
                  </h4>
                  <h4 className="border border-white rounded-full px-5 py-2 font-normal text-[0.8vw] transition-colors duration-300 hover:bg-gradient-to-r from-green-400 to-blue-500">
                    Incident Response
                  </h4>
                </div>
              </summary>

              <div className="space-y-16">
                {["Real-Time Monitoring", "Secure Development", "Model Integrity", "Incident Response"].map(
                  (title) => (
                    <div
                      key={title}
                      className="relative flex items-start justify-between py-12 border-t border-gray-700 transition-all duration-1000 group-hover:border-gradient-to-r from-green-400 to-blue-500"
                    >
                      <div className="absolute inset-0 bg-gray-800 transform -translate-y-full opacity-0 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100"></div>
                      <h3 className="text-[1.6vw] font-normal transition-all duration-1000 group-hover:pl-4 z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        {title}
                      </h3>
                      <p className="w-[55%] text-[0.8vw] z-10">
                        {title} is crucial for maintaining the security and
                        reliability of your AI systems. We ensure continuous
                        monitoring and rapid response to any security incidents,
                        keeping your AI operations smooth and secure.
                      </p>
                      <RiArrowRightUpLine className="text-[1vw] transition-all duration-1000 group-hover:pr-4 z-10" />
                    </div>
                  )
                )}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;

