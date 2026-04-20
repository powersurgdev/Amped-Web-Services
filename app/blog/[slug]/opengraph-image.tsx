import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { getPostBySlug, getCategoryLabel } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Amped Web Studios blog post";
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

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  const title = post?.frontmatter.title ?? "Amped Web Studios Blog";
  const category = post?.frontmatter.category
    ? getCategoryLabel(post.frontmatter.category)
    : "Blog";
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
              width={260}
              height={88}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.02em",
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
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              fontWeight: 600,
              color: "#1a91ee",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            <span>{category}</span>
          </div>

          <div
            style={{
              fontSize: title.length > 60 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              maxWidth: 1040,
            }}
          >
            {title}
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
          <span>ampedwebstudios.com</span>
          <span style={{ color: "#1a91ee", fontWeight: 600 }}>
            Read the full article →
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
