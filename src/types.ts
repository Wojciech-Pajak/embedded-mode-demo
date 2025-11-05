// types.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    inStock: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}
