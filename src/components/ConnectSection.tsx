import { useState } from 'react';
import { Github, Linkedin, Mail, Send, FileDown, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ConnectSection = () => {
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

    try {
      // EmailJS configuration - Get these from your EmailJS dashboard
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if EmailJS is properly configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS not configured. Please set up your EmailJS credentials.');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'natelgrw.tech@gmail.com', // Your email address
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      let errorMessage = "There was an error sending your message. Please try again or contact me directly.";
      
      if (error instanceof Error && error.message.includes('EmailJS not configured')) {
        errorMessage = "Contact form is not yet configured. Please contact me directly at natelgrw.tech@gmail.com";
      }
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/natelgrw/',
      color: 'hover:text-neon-blue'
    },
    {
      name: 'Hugging Face',
      icon: () => <span className="text-2xl">🤗</span>,
      href: 'https://huggingface.co/natelgrw/',
      color: 'hover:text-neon-purple'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/natelgrw//',
      color: 'hover:text-neon-blue'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/nate.lgrw/',
      color: 'hover:text-neon-purple'
    }
  ];

  return (
    <section id="connect" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="glass glass-hover neon-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass glass-hover neon-border focus:ring-neon-blue"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass glass-hover neon-border focus:ring-neon-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass glass-hover neon-border focus:ring-neon-blue"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="glass glass-hover neon-border focus:ring-neon-blue resize-none"
                    placeholder="Tell me about your project, research ideas, or collaboration opportunities..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div>
              {/* Contact Information */}
              <div className="glass glass-hover neon-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Links</h3>

                {/* Social Links */}
                <div className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`flex items-center justify-center space-x-3 p-4 glass glass-hover neon-border rounded-xl transition-all duration-300 group ${social.color} h-14`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                        <span className="font-medium text-center">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download Resume */}
                <div>
                  <Button 
                    className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center"
                    asChild
                  >
                    <a href="/NLResume.pdf" download="Nathan_Leung_Resume.pdf">
                      <FileDown className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;