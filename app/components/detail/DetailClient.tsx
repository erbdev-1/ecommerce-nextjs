"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "../detail/Comment";
import Heading from "../general/Heading";

export type CardProductProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  quantity: number;
  description: string;
};

const DetailClient = ({ product }: { product: any }) => {
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product?.id,
    name: product?.name,
    description: product?.description,
    price: product?.price,
    image: product?.image,
    inStock: product?.inStock,
    quantity: 1,
  });

  const increaseDunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    if (cardProduct.quantity > 1) {
      setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  };

  const productRating =
    product?.reviews?.reduce(
      (acc: number, review: any) => acc + review.rating,
      0
    ) / product?.reviews?.length;

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px]">
            <Image src={product?.image} fill alt="" />
          </div>
          <div className="w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-500">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div>Stock Availability :</div>
              {product?.inStock ? (
                <div className="text-green-500">Available</div>
              ) : (
                <div className="text-red-500">Out of Stock</div>
              )}
            </div>
            <Counter
              cardProduct={cardProduct}
              increaseFunc={increaseDunc}
              decreaseFunc={decreaseFunc}
            />
            <div className="text-lg md:text-2xl text-orange-600 font-bold">
              {(product?.price).toFixed(2)} £
            </div>
            <Button text="Add to basket" small onClick={() => {}} />
          </div>
        </div>
        <Heading text="Reviews" />
        <div>
          {product?.reviews?.map((prd: any) => (
            <Comment prd={prd} key={prd.id} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
