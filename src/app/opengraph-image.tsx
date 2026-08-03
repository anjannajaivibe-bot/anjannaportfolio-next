import { ImageResponse } from "next/og";

export const alt = "Anjanna Margam, Marketing Executive, Retail Strategy and Digital Growth";
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
          position: "relative",
          overflow: "hidden",
          color: "#f2efe8",
          background: "#0b0b0a",
          fontFamily: "Arial, sans-serif",
          padding: "72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            border: "1px solid rgba(201,255,69,.4)",
            borderRadius: "50%",
            right: "-90px",
            top: "55px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            border: "1px solid rgba(200,137,92,.42)",
            borderRadius: "50%",
            right: "-5px",
            top: "140px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", width: "860px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#a7a79f",
            }}
          >
            <span style={{ width: "52px", height: "2px", background: "#c9ff45", marginRight: "18px" }} />
            Executive Portfolio
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "58px",
              fontSize: "86px",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-5px",
              textTransform: "uppercase",
            }}
          >
            <span>Anjanna</span>
            <span>Margam</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "42px",
              fontSize: "28px",
              color: "#c9ff45",
            }}
          >
            Marketing Executive
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              fontSize: "24px",
              color: "#c7c5bd",
            }}
          >
            Retail Strategy · Digital Growth · Business Transformation
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "72px",
            bottom: "58px",
            display: "flex",
            fontSize: "20px",
            color: "#a7a79f",
          }}
        >
          Hyderabad · India
        </div>
      </div>
    ),
    size,
  );
}
