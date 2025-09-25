import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
const projects = [
  {
    title: "MarkMe App",
    description: "Attendance tracking system with separate UI for admin and users. Supports QR scanning, manual entry, and geofencing for location-based attendance.",
    tags: ["Kotlin", "Room", "Clean Architecture", "QR Scanner", "Geofencing"],
    gradient: "from-orange-400 to-red-600",
    features: [
      "Admin & User UI separation",
      "QR code attendance",
      "Location-based verification",
      "Attendance reports"
    ]
  },
  {
    title: "TaskAlert App",
    description: "Task scheduling app built with Kotlin and Jetpack Compose. Integrated Firebase authentication, Google sign-in, and weather API for condition-based alerts. Users can add, update, and delete tasks with real-time sync.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Google Sign-In", "Weather API"],
    gradient: "from-blue-400 to-purple-600",
    features: [
      "Email & Google authentication",
      "Save, update, delete tasks",
      "Weather-based smart alerts",
      "Modularized architecture"
    ]
  },
  {
    title: "ChefMate App",
    description: "Recipe management app built with Kotlin and Jetpack Compose. Allows users to add, search, and favorite recipes with modern UI, local storage, and clean architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "MVVM"],
    gradient: "from-pink-400 to-rose-600",
    features: [
      "Add, search, and filter recipes",
      "Favorite recipe management",
      "Room database for local storage",
      "Hilt dependency injection",
      "Bottom navigation & modern Compose UI"
    ]
  },
  {
    title: "Quote App",
    description: "A simple quote application where users can view motivational and inspirational quotes. Built with Jetpack Compose and clean architecture principles.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM"],
    gradient: "from-teal-400 to-indigo-600",
    features: [
      "Display random quotes",
      "Clean architecture",
      "Simple, elegant UI"
    ]
  }
];


  return (
    <section id="projects" className="py-20 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-accent/5 to-transparent rounded-full translate-x-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Android applications showcasing modern development practices and user-centric design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 overflow-hidden cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${0.6 + index * 0.2}s`}}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-3 transition-all duration-300`}></div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:bg-accent group-hover:scale-125 transition-all duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-pointer"
                        style={{
                          animationDelay: `${0.8 + index * 0.2 + tagIndex * 0.1}s`
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="default"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                        View Project
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-125 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-scale-in" style={{animationDelay: '1.6s'}}>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg px-8 py-3 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
