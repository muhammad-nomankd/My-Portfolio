import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "noman.durrani@example.com",
      link: "mailto:noman.durrani@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 XXX XXXXXXX",
      link: "tel:+92XXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      link: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Muhammad Noman Durrani",
      link: "https://linkedin.com/in/noman-durrani"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@noman-durrani",
      link: "https://github.com/noman-durrani"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-primary/5 to-transparent rounded-full translate-x-36 translate-y-36"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Let's discuss your next Android project or collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 hover:text-primary transition-colors duration-300">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed hover:text-foreground transition-colors duration-300">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about Android development. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-primary/10 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group/card animate-fade-in-up" style={{animationDelay: `${0.9 + index * 0.1}s`}}>
                    <CardContent className="p-4">
                      <a 
                        href={info.link}
                        className="flex items-center space-x-4 group"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:scale-110 group/card-hover:shadow-md transition-all duration-300">
                          <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{info.label}</p>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-primary/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-slide-in-right" style={{animationDelay: '1.2s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground hover:text-primary transition-colors duration-300">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-foreground group-focus-within:text-primary transition-colors duration-300">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="border-primary/20 focus:border-primary hover:border-primary/50 focus:scale-105 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-foreground group-focus-within:text-primary transition-colors duration-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-primary/20 focus:border-primary hover:border-primary/50 focus:scale-105 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="subject" className="text-foreground group-focus-within:text-primary transition-colors duration-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion, collaboration, etc."
                      required
                      className="border-primary/20 focus:border-primary hover:border-primary/50 focus:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="text-foreground group-focus-within:text-primary transition-colors duration-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can work together..."
                      rows={6}
                      required
                      className="border-primary/20 focus:border-primary hover:border-primary/50 focus:scale-105 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-50 group relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </div>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;