import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set in the environment");
}
const adapter = new PrismaPg({ connectionString });

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

async function main() {
  console.log("Clearing existing data to prevent unique constraints issues...");

  await prisma.module.deleteMany({});
  await prisma.role.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.userRole.deleteMany({});
  await prisma.permission.deleteMany({});

  console.log("Seeding fresh database records...");

  const roles = await prisma.role.createManyAndReturn({
    data: [{ name: "admin" }, { name: "user" }, { name: "operator" }],
  });

  const modules = await prisma.module.createManyAndReturn({
    data: [
      { name: "User" },
      { name: "Role and Permission" },
      { name: "Profile Management" },
      { name: "Tournament" },
      { name: "Season" },
      { name: "Team" },
      { name: "Player" },
      { name: "Tournament Registration" },
      { name: "Match" },
      { name: "Match Result" },
      { name: "Bracket" },
      { name: "Round" },
      { name: "Fixture Generator" },
      { name: "Score" },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
