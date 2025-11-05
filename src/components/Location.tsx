import React from "react";
import "./Location.css";

export const Location: React.FC = () => {
  return (
    <div className="location-page">
      <div className="location-header">
        <h1>Visit Us</h1>
        <p className="subtitle">Find our showroom and headquarters</p>
      </div>

      <div className="location-content">
        <section className="location-section">
          <h2>Showroom & Headquarters</h2>
          <div className="location-card">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Interactive map would be displayed here</p>
            </div>
            <div className="address-details">
              <div className="address-item">
                <span className="address-icon">📍</span>
                <div className="address-info">
                  <h3>Address</h3>
                  <p>123 Oakwood Avenue</p>
                  <p>Portland, OR 97201</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="location-section">
          <h2>How to Get Here</h2>
          <div className="directions-grid">
            <div className="direction-card">
              <span className="direction-icon">🚗</span>
              <h3>By Car</h3>
              <p>
                Free parking available in our lot. Enter from Oak Street and
                look for the Woody signage.
              </p>
              <p className="direction-note">
                GPS Coordinates: 45.5152° N, 122.6784° W
              </p>
            </div>

            <div className="direction-card">
              <span className="direction-icon">🚌</span>
              <h3>Public Transit</h3>
              <p>
                Bus lines 4, 14, and 44 stop within 2 blocks. MAX Light Rail
                station is a 5-minute walk away.
              </p>
              <p className="direction-note">Nearest stop: SW Oak & 2nd Ave</p>
            </div>

            <div className="direction-card">
              <span className="direction-icon">🚴</span>
              <h3>Bike</h3>
              <p>
                Bike racks available at the front entrance. We're on the
                Portland bike network route.
              </p>
              <p className="direction-note">
                Covered parking for rainy days
              </p>
            </div>
          </div>
        </section>

        <section className="location-section">
          <h2>Showroom Hours</h2>
          <div className="info-card">
            <div className="showroom-hours">
              <div className="hours-row">
                <span className="day-label">Monday - Friday</span>
                <span className="time-label">10:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day-label">Saturday</span>
                <span className="time-label">11:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day-label">Sunday</span>
                <span className="time-label">12:00 PM - 5:00 PM</span>
              </div>
            </div>
            <div className="hours-note">
              <p>
                💡 <strong>Note:</strong> We recommend calling ahead for
                personalized consultations or to check product availability.
              </p>
            </div>
          </div>
        </section>

        <section className="location-section">
          <h2>What to Expect</h2>
          <div className="expectations-grid">
            <div className="expectation-item">
              <h3>🛋️ Full Product Display</h3>
              <p>
                See and touch all our products in person. Our showroom features
                complete desk setups to inspire your workspace.
              </p>
            </div>
            <div className="expectation-item">
              <h3>👥 Expert Staff</h3>
              <p>
                Our knowledgeable team can help you choose the perfect products
                and answer questions about materials and care.
              </p>
            </div>
            <div className="expectation-item">
              <h3>🎨 Custom Orders</h3>
              <p>
                Discuss custom sizing, wood types, and finishes with our design
                consultants on-site.
              </p>
            </div>
            <div className="expectation-item">
              <h3>📦 Same-Day Pickup</h3>
              <p>
                Many items are available for immediate purchase and pickup. No
                waiting for shipping!
              </p>
            </div>
          </div>
        </section>

        <section className="location-section">
          <h2>Other Locations</h2>
          <div className="other-locations">
            <div className="location-mini-card">
              <h3>📍 Seattle Store</h3>
              <p>456 Pine Street, Seattle, WA 98101</p>
              <p className="location-status">Opening Spring 2026</p>
            </div>
            <div className="location-mini-card">
              <h3>📍 San Francisco Store</h3>
              <p>789 Market Street, San Francisco, CA 94103</p>
              <p className="location-status">Opening Fall 2026</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
