import { Box, Button, Image, InputBase, InputBaseProps } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function ImageInput({
  defaultValue,
  ...props
}: InputBaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const [file, setFile] = useState<FileWithPath>();
  const [noDefaultFallback, setNoDefaultFallback] = useState(false);

  const url = useMemo(
    () =>
      file
        ? URL.createObjectURL(file)
        : !noDefaultFallback
          ? defaultValue
          : undefined,
    [file, defaultValue, noDefaultFallback],
  );

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (file && inputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(file);
      inputRef.current.files = dt.files;
    } else if (!file && inputRef.current) {
      inputRef.current.files = null;
      inputRef.current.value = "";
    }
  }, [file]);

  return (
    <Box>
      <Dropzone
        multiple={false}
        accept={IMAGE_MIME_TYPE}
        onDrop={([file]) => setFile(file)}
      >
        <InputBase
          ref={inputRef}
          {...props}
          type="file"
          onClick={(e) => e.preventDefault()}
        />

        <Box
          style={{
            width: 200,
            height: 200,
            borderColor: "var(--mantine-color-dimmed)",
            borderWidth: 2,
            borderStyle: "solid",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image src={url} />
          <Box
            style={{
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.7) 100%)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </Dropzone>
      <Button
        onClick={() => {
          setFile(undefined);
          setNoDefaultFallback(false);
        }}
      >
        Bild zurücksetzen
      </Button>
      <Button
        onClick={() => {
          setFile(undefined);
          setNoDefaultFallback(true);
        }}
        color="red"
      >
        Bild entfernen
      </Button>
    </Box>
  );
}
