import React, {useEffect, useState} from 'react';
import {changeWidgetColors, switchToDarkThemeWidget, switchToLightThemeWidget} from "../utils/customization.ts";

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    switchToLightThemeWidget()

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        if (theme === 'dark') {
            switchToDarkThemeWidget()
        } else {
            switchToLightThemeWidget()
        }
    }, [theme]);

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src="/src/assets/logo.png" alt="woody" className="logo-image" />
                </div>
                <nav className="nav">
                    <button className="nav-link">Home</button>
                    <button className="nav-link">Products</button>
                    <button className="nav-link">About</button>
                    <button className="nav-link" onClick={changeWidgetColors}>Contact</button>
                </nav>
                <button className="cart-button" onClick={onCartClick}>
                    🛒 Cart ({cartItemCount})
                </button>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </header>
    );
};
