"use client";

import UseCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";

const CartClient = () => {
  const { cartPrdcts } = UseCart();
  console.log(cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length === 0) {
    return (
      <div>
        <h1>Your cart is empty</h1>
      </div>
    );
  }
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
              <div>{cart.quantity}</div>
              <div className="text-orange-600 text-lg">
                {cart.price.toFixed(2)} £
              </div>
              <div>
                <button
                  className="bg-red-500 text-white p-3 border rounded-md"
                  onClick={() => {}}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
