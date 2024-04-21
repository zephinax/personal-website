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
  const isForSale = searchParams.get("sale") === "true";

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

  const fontHeading = await fetch(
    new URL("./fonts/Magistral-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontBody = await fetch(
    new URL("./fonts/BT-BeauSans-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#a3a3a3",
          background: "black",
          width: "100%",
          height: "100%",
          padding: "32px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #404040",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "1px solid #404040",
              borderRight: "1px solid #404040",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderTop: "1px solid #404040",
                borderBottom: "1px solid #404040",
              }}
            >
              <h1
                style={{
                  marginTop: 32,
                  marginBottom: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  fontFamily: '"Magistral"',
                  fontWeight: 500,
                  fontSize: 88,
                }}
              >
                {domain}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderBottom: "1px solid #404040",
              }}
            >
              <p
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  color: isForSale ? "#eab308" : undefined,
                  fontFamily: '"BT BeauSans"',
                  fontWeight: 400,
                  fontSize: 32,
                  padding: 16,
                }}
              >
                {isForSale
                  ? "Tên miền đang được rao bán"
                  : "Website sẽ sớm được ra mắt"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Magistral",
          data: fontHeading,
          weight: 500,
        },
        {
          name: "BT BeauSans",
          data: fontBody,
          weight: 400,
        },
      ],
    }
  );
}
