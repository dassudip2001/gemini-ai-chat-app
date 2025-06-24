import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
  };
  
  const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
      log: [
        // You can specify different levels and events here
        { level: "warn", emit: "event" }, // Emits 'warn' logs as events
        { level: "info", emit: "event" }, // Emits 'info' logs as events
        { level: "error", emit: "event" }, // Emits 'error' logs as events
        { level: "query", emit: "event" }, // Most commonly used for seeing actual SQL queries
      ],
    }).$extends(withAccelerate());
  
  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
  
  export default prisma;