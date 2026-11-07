import { ImageResponse } from "next/og";

export const alt = "MyTaskly: projects, CRM, HR and chat in one workspace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The link preview used on LinkedIn, X, WhatsApp and Slack. */
export default function TwitterImage() {
  const modules = ["Projects", "CRM", "HR and payroll", "Chat", "Client portal"];
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
          background: "linear-gradient(135deg, #050b1a 0%, #0f1a3a 60%, #1c3080 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#b3c4f7" }}>MyTaskly</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Run your software house on one system.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#dfe6fb" }}>
            One flat price for the whole team, not per seat.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {modules.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid rgba(179, 196, 247, 0.45)",
                fontSize: 26,
                color: "#f1f4fd",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
