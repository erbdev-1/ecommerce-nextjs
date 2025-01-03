"use client";

import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useState } from "react";

interface CartContextType {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
}

const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>([]);

  const addToBasket = useCallback(
    (product) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  const value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
  };
  return <CartContext.Provider value={value} {...props} />;
};

const UseCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default UseCart;
