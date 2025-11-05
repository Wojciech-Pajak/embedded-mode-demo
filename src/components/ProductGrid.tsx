// components/ProductGrid.tsx
import React from 'react';
import { ProductCard } from './ProductCard';
import type {Product} from '../types';

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
    return (
        <div className="product-grid">
            <h2>Our Handcrafted Products</h2>
            <div className="grid">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};
