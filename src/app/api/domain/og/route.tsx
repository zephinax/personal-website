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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const domain = searchParams.get("domain");
  const token = searchParams.get("token");

  const verifyToken = toHex(
    await crypto.subtle.sign(
      "HMAC",
      await key,
      new TextEncoder().encode(JSON.stringify({ domain }))
    )
  );

  if (token !== verifyToken) {
    return new Response("INVALID_TOKEN", { status: 401 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 32,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          padding: "32px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{domain}</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
