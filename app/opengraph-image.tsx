import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DOTS = [
  [2, 2],
  [6, 2],
  [10, 2],
  [14, 2],
  [18, 2],
  [2, 6],
  [2, 10],
  [2, 14],
  [6, 14],
  [10, 14],
  [14, 14],
  [2, 18],
  [2, 22],
  [2, 26],
];

// Prerendered at build time, like the rest of the site.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0A0A0A",
        backgroundImage:
          "radial-gradient(circle, #2A2A2A 1.5px, transparent 2px)",
        backgroundSize: "24px 24px",
        color: "#F3F1EA",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg
          width="36"
          height="50"
          viewBox="0 0 20 28"
          fill="#FFB22C"
          aria-hidden="true"
        >
          {DOTS.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={1.7} />
          ))}
        </svg>
        <span
          style={{ fontSize: 30, fontWeight: 700, letterSpacing: "0.14em" }}
        >
          FLAVES
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 92,
          lineHeight: 1,
          letterSpacing: "-0.035em",
        }}
      >
        <span>One brief in.</span>
        <span style={{ color: "#FFB22C" }}>One finished ad out.</span>
      </div>
      <span style={{ fontSize: 24, letterSpacing: "0.14em", color: "#9A968C" }}>
        COMING SOON — PRIVATE BETA
      </span>
    </div>,
    size,
  );
}
