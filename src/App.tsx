// App.tsx
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import type {Product, CartItem} from './types';
import { mockProducts } from './data/mockProducts';
import './App.css';

const App: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: Product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity === 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="app">
            <Header
                cartItemCount={getTotalItems()}
                onCartClick={() => setIsCartOpen(true)}
            />
            <main className="main">
                <ProductGrid products={mockProducts} onAddToCart={addToCart} />
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
    );
};

export default App;
