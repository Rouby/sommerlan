import { randomUUID } from "crypto";
import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { expectedOrigin, uploadDir } from "./env";

export async function storeFile(file: File) {
  const id = randomUUID();
  const uploadName = `${id}.${file.name.split(".").pop()}`;

  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }

  await writeFile(
    join(uploadDir, uploadName),
    Buffer.from(await file.arrayBuffer()),
  );

  return {
    id,
    uploadName,
    url: `${expectedOrigin}/uploads/${uploadName}`,
  };
}
