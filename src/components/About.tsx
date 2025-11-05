import React from "react";
import "./About.css";

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Woody</h1>
        <p className="hero-subtitle">
          Crafting sustainable workspace solutions since 2015
        </p>
      </div>

      <div className="about-content">
        <section className="about-story">
          <h2>Our Story</h2>
          <div className="story-text">
            <p>
              Woody was born from a simple idea: to bring natural warmth and
              sustainability to modern workspaces. Founded in 2015 by a team of
              designers and craftspeople, we set out to create products that
              would not only organize and enhance your desk but also bring a
              piece of nature into your daily routine.
            </p>
            <p>
              Every product we create is a testament to our commitment to
              quality craftsmanship and environmental responsibility. We believe
              that the tools you use every day should be beautiful, functional,
              and kind to our planet.
            </p>
          </div>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card">
              <h3>Sustainability First</h3>
              <p>
                We source our materials exclusively from certified sustainable
                forests and use eco-friendly finishes and packaging.
              </p>
            </div>
            <div className="mission-card">
              <h3>Craftsmanship</h3>
              <p>
                Each piece is handcrafted by skilled artisans who take pride in
                their work, ensuring every product meets our high standards.
              </p>
            </div>
            <div className="mission-card">
              <h3>Timeless Design</h3>
              <p>
                We create products that transcend trends, focusing on clean
                lines and functional beauty that lasts for years.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <span className="value-number">01</span>
              <div className="value-content">
                <h3>Environmental Responsibility</h3>
                <p>
                  We're committed to reducing our carbon footprint and
                  protecting the forests we depend on.
                </p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">02</span>
              <div className="value-content">
                <h3>Quality Over Quantity</h3>
                <p>
                  We'd rather make fewer products that last a lifetime than mass
                  produce items that end up in landfills.
                </p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">03</span>
              <div className="value-content">
                <h3>Community & Craft</h3>
                <p>
                  We support local artisans and invest in the communities where
                  our products are made.
                </p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-number">04</span>
              <div className="value-content">
                <h3>Customer Satisfaction</h3>
                <p>
                  Your happiness is our priority. We stand behind every product
                  with a lifetime craftsmanship guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2>Join Our Journey</h2>
          <p>
            Become part of a community that values quality, sustainability, and
            beautiful design. Together, we can create workspaces that inspire
            and respect our planet.
          </p>
        </section>
      </div>
    </div>
  );
};
