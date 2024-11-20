import React from "react";
import './Testimonials.css';

const testimonials = [
  {
    name: "CHARLOTTE HALE",
    image: "https://www.bing.com/th?id=OIP.Bx9DQIvKlnPzcOBcncg40gHaJ4&w=84&h=98&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
  },
  {
    name: "ADAM CUPPY",
    image: "https://th.bing.com/th/id/OIP.CSThJ0qpV3XKsURD0iKZ0AHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
  },
  {
    name: "STEVEN MARCETTI",
    image: "https://th.bing.com/th/id/OIP.amEbZWd9JRcIxkyVtYNODwHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="section-title">Customers <span className="highlight">Love</span> Us.</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
