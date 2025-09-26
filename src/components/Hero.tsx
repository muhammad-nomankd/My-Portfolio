import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/my_cv.pdf'; // file must be in public/cv/my_cv.pdf
    link.download = 'Muhammad_Noman_CV.pdf'; // filename when downloaded
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background animate-pulse-glow"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-accent/10 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in-up">
              Muhammad Noman Khan
              <span className="block text-primary mt-2 animate-slide-in-left" style={{animationDelay: '0.3s'}}>
                Durrani
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground font-medium animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              Android Developer
            </div>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up mb-8"
              style={{animationDelay: '0.9s'}}
            >
              Building modern, scalable Android apps with
              <span className="text-accent font-semibold transition-colors duration-300 hover:text-primary"> Kotlin </span>
              &
              <span className="text-accent font-semibold transition-colors duration-300 hover:text-primary"> Jetpack Compose</span>
            </p>

            {/* Animated dropdown icon */}
            <div 
              className="flex justify-center mb-8 animate-fade-in-up"
              style={{animationDelay: '1.1s'}}
            >
              <ArrowDown className="w-6 h-6 text-accent animate-bounce cursor-pointer hover:text-primary transition-colors duration-300" />
            </div>
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in"
            style={{animationDelay: '1.2s'}}
          >
            <Button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              variant="outline"
              onClick={downloadCV}
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300 px-8 py-3 text-lg font-semibold"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center space-y-1">
            <ArrowDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 stroke-2" />
            <div className="w-0.5 h-6 bg-gradient-to-b from-muted-foreground to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
