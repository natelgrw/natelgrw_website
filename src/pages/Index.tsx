import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ConnectSection from '@/components/ConnectSection';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background">
      {/* Background particles overlay with subtle gradients */}
      <div className="fixed inset-0 z-0 bg-particles opacity-30"></div>
      
      {/* Floating gradient sparks throughout the site */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="spark spark-blue absolute top-1/4 left-1/3 animation-delay-300"></div>
        <div className="spark spark-purple absolute top-1/2 right-1/4 animation-delay-600"></div>
        <div className="spark spark-gold absolute bottom-1/3 left-1/5 animation-delay-900"></div>
        <div className="spark spark-blue absolute top-3/4 right-1/3 animation-delay-1200"></div>
        <div className="spark spark-purple absolute top-1/6 left-2/3"></div>
        <div className="spark spark-gold absolute bottom-1/4 right-1/5 animation-delay-300"></div>
      </div>
      
      {/* Content with floating sparks */}
      <div className="relative z-10">
        <Header />
        <div className="floating-sparks">
          <HeroSection />
        </div>
        <div className="floating-sparks">
          <ExperienceSection />
        </div>
        <div className="floating-sparks">
          <ProjectsSection />
        </div>
        <div className="floating-sparks">
          <ConnectSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
