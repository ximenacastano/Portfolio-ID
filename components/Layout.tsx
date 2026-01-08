import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'wouter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle navigation
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
        if (location === '/') {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setLocation('/' + href);
        }
    } else {
        setLocation(href);
    }
  };

  const toggleMobileSubmenu = (name: string) => {
    setExpandedMenu(expandedMenu === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Projects', 
      href: '#portfolio',
      submenu: [
        { name: 'Project Micro-Course', href: '/portfolio/project-micro-course' },
        { name: 'IT Courses', href: '#it-courses' }
      ]
    },
    { name: 'Mentorship', href: '#mentorship' },
    { name: 'Books', href: '#books' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-white py-[5px] px-[20px] text-[0.85rem] text-right font-light w-full">
        ximenacastano@gmail.com
      </div>

      {/* Header */}
      <header 
        className={`sticky top-0 z-50 bg-white w-full transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? 'shadow-[0_2px_10px_rgba(0,0,0,0.05)]' : 'shadow-[0_2px_10px_rgba(0,0,0,0.05)]'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-[20px] py-[20px] flex justify-between items-center">
          <Link href="/" className="font-serif text-[1.8rem] font-bold text-black tracking-tight group cursor-pointer flex items-baseline gap-2 no-underline">
              Ximena Castaño <span className="text-primary">Ph.D.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-[25px] items-center list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {link.submenu ? (
                    <div>
                        <button 
                            onClick={() => handleNavClick(link.href)}
                            className={`uppercase text-[0.95rem] font-medium tracking-[1px] hover:text-primary transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 flex items-center gap-1 ${location === link.href ? 'text-primary' : 'text-black'}`}
                        >
                            {link.name}
                            <ChevronDown size={14} />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute top-full left-0 pt-2 hidden group-hover:block min-w-[240px]">
                            <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 py-2 flex flex-col items-start">
                                {link.submenu.map((sub) => (
                                    sub.href.startsWith('/') ? (
                                        <Link key={sub.name} href={sub.href} className="w-full text-left px-5 py-3 text-[0.85rem] font-medium uppercase tracking-wide text-gray-600 hover:bg-lightBg hover:text-primary transition-colors no-underline block">
                                            {sub.name}
                                        </Link>
                                    ) : (
                                        <button 
                                            key={sub.name}
                                            onClick={() => handleNavClick(sub.href)}
                                            className="w-full text-left px-5 py-3 text-[0.85rem] font-medium uppercase tracking-wide text-gray-600 hover:bg-lightBg hover:text-primary transition-colors bg-transparent border-none"
                                        >
                                            {sub.name}
                                        </button>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                  ) : (
                    link.href.startsWith('/') ? (
                        <Link href={link.href} className={`uppercase text-[0.95rem] font-medium tracking-[1px] hover:text-primary transition-colors duration-300 cursor-pointer no-underline ${location === link.href ? 'text-primary' : 'text-black'}`}>
                            {link.name}
                        </Link>
                    ) : (
                        <button 
                            onClick={() => handleNavClick(link.href)}
                            className="uppercase text-[0.95rem] font-medium tracking-[1px] hover:text-primary text-black transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
                        >
                            {link.name}
                        </button>
                    )
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-black hover:text-primary bg-transparent border-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col animate-[fadeIn_0.5s_ease-out] max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50 last:border-0">
                  {link.submenu ? (
                    <div>
                         <div className="flex justify-between items-center pr-2">
                             <button 
                                onClick={() => handleNavClick(link.href)}
                                className="block text-left uppercase text-sm font-bold tracking-widest hover:text-primary py-3 text-black bg-transparent border-none flex-grow"
                            >
                                {link.name}
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); toggleMobileSubmenu(link.name); }}
                                className="p-2 text-gray-500 hover:text-primary"
                            >
                                <ChevronDown size={18} className={`transform transition-transform duration-200 ${expandedMenu === link.name ? 'rotate-180' : ''}`} />
                            </button>
                         </div>
                         
                         {expandedMenu === link.name && (
                             <div className="bg-gray-50 pl-4 border-l-2 border-primary/20 mb-2">
                                 {link.submenu.map((sub) => (
                                     sub.href.startsWith('/') ? (
                                         <Link key={sub.name} href={sub.href} className="block uppercase text-xs font-bold tracking-widest hover:text-primary py-3 text-gray-600 no-underline" onClick={() => setIsMenuOpen(false)}>
                                              {sub.name}
                                         </Link>
                                     ) : (
                                        <button 
                                            key={sub.name}
                                            onClick={() => handleNavClick(sub.href)}
                                            className="block w-full text-left uppercase text-xs font-bold tracking-widest hover:text-primary py-3 text-gray-600 bg-transparent border-none"
                                        >
                                            {sub.name}
                                        </button>
                                     )
                                 ))}
                             </div>
                         )}
                    </div>
                  ) : (
                      link.href.startsWith('/') ? (
                         <Link href={link.href} className="block uppercase text-sm font-bold tracking-widest hover:text-primary py-3 text-black no-underline" onClick={() => setIsMenuOpen(false)}>
                              {link.name}
                         </Link>
                      ) : (
                        <button 
                            onClick={() => handleNavClick(link.href)}
                            className="block w-full text-left uppercase text-sm font-bold tracking-widest hover:text-primary py-3 text-black bg-transparent border-none"
                        >
                            {link.name}
                        </button>
                      )
                  )}
                </div>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#222] text-[#aaa] py-[40px] px-[20px] text-center text-[0.9rem]">
        <div className="max-w-[1200px] mx-auto">
          <p className="mb-[10px]">&copy; 2025 Ximena Castaño Ph.D. All Rights Reserved.</p>
          <p className="opacity-70 text-[0.8rem]">CoachPress Lite Theme | Developed By Blossom Themes</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;