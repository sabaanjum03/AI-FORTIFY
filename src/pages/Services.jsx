import React from 'react';

const Services = () => {
  return (
    <div className="p-8 bg-white text-black max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg mb-4">
        We offer a wide range of AI solutions tailored to meet your needs. Our services include advanced analytics, machine learning models, and custom AI development. Each service is designed with security and efficiency in mind.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-lg">Advanced Data Analytics</li>
        <li className="text-lg">Machine Learning Solutions</li>
        <li className="text-lg">Custom AI Development</li>
        <li className="text-lg">AI Consultation</li>
      </ul>
    </div>
  );
};

export default Services;
