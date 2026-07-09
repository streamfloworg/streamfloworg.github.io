import { useState } from "react";

const features: { icon: React.ReactNode; label: string; desc: string }[] = [
  // TODO - Fill these placeholder feature items out
  // {
  //   icon: (
  //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  //     </svg>
  //   ),
  //   label: 'Ultra-low latency',
  //   desc: 'Sub-50ms glass-to-glass latency with our custom QUIC-based transport layer. No buffering, no compromise.',
  // },
  // {
  //   icon: (
  //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <rect x="2" y="3" width="20" height="14" rx="2" />
  //       <path d="M8 21h8M12 17v4" />
  //     </svg>
  //   ),
  //   label: 'Universal protocols',
  //   desc: 'Native RTMP, SRT, WebRTC, HLS, and DASH. Connect to any source or platform with zero config.',
  // },
  // {
  //   icon: (
  //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  //     </svg>
  //   ),
  //   label: 'End-to-end encrypted',
  //   desc: 'Every stream protected with TLS 1.3 and SRTP. Your content, your keys — zero-knowledge by design.',
  // },
  // {
  //   icon: (
  //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <circle cx="12" cy="12" r="3" />
  //       <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  //     </svg>
  //   ),
  //   label: 'Adaptive quality',
  //   desc: 'Real-time bitrate adaptation based on network conditions. Seamless quality shifts with zero interruption.',
  // },
  // {
  //   icon: (
  //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <rect x="3" y="3" width="18" height="18" rx="2" />
  //       <path d="M3 9h18M3 15h18M9 3v18" />
  //     </svg>
  //   ),
  //   label: 'Multi-view grid',
  //   desc: 'Monitor up to 16 streams simultaneously in a customizable grid layout with per-stream audio control.',
  // },
  // {
  //   icon: (
  //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  //     </svg>
  //   ),
  //   label: 'Real-time analytics',
  //   desc: 'Live bitrate graphs, packet loss indicators, and buffer metrics. Know your stream health at a glance.',
  // },
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
