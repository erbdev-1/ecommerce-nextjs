import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;

  // Validate params
  if (!params?.id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const currentUser = await getCurrentUser();

  // Check if the user has admin privileges
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Delete the product
    const product = await prisma.product.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);

    // Handle database errors gracefully
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
