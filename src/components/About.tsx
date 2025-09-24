import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate Android developer crafting exceptional mobile experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Hello! I'm Muhammad Noman Khan Durrani
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated Android developer with a passion for creating innovative, 
                  user-friendly mobile applications. My journey in software development has 
                  been driven by curiosity and a constant desire to learn and implement 
                  cutting-edge technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in modern Android development using Kotlin and Jetpack Compose, 
                  following clean architecture principles to build scalable and maintainable applications.
                </p>
              </div>

              <div className="grid gap-4">
                <Card className="border-primary/20">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p className="text-muted-foreground">BS Information Technology</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Specialization</h4>
                      <p className="text-muted-foreground">Android Development with Kotlin</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Passion</h4>
                      <p className="text-muted-foreground">Building scalable mobile solutions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-card rounded-full shadow-xl flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      MN
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Android Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;