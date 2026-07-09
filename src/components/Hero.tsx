import { useLatestRelease } from "../hooks/useLatestRelease";
import { CONFIG } from "../config";

export default function Hero() {
  const latestVersion = useLatestRelease();
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 1.5rem",
      }}
    >
      {/* Ambient radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(45,212,191,0.08) 0%, rgba(124,58,237,0.05) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* CSS animated waveform bars */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes wave-pulse {
            0%, 100% { transform: scaleY(1); opacity: 0.15; }
            50% { transform: scaleY(3.5); opacity: 0.3; }
          }
          .wave-bar {
            width: 2px;
            border-radius: 1px;
            background: #2dd4bf;
            transform-origin: center;
            animation: wave-pulse var(--dur) ease-in-out infinite;
            animation-delay: var(--delay);
            opacity: 0.4;
          }
        `}</style>
        {Array.from({ length: 140 }).map((_, i) => {
          const length = 140;
          const center = length / 2 - 0.5;
          const dist = Math.abs(i - center);
          const baseHeight = Math.max(4, 48 - dist * 1.1);

          // Using a uniform duration prevents phase drift and chaotic wave interference
          const dur = 2.5;
          // Linear delay creates a smooth, continuous traveling wave from left to right
          const delay = -(i * 0.04) % dur;
          // Fade opacity out towards the edges for a premium, integrated look
          const alpha = Math.max(0.08, 0.35 - dist * 0.003);

          return (
            <div
              key={i}
              className="wave-bar"
              style={
                {
                  height: `${baseHeight}px`,
                  opacity: alpha,
                  "--dur": `${dur}s`,
                  "--delay": `${delay}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{ position: "relative", textAlign: "center", maxWidth: "800px" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(45,212,191,0.08)",
            border: "1px solid rgba(45,212,191,0.2)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#2dd4bf",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              color: "#2dd4bf",
              letterSpacing: "0.08em",
            }}
          >
            v{latestVersion} — Latest Release
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Roboto Slab', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#e8eaf0",
            margin: "0 0 1.5rem",
            letterSpacing: "-0.03em",
          }}
        >
          Stream<span style={{ color: "#2dd4bf" }}>Flow</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
            color: "#9ca3af",
            lineHeight: 1.7,
            margin: "0 0 3rem",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: 300,
          }}
        >
          A high-performance, open-source streaming client. Low latency,
          universal protocol support, and a beautiful interface — built for
          serious streamers.
        </p>

        <div
          style={{
            background: "rgba(245, 158, 11, 0.04)",
            border: "1px solid rgba(245, 158, 11, 0.15)",
            borderRadius: "12px",
            padding: "1rem 1.25rem",
            margin: "0 auto 2.5rem",
            textAlign: "left",
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "12px",
            maxWidth: "600px",
          }}
        >
          <span style={{ fontSize: "1.2rem", lineHeight: 1, marginTop: "2px" }}>⚠️</span>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#d97706", lineHeight: 1.5, fontWeight: 400 }}>
            <strong>Important Notice:</strong> StreamFlow is currently in an early alpha stage. We highly recommend conducting extensive off-air testing before using it for live broadcasts, as you may experience stability issues or unexpected behavior.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`https://github.com/${CONFIG.githubRepo}/releases/latest`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#2dd4bf",
              color: "#0a0c10",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              transition: "opacity 0.2s, transform 0.15s, box-shadow 0.2s",
              boxShadow: "0 0 32px rgba(45,212,191,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 48px rgba(45,212,191,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 32px rgba(45,212,191,0.25)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download StreamFlow
          </a>

          <a
            href={`https://github.com/${CONFIG.githubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e8eaf0",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.09)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.572C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Platform badges */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {["Windows"].map((platform) => (
            <span
              key={platform}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "#6b7280",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
                padding: "4px 10px",
                letterSpacing: "0.05em",
              }}
            >
              {platform}
            </span>
          ))}
          <span
            key="comingsoon"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6b7280",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "4px",
              padding: "4px 10px",
              letterSpacing: "0.05em",
            }}
          >
            macOS and Linux coming soon
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, transparent, #2dd4bf)",
          }}
        />
      </div>
    </section>
  );
}
