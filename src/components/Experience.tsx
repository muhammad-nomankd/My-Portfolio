import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Android Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Developed mobile applications using Kotlin and Jetpack Compose. Collaborated with senior developers on feature implementation and code reviews.",
      achievements: [
        "Built 3 mobile app features using Jetpack Compose",
        "Improved app performance by 25% through optimization",
        "Participated in Agile development processes",
        "Wrote comprehensive unit tests"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room Database"]
    },
    {
      title: "Mobile App Development Training",
      company: "Digital Skills Academy",
      location: "Lahore, Pakistan",
      period: "Jan 2023 - May 2023",
      type: "Training",
      description: "Intensive 5-month training program covering modern Android development practices, clean architecture, and industry best practices.",
      achievements: [
        "Completed 15+ hands-on projects",
        "Mastered Kotlin and Jetpack Compose",
        "Learned clean architecture principles",
        "Earned certification in Android development"
      ],
      technologies: ["Kotlin", "Java", "Firebase", "REST APIs", "Git"]
    },
    {
      title: "Freelance Android Developer",
      company: "Independent",
      location: "Remote", 
      period: "Sep 2023 - Present",
      type: "Freelance",
      description: "Working on various client projects, delivering custom Android applications with focus on user experience and modern design principles.",
      achievements: [
        "Delivered 8+ successful projects",
        "Maintained 5-star client rating",
        "Specialized in Material You design",
        "Built scalable app architectures"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Clean Architecture"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Training': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Freelance': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey in Android development and professional growth
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-foreground">
                          {experience.title}
                        </h3>
                        <Badge className={getTypeColor(experience.type)}>
                          {experience.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground lg:text-right">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="grid lg:grid-cols-2 gap-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-muted-foreground flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;