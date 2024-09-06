import { handleGET } from "./GET";
import { handlePOST } from "./POST";

export async function GET() {
  return await handleGET();
}

export async function POST(request) {
  return await handlePOST(request);
}
