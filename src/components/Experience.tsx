import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Android Developer Intern",
      company: "AppVerse Technologies",
      location: "Remote",
      period: "July 2025 – Sept 2025",
      type: "Internship",
      description: "Contributed to the design and development of Android applications using Kotlin, Jetpack Compose, and XML. Worked on UI development, state management, data persistence, and API integration to deliver feature-rich apps. Gained hands-on experience in location tracking, real-time data storage, and background services. Developed mini-projects including ChefMate (recipe app), LangPal (language-learning app), and MarkMe (attendance management app). Collaborated closely with the development team, participated in Agile sprints, and followed clean architecture practices.",
      achievements: [
        "Developed ChefMate, LangPal, and MarkMe mini-projects",
        "Hands-on experience with location tracking & background services",
        "Worked on state management, persistence, and API integration",
        "Collaborated in Agile sprints with team"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "XML", "Firebase", "MVVM", "Clean Architecture"]
    },
    {
      title: "Android Developer Intern",
      company: "Khyber Coded",
      location: "Remote",
      period: "Nov 2024 – Jan 2025",
      type: "Internship",
      description: "Collaborated with the in-house development team to build native Android apps using Kotlin and Jetpack Compose. Developed real-time features with Firebase Authentication, Cloud Firestore, and FCM for notifications. Worked with MVVM architecture, Hilt for DI, Coroutines, State Management, Navigation component, and caching with Room, DataStore, and SharedPreferences.",
      achievements: [
        "Built real-time features with Firebase (Auth, Firestore, Cloud Messaging)",
        "Applied MVVM, Hilt DI, and Coroutines",
        "Implemented offline caching with Room and DataStore",
        "Worked on LiveData, Navigation component, and state management"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "DataStore", "Hilt", "Coroutines", "MVVM"]
    },
    {
      title: "Freelance Android Developer",
      company: "Independent",
      location: "Remote",
      period: "Sep 2023 – Present",
      type: "Freelance",
      description: "Delivered custom Android apps focusing on user experience, performance, and clean architecture. Specialized in Kotlin and Jetpack Compose with Firebase and REST APIs for backend integration. Worked on scalable app architectures, Material You design, and collaborated with clients to deliver tailored solutions.",
      achievements: [
        "Delivered multiple successful projects",
        "Specialized in modern UI (Material You + Jetpack Compose)",
        "Maintained clean and scalable app architectures",
        "Kept consistent client satisfaction with 5⭐ ratings"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "REST APIs", "Clean Architecture"]
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
