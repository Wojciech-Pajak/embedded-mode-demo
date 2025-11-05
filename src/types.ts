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

export interface ZendeskAPI {
  (action: string, ...args: any[]): void;
}

declare global {
  interface Window {
    zE?: ZendeskAPI;
    messengerSettings?: {
      autoRender?: boolean;
    };
  }
}
