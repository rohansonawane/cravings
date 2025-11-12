"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "@/types/product";

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  cartItems: CartLine[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, delta: number) => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartLine[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((productId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [cartItems],
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      cartCount,
      cartTotal,
    }),
    [cartItems, addToCart, updateQuantity, cartCount, cartTotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

