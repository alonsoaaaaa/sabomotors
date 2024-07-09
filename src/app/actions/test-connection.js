import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("Database connection successful");
  } catch (error) {
    console.error("HOLA: Database connection failed", error);
  } finally {
    await prisma.$disconnect();
  }
}
// export default testConnection;
testConnection();
