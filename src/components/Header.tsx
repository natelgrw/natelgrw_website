import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass neon-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Creative NL Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="text-3xl font-bold text-neon-blue group-hover:scale-110 transition-transform duration-300">
                NL
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-gold opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {['About', 'Experience', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-foreground hover:text-neon-blue transition-colors duration-300 font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Connect Button */}
          <Button
            onClick={() => scrollToSection('connect')}
            className="glass-hover neon-border bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-neon"
          >
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;