export function Footer() {
  const teamMembers = [
    "Team Lead: Arjun Menon",
    "Tech Lead: Priya Krishnan",
    "Designer: Rahul Nair",
    "Developer: Aisha Begum",
    "SIH Team ID: SIH2024_KL_001",
  ];

  const contactInfo = [
    { icon: "fas fa-envelope", text: "team@swasthyaconnect.in" },
    { icon: "fas fa-phone", text: "+91 9876543210" },
    { icon: "fas fa-map-marker-alt", text: "Kochi, Kerala, India" },
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fas fa-envelope", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-heartbeat text-primary-foreground text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold" data-testid="text-company-name">SwasthyaConnect</h3>
                <p className="text-sm opacity-80" data-testid="text-company-tagline">HealthBridge Kerala</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6" data-testid="text-company-description">
              Empowering healthcare accessibility for migrant workers through
              innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary hover:text-accent transition-colors"
                  data-testid={`link-social-${index}`}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Team Details */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="heading-team">Our Team</h4>
            <div className="space-y-2 text-sm opacity-80">
              {teamMembers.map((member, index) => (
                <p key={index} data-testid={`text-team-member-${index}`}>
                  {member}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="heading-contact">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              {contactInfo.map((contact, index) => (
                <p key={index} data-testid={`text-contact-${index}`}>
                  <i className={`${contact.icon} mr-2`}></i>
                  {contact.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80 mb-4 md:mb-0" data-testid="text-copyright">
              © 2024 SwasthyaConnect. Built for Smart India Hackathon 2024.
            </p>
            <p className="text-sm opacity-80" data-testid="text-made-with-love">
              Made with ❤️ for Kerala's migrant workers
            </p>
          </div>

          {/* Credits */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-xs opacity-60" data-testid="text-credits">
              <strong>Open Source Credits:</strong> React, Tailwind CSS, Font Awesome, Inter Font
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
