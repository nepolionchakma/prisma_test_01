const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  log: ["query", "error"],
});
export default prisma;
