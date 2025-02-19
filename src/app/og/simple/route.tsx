import { ImageResponse } from "next/og";

export const runtime = "edge";

const key = crypto.subtle.importKey(
  "raw",
  new TextEncoder().encode(process.env.OG_SECRET),
  { name: "HMAC", hash: { name: "SHA-256" } },
  false,
  ["sign"]
);

function toHex(arrayBuffer: ArrayBuffer) {
  return Array.prototype.map
    .call(new Uint8Array(arrayBuffer), (n) => n.toString(16).padStart(2, "0"))
    .join("");
}

const THEME = {
  light: {
    BACKGROUND: "#ffffff",
    FOREGROUND: "#09090b",
  },
  dark: {
    BACKGROUND: "#09090b",
    FOREGROUND: "#fafafa",
  },
} as const;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");
  const token = searchParams.get("token");
  const theme = searchParams.get("theme") === "light" ? "light" : "dark";

  const { BACKGROUND, FOREGROUND } = THEME[theme];

  const verifyToken = toHex(
    await crypto.subtle.sign(
      "HMAC",
      await key,
      new TextEncoder().encode(JSON.stringify({ title }))
    )
  );

  if (token !== verifyToken) {
    return new Response("INVALID_TOKEN", { status: 401 });
  }

  const fontHeading = await fetch(
    new URL("../../fonts/JetBrainsMono-ExtraBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: FOREGROUND,
          background: BACKGROUND,
          padding: 32,
        }}
      >
        <h1
          style={{
            fontFamily: "JetBrainsMono",
            fontWeight: 800,
            fontSize: 64,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "JetBrainsMono",
          data: fontHeading,
          weight: 800,
        },
      ],
    }
  );
}
