import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#1d4c92",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", color: "#eb1112" }}>
          Inter Agency Task Force
        </div>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.05, marginTop: 20, maxWidth: 900 }}>
          Hearts and Minds Programme
        </div>
        <div style={{ fontSize: 28, marginTop: 24, maxWidth: 820 }}>
          Community policing in East Port of Spain and Laventille. Initiated 15 May 2006.
        </div>
      </div>
    ),
    { ...size },
  );
}
