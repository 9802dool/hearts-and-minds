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
          background: "#1D4C92",
          color: "#FFFFFF",
          padding: "72px",
        }}
      >
        <div style={{ width: 88, height: 12, background: "#EB1112", marginBottom: 28 }} />
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>Hearts & Minds Programme</div>
        <div style={{ fontSize: 28, marginTop: 20 }}>Changing Hearts & Minds To Form Better Communities.</div>
      </div>
    ),
    { ...size },
  );
}
