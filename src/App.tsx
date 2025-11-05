// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductGrid } from "./components/ProductGrid";
import { Cart } from "./components/Cart";
import { Contact } from "./components/Contact";
import { Products } from "./components/Products";
import { About } from "./components/About";
import type { Product, CartItem } from "./types";
import { mockProducts } from "./data/mockProducts";
import "./App.css";
import ZEVersionManager from "./components/ZEVersionManager";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <div className="app">
        <ZEVersionManager />
        <Header
          cartItemCount={getTotalItems()}
          onCartClick={() => setIsCartOpen(true)}
        />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <ProductGrid products={mockProducts} onAddToCart={addToCart} />
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact/*" element={<Contact />} />
          </Routes>
        </main>
        {isCartOpen && (
          <Cart
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
