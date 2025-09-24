import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TaskAlert App",
      description: "A comprehensive task scheduling application with Firebase integration and weather-based alerts. Features include smart notifications, task prioritization, and weather condition monitoring for outdoor tasks.",
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "Weather API", "Room Database"],
      gradient: "from-blue-400 to-purple-600",
      features: [
        "Real-time weather integration",
        "Smart task scheduling", 
        "Push notifications",
        "Offline support"
      ]
    },
    {
      title: "SalahSync App", 
      description: "Modern masjid management system with prayer time calculations, community notifications, and administrative tools. Built with Material You design principles.",
      tags: ["Kotlin", "MVVM", "Firebase", "Prayer Times API", "Material You"],
      gradient: "from-green-400 to-emerald-600",
      features: [
        "Accurate prayer times",
        "Community announcements",
        "Event management",
        "Qibla direction"
      ]
    },
    {
      title: "MarkMe App",
      description: "Dual-interface attendance tracking system with separate admin and user portals. Features QR code scanning, geofencing, and comprehensive reporting.",
      tags: ["Kotlin", "Clean Architecture", "Room", "QR Scanner", "Geofencing"],
      gradient: "from-orange-400 to-red-600", 
      features: [
        "QR code attendance",
        "Admin dashboard",
        "Attendance reports",
        "Location verification"
      ]
    },
    {
      title: "Location Geofencing App",
      description: "Advanced time tracking application using geofences to monitor time spent in specific locations. Includes detailed analytics and reporting features.",
      tags: ["Kotlin", "Geofencing", "Room Database", "Coroutines", "Analytics"],
      gradient: "from-purple-400 to-pink-600",
      features: [
        "Automatic time tracking",
        "Custom geofences",
        "Detailed analytics",
        "Export reports"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Android applications showcasing modern development practices and user-centric design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
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
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="default"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;