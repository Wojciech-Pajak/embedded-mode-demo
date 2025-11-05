// components/Cart.tsx
import React from 'react';
import type {CartItem} from '../types';

interface CartProps {
    items: CartItem[];
    onClose: () => void;
    onRemoveItem: (productId: string) => void;
    onUpdateQuantity: (productId: string, quantity: number) => void;
}

export const Cart: React.FC<CartProps> = ({
                                              items,
                                              onClose,
                                              onRemoveItem,
                                              onUpdateQuantity,
                                          }) => {
    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-overlay">
            <div className="cart">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-btn" onClick={onClose}>
                        ✕
                    </button>
                </div>
                <div className="cart-items">
                    {items.length === 0 ? (
                        <p className="empty-cart">Your cart is empty</p>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <p>${item.price}</p>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => onRemoveItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {items.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
};
