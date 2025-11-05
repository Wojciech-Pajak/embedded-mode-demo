import React from "react";
import "./ContactInfo.css";

export const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info-page">
      <div className="contact-info-header">
        <h1>Contact Information</h1>
        <p className="subtitle">Get in touch with us</p>
      </div>

      <div className="contact-info-content">
        <section className="info-section">
          <h2>Customer Service</h2>
          <div className="info-card">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div className="info-details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:support@woody.com">support@woody.com</a>
                </p>
                <p className="info-note">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div className="info-details">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </p>
                <p className="info-note">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">💬</span>
              <div className="info-details">
                <h3>Live Chat</h3>
                <p>Available on this page</p>
                <p className="info-note">Instant support during business hours</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Business Inquiries</h2>
          <div className="info-card">
            <div className="info-item">
              <span className="info-icon">🤝</span>
              <div className="info-details">
                <h3>Partnerships</h3>
                <p>
                  <a href="mailto:partnerships@woody.com">
                    partnerships@woody.com
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🛍️</span>
              <div className="info-details">
                <h3>Wholesale</h3>
                <p>
                  <a href="mailto:wholesale@woody.com">wholesale@woody.com</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📰</span>
              <div className="info-details">
                <h3>Press</h3>
                <p>
                  <a href="mailto:press@woody.com">press@woody.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Office Hours</h2>
          <div className="info-card">
            <div className="hours-grid">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Social Media</h2>
          <div className="info-card">
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
