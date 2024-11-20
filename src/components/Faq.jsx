import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css"; // Ensure the file matches the adjusted styles below

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is lunch provided free of cost?",
      answer:
        "Yes, it is, if you have a membership with us. Otherwise, it is charged as per the menu. Some limits do apply as to how many items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abuse of the system.",
    },
    {
      question: "Do you have 2 Bedroom suites?",
      answer:
        "Yes, we offer 2 Bedroom suites with premium facilities to ensure your utmost comfort during your stay.",
    },
    {
      question: "Are Wi-Fi costs included in the price?",
      answer:
        "Wi-Fi is free and included in all packages. Enjoy high-speed internet connectivity at no extra charge.",
    },
    {
      question: "Where can I reach you for support?",
      answer:
        "You can reach us at support@example.com or call our helpline at +123456789.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h4 className="faq-heading">FAQS</h4>
      <h2 className="faq-title">You have Questions?</h2>
      <p className="faq-subtitle">
        And we have got answers to all of them. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                />
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
