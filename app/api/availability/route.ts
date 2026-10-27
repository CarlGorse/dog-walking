import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const availabilityPath = join(process.cwd(), "public", "availability.txt");
  const [contents, fileInfo] = await Promise.all([
    readFile(availabilityPath, "utf8"),
    stat(availabilityPath),
  ]);

  return Response.json(
    { contents, lastUpdated: fileInfo.mtime.toISOString() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
