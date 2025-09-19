import ibmLogo from '@/assets/ibm-logo.png';
import mitLogo from '@/assets/mit-logo.png';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company: "IBM Research",
      period: "Dec 2024 - Present",
      logo: ibmLogo,
      description: [
        "AI driven analog circuit design in collaboration with MIT Profs. Anantha Chandrakasan & Ruonan Han",
        "Developing foundation models to optimize topology & sizing in operational amplifiers"
      ],
      technologies: ["PyTorch", "CUDA", "Cadence Software", "Bash"]
    },
    {
      title: "Software Engineering Research Intern",
      company: "MIT EECS",
      period: "Sep 2024 - Present",
      logo: mitLogo,
      description: [
        "Machine learning & software design in chemical informatics under MIT Prof. Connor Coley",
        "Building AI models to enhance chemical workflows in LC-MS processes and automate lab machinery"
      ],
      technologies: ["Python", "JavaScript", "FastAPI", "Docker"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Experience</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glowing timeline line - hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-gold hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-6 w-4 h-4 bg-neon-blue rounded-full neon-glow z-10 group-hover:scale-125 transition-transform duration-300 hidden lg:block"></div>
                
                {/* Mobile connecting line to next card */}
                {index < experiences.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-neon-blue to-neon-purple lg:hidden opacity-60"></div>
                )}
                
                {/* Content */}
                <div className="ml-0 lg:ml-20 w-full">
                  <div className="glass glass-hover neon-border rounded-2xl p-6 hover:shadow-neon transition-all duration-500 relative">
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg glass p-2 flex items-center justify-center flex-shrink-0">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="max-w-8 max-h-8 w-auto h-auto object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground bg-glass-primary px-3 py-1 rounded-full hidden md:block">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="text-muted-foreground mb-4">
                      <ul className="space-y-1">
                        {exp.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;