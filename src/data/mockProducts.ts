// data/mockProducts.ts
// data/mockProducts.ts
import type {Product} from '../types';

export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Handcrafted Oak Dining Table',
        price: 899.99,
        image: 'src/assets/regulation.webp',
        description: 'Beautiful solid oak dining table, perfect for family gatherings.',
        category: 'Furniture',
        inStock: true,
    },
    {
        id: '2',
        name: 'Wooden Cutting Board',
        price: 49.99,
        image: 'src/assets/fabric-selection.webp',
        description: 'Premium bamboo cutting board with natural antimicrobial properties.',
        category: 'Kitchen',
        inStock: true,
    },
    {
        id: '3',
        name: 'Rustic Bookshelf',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
        description: 'Handmade pine bookshelf with rustic finish.',
        category: 'Furniture',
        inStock: false,
    },
    {
        id: '4',
        name: 'Wooden Jewelry Box',
        price: 79.99,
        image: 'src/assets/whole-room.webp',
        description: 'Elegant cherry wood jewelry box with velvet interior.',
        category: 'Accessories',
        inStock: true,
    },
    {
        id: '5',
        name: 'Custom Spice Rack',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
        description: 'Wall-mounted spice rack made from reclaimed wood.',
        category: 'Kitchen',
        inStock: true,
    },
    {
        id: '6',
        name: 'Wooden Coffee Table',
        price: 449.99,
        image: 'src/assets/walnut-desk.webp',
        description: 'Modern walnut coffee table with minimalist design.',
        category: 'Furniture',
        inStock: true,
    },
];
