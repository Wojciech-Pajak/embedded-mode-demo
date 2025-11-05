import React, { useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import {
  changeWidgetColors,
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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  switchToLightThemeWidget();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

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
          <CustomLink to="/" className="nav-link">Home</CustomLink>
          <CustomLink to="/products" className="nav-link">Products</CustomLink>
          <CustomLink to="/about" className="nav-link">About</CustomLink>
          <CustomLink to="/contact/message" className="nav-link">Contact</CustomLink>
        </nav>
        <button className="cart-button" onClick={onCartClick}>
          🛒 Cart ({cartItemCount})
        </button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};
