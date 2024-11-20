import React from 'react';
import { Shield, Clock, Sliders, Repeat2, Zap, Search } from 'lucide-react';
import './Features.css';

// FeatureCard Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-wrapper">
      <Icon />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Features Component
const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Lorem ipsum dolor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    {
      icon: Sliders,
      title: "Customizable",
      description: "Lorem ipsum dolor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    {
      icon: Repeat2,
      title: "Reliable",
      description: "Lorem ipsum dolor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Lorem ipsum dolor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    {
      icon: Search,
      title: "Easy",
      description: "Lorem ipsum dolor amet siti ceali ut enim ad minim veniam, quis nostrud."
    }
  ];

  return (
    <div className="features-section">
      <div className="features-header">
        <span className="features-label">FEATURES</span>
        <h2>We have Amazing <span>Service.</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
