"use client";

import UseCart from "@/hooks/useCart";
import { MdShoppingBasket } from "react-icons/md";

const CardCount = () => {
  const { cartPrdcts } = UseCart();
  return (
    <div className="hidden md:flex relative">
      <MdShoppingBasket size={30} />
      <div className="absolute -top-1 -right-3 text-xs bg-orange-900 w-5 h-5 flex items-center justify-center rounded-full">
        {cartPrdcts?.length}
      </div>
    </div>
  );
};

export default CardCount;
