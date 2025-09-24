import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["Kotlin", "Java", "Jetpack Compose", "XML Layouts"],
      color: "primary"
    },
    {
      category: "Architecture & Patterns", 
      skills: ["MVVM", "MVI", "Clean Architecture", "Repository Pattern"],
      color: "accent"
    },
    {
      category: "Android Components",
      skills: ["Navigation Component", "WorkManager", "Room Database", "Data Binding"],
      color: "primary"
    },
    {
      category: "Networking & APIs",
      skills: ["Retrofit", "REST APIs", "JSON", "OkHttp"],
      color: "accent"
    },
    {
      category: "Database & Storage",
      skills: ["Room Database", "SQLite", "SharedPreferences", "DataStore"],
      color: "primary"
    },
    {
      category: "Backend & Cloud",
      skills: ["Firebase", "Cloud Firestore", "Firebase Auth", "Push Notifications"],
      color: "accent"
    },
    {
      category: "Async Programming",
      skills: ["Coroutines", "Flow", "LiveData", "RxJava"],
      color: "primary"
    },
    {
      category: "Tools & Version Control",
      skills: ["Android Studio", "Git", "GitHub", "Gradle"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern Android development technologies and frameworks I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  category.color === 'primary' ? 'border-primary/20 hover:border-primary/40' : 'border-accent/20 hover:border-accent/40'
                }`}
              >
                <CardContent className="p-6">
                  <h3 className={`text-lg font-semibold mb-4 ${
                    category.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant={category.color === 'primary' ? 'default' : 'secondary'}
                        className={`${
                          category.color === 'primary' 
                            ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                            : 'bg-accent/10 text-accent hover:bg-accent/20'
                        } transition-colors duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Always Learning
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  I stay updated with the latest Android development trends and continuously 
                  expand my skill set to deliver cutting-edge mobile solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="outline" className="border-primary text-primary">
                    Kotlin Multiplatform
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent">
                    Compose Multiplatform
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Android 14
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent">
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