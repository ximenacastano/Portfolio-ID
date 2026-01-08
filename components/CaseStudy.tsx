import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      
      {/* Project Details Grid */}
      <div className="bg-white p-8 md:p-10 shadow-lg border-l-4 border-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 transform -translate-y-8 relative z-10">
        <div className="space-y-2">
          <h4 className="font-serif text-lg font-bold text-black">Role</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Research, ID, Script, Graphic Design, Development</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-serif text-lg font-bold text-black">Tools</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Articulate Rise, Krita, Canva, Figma</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-serif text-lg font-bold text-black">Audience</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Young Professionals</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-serif text-lg font-bold text-black">Year</h4>
          <p className="text-sm text-gray-600 leading-relaxed">2022</p>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="mb-16">
        <h3 className="font-serif text-3xl font-normal mb-6 relative inline-block">
          The Problem
          <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-primary"></span>
        </h3>
        <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
          <p>
            Most young professionals find it difficult to face the day-to-day challenges of work. The inability to deal with the stressful situations that arise on a daily basis creates misunderstandings at work, feelings of fatigue, an inability to think clearly to find creative solutions, and a lack of control over day-to-day tasks.
          </p>
          <p>
            Ultimately, this leads to dissatisfaction. These problems can be better managed when we learn to better understand ourselves and create space to balance our energies, emotions, and attitudes.
          </p>
        </div>
      </div>

      {/* The Solution Section */}
      <div className="mb-16">
        <h3 className="font-serif text-3xl font-normal mb-6 relative inline-block">
          The Solution
          <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-primary"></span>
        </h3>
        <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
          <p>
            It is crucial to help young professionals hone their resilience levels to help them face challenging situations that are common in every workplace. A professional can be very skillful, but if they are unable to behave composedly during a stressful situation, it can negatively impact their performance and motivation.
          </p>
          <p>
            Understanding resilience better can help bridge the gap in managing stress at work. This short and dynamic learning experience is designed to be implemented during the onboarding of young professionals.
          </p>
          <div className="bg-lightBg p-6 border-l-2 border-primary italic">
            <p>
              Above all, the interactive story allows users to practice and internalize the resilience threshold through <strong className="text-primary font-bold not-italic">decision making, direct feedback, and reflective writing.</strong> This course features an interactive visualization made possible for execution as a web-responsive design.
            </p>
          </div>
        </div>
      </div>

      {/* Reflection & Process Section */}
      <div className="mb-16">
        <h3 className="font-serif text-3xl font-normal mb-6 relative inline-block">
          Reflection & Process
          <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-primary"></span>
        </h3>
        <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
          <p>
            Creating this project was an ongoing process that helped me gain a stronger sense of the instructional design workflow from beginning to end. I learned how to design, develop, and refine a learning experience that was story-based and addressed real-life communication problems for young professionals.
          </p>
          <p>
            I discovered how essential the development phase is in gaining a deeper understanding of tools that help create professional and quality eLearning experiences. I realized just how much every detail counts in the learning experience – from buttons, spacing, and text font, to other core design principles.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-8 border-t border-gray-100">
        <a 
          href="https://course-resilience.s3.amazonaws.com/portfolio/course1/index.html#/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 border-2 border-primary bg-primary text-white py-3 px-10 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 rounded-sm shadow-md hover:shadow-lg"
        >
          Launch Full Course
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

    </div>
  );
};

export default CaseStudy;