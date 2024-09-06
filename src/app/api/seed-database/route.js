import { seed } from "@/database/seeders";

export async function GET() {
  return await seed();
}
