import React from 'react';
import '../App.css'; // Import your CSS file

const ContactSection = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <ul className="contact-details">
        <li><strong>Email:</strong></li>
        <li>General Inquiries: <a href="mailto:info@flavorfusion.com">info@flavorfusion.com</a></li>
        <li>Support: <a href="mailto:support@flavorfusion.com">support@flavorfusion.com</a></li>
        <li>Partnership Opportunities: <a href="mailto:partners@flavorfusion.com">partners@flavorfusion.com</a></li>
      </ul>
      <ul className="contact-details">
        <li><strong>Phone:</strong></li>
        <li>Customer Support: +1-800-123-4567</li>
        <li>Office Hours: Monday - Friday, 9 AM - 6 PM (EST)</li>
      </ul>
      <ul className="contact-details">
        <li><strong>Address:</strong></li>
        <li>Flavor Fusion, Inc.<br />123 Culinary Lane<br />Food City, FC 12345</li>
      </ul>
      <ul className="contact-details">
        <li><strong>Social Media:</strong></li>
        <li>Follow us on Twitter: <a href="https://twitter.com/FlavorFusion" target="_blank" rel="noopener noreferrer">@FlavorFusion</a></li>
        <li>Like us on Facebook: <a href="https://www.facebook.com/FlavorFusion" target="_blank" rel="noopener noreferrer">Flavor Fusion</a></li>
        <li>Connect with us on LinkedIn: <a href="https://www.linkedin.com/company/FlavorFusion" target="_blank" rel="noopener noreferrer">Flavor Fusion</a></li>
      </ul>
    </section>
  );
};

export default ContactSection;
