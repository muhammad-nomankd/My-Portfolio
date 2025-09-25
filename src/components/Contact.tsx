import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // simple toast state (local)
  const [toast, setToast] = useState<{ text: string; visible: boolean }>({
    text: "",
    visible: false,
  });

  const showToast = (text: string, ms = 3000) => {
    setToast({ text, visible: true });
    window.setTimeout(() => setToast({ text: "", visible: false }), ms);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "mnomankd@gmail.com",
      link: "mailto:mnomankd@gmail.com",
      copyable: false,
    },
    {
      label: "Phone",
      value: "+92 313 9770020",
      link: "tel:+923139770020",
      copyable: true,
    },
    {
      label: "Location",
      value: "Nowshera, Pakistan",
      link: "https://www.google.com/maps/search/?api=1&query=Nowshera+Pakistan",
      copyable: false,
    },
    {
      label: "LinkedIn",
      value: "Muhammad Noman Durrani",
      link: "https://www.linkedin.com/in/muhammad-noman-durrani-7b772a266/",
      copyable: false,
    },
    {
      label: "GitHub",
      value: "@noman-durrani",
      link: "https://github.com/muhammad-nomankd",
      copyable: false,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // copy phone number to clipboard
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch {
      showToast("Unable to copy");
    }
  };

  // Submit via mailto (opens user's mail client prefilled)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // basic client-side validation (already required in form fields)
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showToast("Please fill all fields");
      return;
    }

    setIsSubmitting(true);

    // Build mailto link
    const to = "mnomankd@gmail.com"; // destination e-mail (your inbox)
    const subject = `${formData.subject} — from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mail client (in new tab/window or mail handler)
    // Using window.location.href rather than window.open for consistent mail handlers
    window.location.href = mailto;

    // show a UI toast (mail client opened)
    showToast("Mail client opened. Please send the email to deliver the message.");

    // reset form after brief delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-surface relative overflow-hidden">
      {/* background decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-primary/5 to-transparent rounded-full translate-x-36 translate-y-36 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next Android project or collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* left: contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm open to new opportunities and collaborations. Reach out via email,
                  phone, or social links — or send me a message below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition"
                  >
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg text-primary font-medium">
                        {/* simple visual icon substitute */}
                        {info.label === "Email" && "📧"}
                        {info.label === "Phone" && "📞"}
                        {info.label === "Location" && "📍"}
                        {info.label === "LinkedIn" && "🔗"}
                        {info.label === "GitHub" && "💻"}
                      </div>

                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>

                    {info.copyable && (
                      <button
                        onClick={() => copyToClipboard(info.value)}
                        className="ml-4 px-3 py-2 text-sm rounded bg-primary/5 hover:bg-primary/10"
                        type="button"
                        aria-label={`Copy ${info.label}`}
                      >
                        Copy
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* right: contact form */}
            <div>
              <div className="border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Project discussion, collaboration, etc."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell me about your project or how we can work together..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center items-center gap-2 rounded-md px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-95 disabled:opacity-60"
                  >
                    {isSubmitting ? "Opening mail client..." : "Send Message"}
                  </button>

                  <p className="text-sm text-muted-foreground pt-2">
                    The form opens your mail client pre-filled. After composing, click send in your mail app to deliver the message.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* toast */}
      {toast.visible && (
        <div className="fixed right-6 bottom-6 z-50 rounded-md bg-foreground/95 text-card p-3 shadow-lg">
          <div className="text-sm">{toast.text}</div>
        </div>
      )}
    </section>
  );
};

export default Contact;
