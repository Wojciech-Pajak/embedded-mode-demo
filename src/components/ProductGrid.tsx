// components/ProductGrid.tsx


import React, { useEffect, useRef } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
    const zendeskWidgetRef = useRef<HTMLDivElement>(null);
    const hasRenderedWidget = useRef(false);

    useEffect(() => {
        if (window.zE && zendeskWidgetRef.current && !hasRenderedWidget.current) {
            try {
                window.zE("messenger", "render", {
                    mode: "embedded",
                    widget: {
                        targetElement: "#zendesk-widget-container-home",
                    },
                });
                window.zE("messenger:set", "customization", {
                    common: {
                        hideHeader: false,
                    },
                });
                hasRenderedWidget.current = true;
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error("Error rendering Zendesk widget on home:", error);
            }
        }
    }, []);

    // All but last product
    const allButLast = products.slice(0, -1);

    return (
        <div className="product-grid">
            <h2>Our Handcrafted Products</h2>
            <div className="grid">
                {allButLast.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
                {/* Embedded Zendesk widget as last grid item */}
                <div
                    className="product-card zendesk-widget-card"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}
                >
                    <div
                        id="zendesk-widget-container-home"
                        ref={zendeskWidgetRef}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};
