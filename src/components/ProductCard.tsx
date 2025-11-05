// components/ProductCard.tsx
import React from 'react';
import type {Product} from '../types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button
                        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    );
};
