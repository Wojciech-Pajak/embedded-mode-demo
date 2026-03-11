import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  switchToDarkThemeWidget,
  switchToLightThemeWidget,
} from "../utils/customization.ts";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onCartClick,
}) => {
  const [theme] = useState<"light" | "dark">("light");
  switchToLightThemeWidget();

  //   const _toggleTheme = () => {
  //     const newTheme = theme === "light" ? "dark" : "light";
  //     setTheme(newTheme);
  //     document.documentElement.setAttribute("data-theme", newTheme);
  //   };

  useEffect(() => {
    if (theme === "dark") {
      switchToDarkThemeWidget();
    } else {
      switchToLightThemeWidget();
    }
  }, [theme]);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="woody" className="logo-image" />
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/contact/message" className="nav-link">
            Contact
          </Link>
          <Link to="/help" className="nav-link">
            Help
          </Link>
        </nav>
        <button className="cart-button" onClick={onCartClick}>
          🛒 Cart ({cartItemCount})
        </button>
        {/* <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button> */}
      </div>
    </header>
  );
};
