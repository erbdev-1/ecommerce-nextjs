// app/api/product/[id]/route.ts
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";

// context tipini any olarak belirliyoruz
export async function DELETE(req: NextRequest, context: any) {
  const { id } = context.params;

  if (!id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const product = await prisma.product.delete({
      where: { id },
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
