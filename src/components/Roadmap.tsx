import { useState } from "react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Stream Deck Integration",
    status: "Completed",
    statusBg: "rgba(45, 212, 191, 0.08)",
    statusColor: "#2dd4bf",
    desc: "A fully re-engineered TypeScript-based Elgato Stream Deck plugin. Integrates volume controls, mute states, and live scene changes.",
  },
  {
    phase: "Phase 2",
    title: "Cross-Platform Core",
    status: "In Progress",
    statusBg: "rgba(59, 130, 246, 0.08)",
    statusColor: "#3b82f6",
    desc: "Migrating core services to support macOS and Linux systems, enabling uniform audio capture and native multi-platform compilation.",
  },
  {
    phase: "Phase 3",
    title: "PanGui Migration",
    status: "Planning",
    statusBg: "rgba(168, 85, 247, 0.08)",
    statusColor: "#a855f7",
    desc: "Transitioning the user interface to the upcoming PanGui framework for native rendering speeds and zero memory footprint.",
  },
  {
    phase: "Phase 4",
    title: "Beta 1.0.0 Release",
    status: "Someday",
    statusBg: "rgba(107, 114, 128, 0.08)",
    statusColor: "#9ca3af",
    desc: "The public release of StreamFlow featuring secure automatic software updates, Twitch/YouTube widget integrations, and a live mixer board.",
  },
];

export default function Roadmap() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ maxWidth: '1100px', margin: '8rem auto 4rem', padding: '0 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#2dd4bf',
          background: 'rgba(45,212,191,0.06)',
          padding: '4px 10px',
          borderRadius: '20px',
          border: '1px solid rgba(45,212,191,0.1)',
        }}>Roadmap</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#f3f4f6',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>The Future of StreamFlow</h2>
        <p style={{
          color: '#9ca3af',
          fontSize: '1.05rem',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>Milestones we are pursuing as we build the ultimate desktop streaming workspace.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
      }}>
        {roadmapItems.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === idx ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.01)',
              border: hovered === idx ? '1px solid rgba(45,212,191,0.2)' : '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === idx ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hovered === idx ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#6b7280',
                fontWeight: 600,
              }}>{item.phase}</span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: item.statusColor,
                background: item.statusBg,
                padding: '3px 8px',
                borderRadius: '12px',
                border: `1px solid ${item.statusColor}33`,
                marginLeft: 'auto',
              }}>{item.status}</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#f3f4f6',
              marginBottom: '0.85rem',
            }}>{item.title}</h3>

            <p style={{
              color: '#9ca3af',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontWeight: 300,
            }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
