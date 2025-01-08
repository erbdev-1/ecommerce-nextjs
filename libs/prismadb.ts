import { PrismaClient } from "@prisma/client";

// NodeJS global arayüzünü genişlet
declare global {
  var prisma: PrismaClient | undefined;
}

// Eğer global.prisma mevcutsa onu kullan, yoksa yeni bir PrismaClient oluştur
const prisma = global.prisma || new PrismaClient();

// Geliştirme ortamında, oluşturulan PrismaClient örneğini global `prisma` değişkenine atıyoruz
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
