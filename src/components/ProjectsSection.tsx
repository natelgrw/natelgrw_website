import { useState } from 'react';
import { Search, ExternalLink, Github } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    'All Projects',
    'Research',
    'Machine Learning',
    'Embedded Systems'
  ];

  const projects = [
    {
      title: "TITAN",
      categories: ["Research", "Machine Learning"],
      description: "A graph foundation model currently under development that automates operational amplifier topology generation and device sizing across 11 performance specifications.",
      emoji: "⚡",
      tags: ["BoTorch", "Cadence Spectre", "Bash"],
      github: "https://github.com/natelgrw/titan_foundation_model",
      version: "0.2.0"
    },
    {
      title: "FirmaForge",
      categories: ["Embedded Systems"],
      description: "A firmware analysis toolkit for Linux embedded devices that automates extraction, fuzzing, and repacking of IoT firmware images to streamline reverse engineering and reduce manual analysis time.",
      emoji: "⚙️",
      tags: ["Click", "QEMU", "Magic"],
      github: "https://github.com/natelgrw/firmaforge",
      version: "1.0.0"
    },
    {
      title: "PeakProphet",
      categories: ["Research", "Machine Learning"],
      description: "A machine learning pipeline integrating state of the art retention time, absorption maxima, mass spectrometry, and product prediction models with matrix-based scoring to enable accurate compound identification form raw LC-MS data.",
      emoji: "🔮",
      tags: ["FastAPI", "Docker", "Jupyter Notebook"],
      github: "https://github.com/natelgrw/peak_prophet",
      version: "1.0.0"
    },
    {
      title: "AMAX",
      categories: ["Research", "Machine Learning"],
      description: "A collection of machine learning models currently under development trained on a benchmark dataset of 40,016 chemical compounds for predicting molecular absorption maxima.",
      emoji: "〰️",
      tags: ["XGBoost", "PaDEL-Descriptor", "Pandas"],
      github: "https://github.com/natelgrw/amax_models",
      version: "0.1.0"
    },
    {
      title: "ReTiNA",
      categories: ["Research", "Machine Learning"],
      description: "A collection of ML models currently under development trained on a benchmark dataset of 4,359,188 chemical compounds for predicting molecular LC-MS retention time.",
      emoji: "🧪",
      tags: ["PyTorch", "DeepChem", "RDKit"],
      github: "https://github.com/natelgrw/retina_models",
      version: "0.1.0"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All Projects' || project.categories.includes(activeFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Projects</h2>
        </div>

        {/* Search and Filters */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 glass glass-hover neon-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`glass-hover transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white neon-glow'
                    : 'neon-border hover:border-neon-blue/50 border-muted bg-transparent hover:bg-transparent'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass glass-hover neon-border rounded-2xl overflow-hidden group hover:shadow-neon transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <div className="text-6xl gradient-text opacity-40">
                  {project.emoji}
                </div>
                
                {/* Version Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                  v{project.version}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{project.categories.join(" & ")}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-glass-primary text-primary border border-primary/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full neon-border hover:border-neon-blue/50 border-muted bg-transparent hover:bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;