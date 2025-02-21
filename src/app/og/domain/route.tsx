import { ImageResponse } from "next/og";

export const runtime = "edge";

const THEME = {
  light: {
    BACKGROUND: "#ffffff",
    FOREGROUND: "#09090b",
    BORDER: "#e4e4e7",
  },
  dark: {
    BACKGROUND: "#09090b",
    FOREGROUND: "#fafafa",
    BORDER: "#27272a",
  },
} as const;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const domain = searchParams.get("domain");
  const theme = searchParams.get("theme") === "light" ? "light" : "dark";
  const isForSale = searchParams.get("sale") === "true";

  const { BACKGROUND, FOREGROUND, BORDER } = THEME[theme];

  const fontHeading = await fetch(
    new URL("../../fonts/Magistral-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontBody = await fetch(
    new URL("../../fonts/Roboto-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: FOREGROUND,
          background: BACKGROUND,
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
            border: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: `1px solid ${BORDER}`,
              borderRight: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderTop: `1px solid ${BORDER}`,
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <h1
                style={{
                  marginTop: 32,
                  marginBottom: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  fontFamily: "Magistral",
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
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <p
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  color: isForSale ? "#22c55e" : undefined,
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 32,
                  padding: 16,
                }}
              >
                {isForSale
                  ? "The domain name is for sale"
                  : "The website will be launched soon"}
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
          name: "Roboto",
          data: fontBody,
          weight: 500,
        },
      ],
    }
  );
}
