"use client";

import textClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();

  const productRating =
    product?.reviews?.reduce(
      (acc: number, review: any) => acc + review.rating,
      0
    ) / product?.reviews?.length;
  return (
    <div
      onClick={() => router.push(`product/${product.id}`)}
      className="w-[240px] shadow-lg p-2 rounded-md cursor-pointer flex flex-col flex-1"
    >
      <div className="relative h-[150px]">
        <Image src={product.image} alt="" fill className="object-contain" />
      </div>
      <div className="text-center mt-2 space-y-1">
        <div> {textClip(product.name)}</div>
        <Rating name="read-only" value={productRating} readOnly />
        <div className="text-orange-600 font-bold text-lg md:text-xl">
          {product.price} £
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
