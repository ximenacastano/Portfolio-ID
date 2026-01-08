import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-lightBg py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto animate-fadeUp">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-text">
          Project Micro-Course
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light italic mb-10 font-serif">
          "Resilience in the Workplace"
        </p>
        <a 
          href="https://course-resilience.s3.amazonaws.com/portfolio/course1/index.html#/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-primary bg-primary text-white py-3 px-8 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 rounded-sm shadow-md hover:shadow-lg"
        >
          Experience the Project
        </a>
      </div>
    </section>
  );
};

export default Hero;