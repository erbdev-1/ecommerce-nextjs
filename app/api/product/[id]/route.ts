import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;

  // Validate that the ID exists
  if (!params?.id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const currentUser = await getCurrentUser();

  // Check if the user is authorized
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Attempt to delete the product from the database
    const product = await prisma.product.delete({
      where: { id: params.id },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
