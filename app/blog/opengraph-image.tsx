import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "The Amped Web Studios Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function loadLogo(): string | null {
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), "public", "Amped-Web-Studios-Logo.png")
    );
    return `data:image/png;base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const logo = loadLogo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0d1220 0%, #121a2e 55%, #0a1528 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#eaf0f8",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#1a91ee",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt="Amped Web Studios"
              width={300}
              height={100}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "#1a91ee",
              }}
            >
              AMPED WEB STUDIOS
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#1a91ee",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Blog
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              maxWidth: 1040,
            }}
          >
            Practical guides on web design, SEO, and growing your business online.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#8b96ad",
          }}
        >
          <span>ampedwebstudios.com/blog</span>
          <span style={{ color: "#1a91ee", fontWeight: 600 }}>
            Amped Web Studios
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
