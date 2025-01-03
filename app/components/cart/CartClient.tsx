"use client";

import UseCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";

const CartClient = () => {
  const {
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  } = UseCart();
  console.log(cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length === 0) {
    return (
      <div>
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  const cartPrdctsTotal = cartPrdcts.reduce(
    (acc: any, item: CardProductProps) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="grid grid-cols-5 gap-5 text-center border-b-2 pb-2">
          <div>Product Image</div>
          <div>Product Name</div>
          <div>Product Quantity</div>
          <div>Product Price</div>
          <div></div>
        </div>
        <div>
          {cartPrdcts.map((cart) => (
            <div
              key={cart.id}
              className="grid grid-cols-5 gap-5  items-center text-center my-5"
            >
              <div className="flex items-center justify-center">
                <Image src={cart.image} width={40} height={40} alt="" />
              </div>
              <div>{cart.name}</div>
              <div className="flex items-center justify-center">
                <Counter
                  cardProduct={cart}
                  increaseFunc={() => addToBasketIncrease(cart)}
                  decreaseFunc={() => addToBasketDecrease(cart)}
                />
              </div>
              <div className="text-orange-600 text-lg">
                {cart.price.toFixed(2)} £
              </div>
              <div>
                <button
                  className="bg-red-500 text-white p-3 border rounded-md"
                  onClick={() => removeFromCart(cart)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center my-5 py-5 border-t-2">
          <button
            className="w-1/5 underline text-sm"
            onClick={() => removeCart()}
          >
            Delete Basket
          </button>
          <div className="text-lg md:text-2xl text-orange-600 font-bold">
            {cartPrdctsTotal.toFixed(2)} £
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
