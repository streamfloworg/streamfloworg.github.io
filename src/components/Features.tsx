import { useState } from "react";

const features: { icon: React.ReactNode; label: string; desc: string }[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <polygon points="12 6 7 11 17 11" fill="#2dd4bf" />
      </svg>
    ),
    label: "Hybrid WPF + Rust Core",
    desc: "Uses a native Rust core built for ultra-fast capture and Direct2D compositing, wrapped in a responsive C# WPF desktop client.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18" />
      </svg>
    ),
    label: "Go Live Scene Builder",
    desc: "Compose scenes using screen, window, and camera captures. Drag, resize, snap placement, and apply chroma key or opacity filters.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <circle cx="4" cy="12" r="1" fill="#2dd4bf" />
        <circle cx="12" cy="10" r="1" fill="#2dd4bf" />
        <circle cx="20" cy="14" r="1" fill="#2dd4bf" />
      </svg>
    ),
    label: "SoundFlow Audio Mixer",
    desc: "Full-featured audio mixer with per-device channel strips. Includes volume, mute, solo, live level metering, and master control.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    label: "Transition-Ready Scenes",
    desc: "Switch between multiple scene layouts on the fly with smooth fade and slide transitions. Easily backup, import, or export scene sets.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z" />
      </svg>
    ),
    label: "Twitch & YouTube Output",
    desc: "Direct RTMP streaming with OAuth support. Test your pipeline safely using the built-in followers-hidden bandwidth-test mode.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
    label: "Velopack Self-Updates",
    desc: "Seamless, zero-click background installations and updates powered by Velopack, alongside standard MSIX packaging path.",
  },
];

function FeatureCard({
  icon,
  label,
  desc,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem",
        background: hovered ? "rgba(45,212,191,0.04)" : "#0a0c10",
        transition: "background 0.2s",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          background: hovered
            ? "rgba(45,212,191,0.15)"
            : "rgba(45,212,191,0.08)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
          transition: "background 0.2s",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#e8eaf0",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </div>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          margin: 0,
          fontWeight: 300,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section
      style={{
        padding: "clamp(5rem, 10vw, 8rem) 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#2dd4bf",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          What's inside
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 700,
            color: "#e8eaf0",
            margin: "0 0 1.25rem",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
          }}
        >
          Built for performance.
          <br />
          Designed for clarity.
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: "1.05rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Every feature engineered to reduce friction between you and your
          audience.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
