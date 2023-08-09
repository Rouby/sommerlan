import { FileWithPath } from "@mantine/dropzone";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { tokenAtom } from "../state";

export function useUploadFileMutation() {
  const token = useAtomValue(tokenAtom);

  return useMutation(async (file: FileWithPath) => {
    const formData = new FormData();
    formData.append(file.name, file);

    const response = await fetch("/uploads", {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data.url as string;
  });
}
