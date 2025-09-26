import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Code } from "lucide-react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              About Me
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Passionate Android developer crafting exceptional mobile experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300">
                  Hello I'm Muhammad Noman Khan Durrani
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                  Android developer with 3+ years experience in Native Android Development using Kotlin, Jetpack Compose and Android SDK.
                  Built and launched user-friendly, real life applications such as Task Alert and MarkMe.
                  Follows MVVM, MVI and Clean Architecture Principles.
                </p>

                {/* Collapsible extra text */}
                {isExpanded && (
                  <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                    Skilled in Firebase Authentication (Auth, Firestore), REST APIs, Room Database, Navigation Component,
                    WorkManager, Coroutines and passionate about UI/UX and Agile Development.
                    I specialize in modern Android development using <span className="text-accent font-semibold hover:text-primary transition-colors duration-300 cursor-default">Kotlin</span>
                    and <span className="text-accent font-semibold hover:text-primary transition-colors duration-300 cursor-default">Jetpack Compose</span>,
                    following clean architecture principles to build scalable and maintainable applications.
                  </p>
                )}

                {/* Read More / Less Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Cards Section */}
              <div className="grid gap-4">
                <Card className="border-primary/20 hover:border-primary/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Education</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">BS Information Technology</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 hover:border-accent/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Code className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">Specialization</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Android Development with Kotlin</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Heart className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Passion</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Building scalable mobile solutions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Content - Profile Picture */}
            <div className="flex justify-center animate-slide-in-right" style={{ animationDelay: "0.9s" }}>
              <div className="relative group">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-500 cursor-pointer">
                  <div className="w-64 h-64 bg-card rounded-full shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    <img
                      src="/images/my_pic.jpg"
                      alt="Muhammad Noman Khan Durrani"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  Android Developer
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute top-8 -right-8 w-4 h-4 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
