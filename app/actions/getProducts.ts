import prisma from "@/libs/prismadb";

export interface IProductParams {
  category?: string | null;
  search?: string | null;
}

export default async function getProducts(params: IProductParams) {
  try {
    const { category, search } = params;
    const searchString = search ?? ""; // Default to empty string if search is null or undefined

    const query: { category?: string } = {};
    if (category) {
      query.category = category;
    }

    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: searchString,
              mode: "insensitive",
            },
          },
        ],
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

    return products;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
}
