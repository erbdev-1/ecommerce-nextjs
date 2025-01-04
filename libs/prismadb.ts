import { PrismaClient } from "@prisma/client";

// Global tip bildirimini genişletmek için TypeScript kullanıyoruz
declare global {
  // `globalThis` üzerinde `prisma` adında bir değişken tanımlıyoruz
  // Bu değişken ya `PrismaClient` örneği ya da `undefined` olabilir
  let prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

// Geliştirme ortamında, oluşturulan PrismaClient örneğini global `prisma` değişkenine atıyoruz
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default client;
