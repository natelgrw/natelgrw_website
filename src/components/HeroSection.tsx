import { Github, Linkedin, Mail, FileDown, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="about" className="min-h-[120vh] flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Background particles */}
      <div className="absolute inset-0 bg-particles opacity-40"></div>
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-1 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Nathan</span>
                <br />
                <span className="text-foreground">Leung</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground py-5">
                <div className="text-lg font-medium text-neon-blue">
                  Electrical Engineering & Computer Science @ MIT
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                Currently exploring the intersection of machine learning, electrical systems, and software engineering as an intern at IBM Research and the Coley Research Group @ MIT. Passionate 
                about pushing technological boundaries through academic research and interdisciplinary projects.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/natelgrw', label: 'GitHub' },
                { icon: () => <span className="text-orange-500 font-bold">🤗</span>, href: 'https://huggingface.co/natelgrw', label: 'Hugging Face' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/natelgrw/', label: 'LinkedIn' },
                { icon: Mail, href: '#connect', label: 'Email' },
                { icon: Instagram, href: 'https://www.instagram.com/nate.lgrw/', label: 'Instagram' }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="glass-hover neon-border w-12 h-12 rounded-full group border-muted bg-transparent hover:bg-transparent hover:shadow-neon transition-all duration-500"
                  asChild
                >
                  <a href={social.href} aria-label={social.label} target={social.href.startsWith('#') ? '_self' : '_blank'} rel={social.href.startsWith('#') ? '' : 'noopener noreferrer'}>
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center"
                asChild
              >
                <a href="/NLResume.pdf" download="Nathan_Leung_Resume.pdf">
                  <FileDown className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative">
              {/* Holographic frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-gold opacity-60 blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 rounded-3xl border-2 border-neon-blue opacity-80 pulse-neon"></div>
              
              {/* Main photo container */}
              <div className="relative glass neon-border rounded-3xl p-2 floating">
                <img
                  src="/images/natelgrw_portrait.png"
                  alt="Nathan Leung"
                  className="w-80 h-80 object-cover rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                />
                
                {/* Flickering lights around photo */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-neon-blue rounded-full pulse-neon"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-purple rounded-full pulse-neon animation-delay-300"></div>
                <div className="absolute top-1/2 left-2 w-1 h-1 bg-neon-gold rounded-full pulse-neon animation-delay-600"></div>
                <div className="absolute top-1/4 right-2 w-1 h-1 bg-neon-cyan rounded-full pulse-neon animation-delay-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;