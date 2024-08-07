import {
  Box,
  Button,
  Image,
  InputBase,
  InputBaseProps,
  Menu,
} from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import {
  IconArrowBackUp,
  IconCamera,
  IconTrash,
  IconUpload,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import {
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function ImageInput({
  defaultValue,
  onRemoveImage,
  ...props
}: InputBaseProps &
  InputHTMLAttributes<HTMLInputElement> & { onRemoveImage?: () => void }) {
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

  const { data: devices } = useQuery(["devices"], async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();

    return devices.filter((dev) => dev.deviceId);
  });

  useEffect(() => {
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);

    function handlePaste(evt: ClipboardEvent) {
      if (evt.clipboardData?.items) {
        for (const item of evt.clipboardData.items) {
          if (item.type.startsWith("image")) {
            const file = item.getAsFile();
            console.log(item);
            if (file) {
              setFile(file);
            }
          }
        }
      }
    }
  }, []);

  return (
    <Box>
      <InputBase
        ref={inputRef}
        {...props}
        type="file"
        onChange={(evt) => {
          setFile(evt.currentTarget.files?.item(0) ?? undefined);
        }}
        style={{ display: "none" }}
      />
      <Menu shadow="md" withArrow position="right-start">
        <Menu.Target>
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
            <Image src={url} fit="cover" height="100%" />
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
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            leftSection={<IconUpload />}
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.accept = "image/*";
                inputRef.current.click();
              }
            }}
          >
            Bild hochladen
          </Menu.Item>
          {devices?.some((dev) => dev.kind === "videoinput") && (
            <Menu.Item
              leftSection={<IconCamera />}
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.accept = "image/*;capture=camera";
                  inputRef.current.click();
                }
              }}
            >
              Bild machen
            </Menu.Item>
          )}
          {file && (
            <Menu.Item
              leftSection={<IconArrowBackUp />}
              onClick={() => {
                setFile(undefined);
                setNoDefaultFallback(false);
              }}
            >
              Bild zurücksetzen
            </Menu.Item>
          )}
          <Menu.Item
            color="red"
            leftSection={<IconTrash />}
            onClick={() => {
              setFile(undefined);
              setNoDefaultFallback(true);
              onRemoveImage?.();
            }}
          >
            Bild entfernen
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );

  return (
    <Box>
      <Dropzone
        multiple={false}
        inputProps={{ capture: "user" }}
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
          <Image src={url} fit="cover" height="100%" />
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
          onRemoveImage?.();
        }}
        color="red"
      >
        Bild entfernen
      </Button>
    </Box>
  );
}
