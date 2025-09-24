import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // In a real app, this would download the actual CV
    console.log('Downloading CV...');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Muhammad Noman Khan
              <span className="block text-primary mt-2">Durrani</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-medium">
              Android Developer
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building modern, scalable Android apps with 
              <span className="text-accent font-semibold"> Kotlin </span>
              & 
              <span className="text-accent font-semibold"> Jetpack Compose</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-200 px-8 py-3 text-lg"
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              onClick={downloadCV}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 px-8 py-3 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;