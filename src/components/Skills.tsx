import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Kotlin", "Python", "SQL", "Java"],
      color: "primary"
    },
    {
      category: "Frameworks & UI",
      skills: ["Jetpack Compose", "XML Layouts", "Android SDK", "Material You"],
      color: "accent"
    },
    {
      category: "Architecture & Patterns",
      skills: ["MVVM", "MVI", "MVP", "Clean Architecture", "Repository Pattern", "Dependency Injection (Hilt, Dagger 2)"],
      color: "primary"
    },
    {
      category: "Android Components",
      skills: ["Navigation Component", "WorkManager", "Room Database", "Data Binding", "LiveData", "ViewModels", "DataStore", "SharedPreferences", "ExoPlayer"],
      color: "accent"
    },
    {
      category: "Networking & APIs",
      skills: ["Retrofit", "REST APIs", "JSON", "OkHttp", "Postman"],
      color: "primary"
    },
    {
      category: "Database & Storage",
      skills: ["Room Database", "SQLite", "DataStore", "SharedPreferences"],
      color: "accent"
    },
    {
      category: "Backend & Cloud",
      skills: ["Firebase (Auth, Firestore, Cloud Messaging)", "GitHub REST APIs"],
      color: "primary"
    },
    {
      category: "Async Programming",
      skills: ["Coroutines", "StateFlow", "SharedFlow", "LiveData", "RxJava"],
      color: "accent"
    },
    {
      category: "Tools & Version Control",
      skills: ["Android Studio", "Git", "GitHub", "Gradle", "Figma", "Zeplin", "Jira", "Slack"],
      color: "primary"
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Collaboration", "Adaptability"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-transparent rounded-full -translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Modern Android development technologies and frameworks I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in-up ${
                  category.color === 'primary' ? 'border-primary/20 hover:border-primary/40' : 'border-accent/20 hover:border-accent/40'
                }`}
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <h3 className={`text-lg font-semibold mb-4 group-hover:scale-105 transition-transform duration-300 ${
                    category.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant={category.color === 'primary' ? 'default' : 'secondary'}
                        className={`group/badge cursor-pointer transform hover:scale-110 ${
                          category.color === 'primary'
                            ? 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
                            : 'bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground'
                        } transition-all duration-300`}
                        style={{
                          animationDelay: `${0.9 + index * 0.1 + skillIndex * 0.05}s`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-scale-in" style={{animationDelay: '1.5s'}}>
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Always Learning
                </h3>
                <p className="text-lg text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                  I stay updated with the latest Android development trends and continuously
                  expand my skill set to deliver cutting-edge mobile solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                    Kotlin Multiplatform
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300">
                    Compose Multiplatform
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                    Android 14
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300">
                    Material You
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
