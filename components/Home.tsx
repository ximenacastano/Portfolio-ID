import React from 'react';
import { Link } from 'wouter';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-center text-white px-5 bg-cover bg-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="relative z-10 max-w-[800px] animate-[fadeIn_1s_ease-in]">
          <h2 className="font-serif text-[2rem] md:text-[3rem] font-bold mb-5 leading-tight">
            Instructional Designer & eLearning Specialist
          </h2>
          <p className="text-[1.2rem] font-light mb-[30px] opacity-90">
            I help organizations turn boring training into effective, engaging learning experiences.
          </p>
          <a 
            href="#portfolio"
            className="inline-block bg-primary text-white py-3 px-[30px] text-base font-bold uppercase tracking-[1px] border-2 border-primary hover:bg-transparent hover:text-white transition-all duration-300 rounded-[2px]"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-[80px] px-5 text-center max-w-[900px] mx-auto">
        <h3 className="font-serif text-[2.5rem] font-bold text-[#222] mb-5">Hi, I'm Ximena Castaño</h3>
        <p className="text-[#555] text-[1.1rem] mb-5 leading-[1.6]">
            I design instruction and eLearning for companies and organizations looking for effective and engaging learning experiences. 
            I help them turn boring training into exciting opportunities for their employees to learn new skills.
        </p>
        <p className="text-[#555] text-[1.1rem] mb-5 leading-[1.6]">
            With a background in education and technology, I bridge the gap between complex information and learner understanding.
        </p>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="portfolio" className="bg-[#f8f9fa] py-[80px] px-5">
        <h3 className="text-center font-serif text-[2.5rem] font-bold text-[#222] mb-[50px]">Projects</h3>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            
            {/* Card 1 - Mentorship */}
            <div id="mentorship" className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[5px] transition-transform duration-300 overflow-hidden flex flex-col h-full group scroll-mt-24">
                <div className="h-[200px] flex items-center justify-center text-[#777] text-[0.9rem]" style={{ background: '#e0f7fa' }}>
                    [Image: Articulate Rise Project]
                </div>
                <div className="p-[25px] text-center flex flex-col flex-grow">
                    <h4 className="font-serif text-[1.4rem] font-bold mb-[10px] text-text">Teachers' Mentorship</h4>
                    <p className="text-[#666] text-[0.95rem] mb-[15px] flex-grow leading-[1.6]">An Articulate Scenario based project designed to help teachers improve classroom management.</p>
                    <a href="#" className="text-primary font-bold text-[0.9rem] inline-flex items-center justify-center hover:text-black transition-colors">
                        View Project &rarr;
                    </a>
                </div>
            </div>

            {/* Card 2 - Linked (Micro-Course) */}
            <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[5px] transition-transform duration-300 overflow-hidden flex flex-col h-full relative group">
                <div className="h-[200px] flex items-center justify-center text-[#777] text-[0.9rem]" style={{ background: '#fff3e0' }}>
                     [Image: Micro-Course]
                </div>
                <div className="p-[25px] text-center flex flex-col flex-grow">
                    <h4 className="font-serif text-[1.4rem] font-bold mb-[10px] text-text">Project Micro-Course</h4>
                    <p className="text-[#666] text-[0.95rem] mb-[15px] flex-grow leading-[1.6]">A bite-sized learning module focused on quick skill acquisition for corporate environments.</p>
                    
                    {/* Link to subpage using Wouter Link properly */}
                    <Link href="/portfolio/project-micro-course" className="text-primary font-bold text-[0.9rem] inline-flex items-center justify-center hover:text-black transition-colors cursor-pointer after:absolute after:inset-0">
                        View Project &rarr;
                    </Link>
                </div>
            </div>

            {/* Card 3 - Data Analysis */}
            <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[5px] transition-transform duration-300 overflow-hidden flex flex-col h-full group">
                <div className="h-[200px] flex items-center justify-center text-[#777] text-[0.9rem]" style={{ background: '#f3e5f5' }}>
                     [Image: Data Analysis]
                </div>
                <div className="p-[25px] text-center flex flex-col flex-grow">
                    <h4 className="font-serif text-[1.4rem] font-bold mb-[10px] text-text">Análisis de Datos</h4>
                    <p className="text-[#666] text-[0.95rem] mb-[15px] flex-grow leading-[1.6]">Visualizing educational data to drive instructional decisions and improve outcomes.</p>
                    <a href="#" className="text-primary font-bold text-[0.9rem] inline-flex items-center justify-center hover:text-black transition-colors">
                        View Project &rarr;
                    </a>
                </div>
            </div>

             {/* Card 4 - Books */}
             <div id="books" className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[5px] transition-transform duration-300 overflow-hidden flex flex-col h-full group scroll-mt-24">
                <div className="h-[200px] flex items-center justify-center text-[#777] text-[0.9rem]" style={{ background: '#e8f5e9' }}>
                     [Image: Book Cover]
                </div>
                <div className="p-[25px] text-center flex flex-col flex-grow">
                    <h4 className="font-serif text-[1.4rem] font-bold mb-[10px] text-text">Books</h4>
                    <p className="text-[#666] text-[0.95rem] mb-[15px] flex-grow leading-[1.6]">Children's book "The busy bee and the vanishing hives" and other publications.</p>
                    <a href="#" className="text-primary font-bold text-[0.9rem] inline-flex items-center justify-center hover:text-black transition-colors">
                        View Books &rarr;
                    </a>
                </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default Home;