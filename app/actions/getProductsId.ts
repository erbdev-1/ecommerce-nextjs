import prisma from "@/libs/prismadb";
<<<<<<< HEAD

=======
import { products } from "../../utils/Products";
>>>>>>> 4ba58ee261860759f9c8fdebf70d10257df284a8
interface IParams {
  productId?: string;
}
export default async function getProductsId(params: IParams) {
  const { productId } = params;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      reviews: {
        include: {
          user: true,
        },
        orderBy: {
          createdDate: "desc",
        },
      },
    },
  });
  if (!product) {
    return null;
  }
  return product;
}
