import React from "react";
import "./Products.css";

export const Products: React.FC = () => {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Our Products</h1>
        <p className="hero-subtitle">
          Discover our collection of handcrafted wooden accessories
        </p>
      </div>

      <div className="products-content">
        <section className="product-category">
          <h2>Desk Accessories</h2>
          <div className="category-description">
            <p>
              Elevate your workspace with our premium desk organizers, laptop
              stands, and cable management solutions. Each piece is crafted from
              sustainably sourced wood.
            </p>
          </div>
        </section>

        <section className="product-category">
          <h2>Tech Accessories</h2>
          <div className="category-description">
            <p>
              From phone stands to headphone hangers, our tech accessories blend
              functionality with natural beauty. Designed to complement your
              modern lifestyle.
            </p>
          </div>
        </section>

        <section className="product-category">
          <h2>Home Office</h2>
          <div className="category-description">
            <p>
              Create an inspiring work environment with our home office
              collection. Monitor risers, desk pads, and organizational tools
              that bring warmth to your space.
            </p>
          </div>
        </section>

        <section className="product-features">
          <h2>Why Choose Woody?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🌳</span>
              <h3>Sustainable Materials</h3>
              <p>We use only responsibly sourced wood from certified forests</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✨</span>
              <h3>Handcrafted Quality</h3>
              <p>Each product is carefully crafted by skilled artisans</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Timeless Design</h3>
              <p>Minimalist aesthetics that never go out of style</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">♻️</span>
              <h3>Eco-Friendly</h3>
              <p>Zero waste production and recyclable packaging</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
