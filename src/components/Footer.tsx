import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/muhammad-nomankd",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "www.linkedin.com/in/muhammad-noman-durrani-7b772a266",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:mnomankd@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Muhammad Noman
              </h3>
              <p className="text-muted-foreground">
                Android Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
                © {currentYear} Made with 
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                by Muhammad Noman
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;