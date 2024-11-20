import React from 'react';
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react';
import './footer.css';

const Footer = () => {
  const footerData = {
    solutions: {
      title: "Solutions",
      items: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"]
    },
    support: {
      title: "Support",
      items: ["Submit ticket", "Documentation", "Guides"]
    },
    company: {
      title: "Company",
      items: ["About", "Blog", "Jobs", "Press"]
    },
    legal: {
      title: "Legal",
      items: ["Terms of service", "Privacy policy", "License"]
    }
  };

  const SocialLink = ({ children }) => (
    <a href="#" className="social-link">
      {children}
    </a>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and Social Section */}
          <div className="footer-brand">
            <div className="footer-logo">
            
            </div>
            <p className="footer-description">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="social-links">
              <SocialLink><Facebook className="w-5 h-5" /></SocialLink>
              <SocialLink><Instagram className="w-5 h-5" /></SocialLink>
              <SocialLink><Twitter className="w-5 h-5" /></SocialLink>
              <SocialLink><Github className="w-5 h-5" /></SocialLink>
              <SocialLink><Youtube className="w-5 h-5" /></SocialLink>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className="footer-section">
              <h3>{section.title}</h3>
              <ul className="footer-links">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
