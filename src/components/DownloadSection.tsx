import { useState } from 'react'
import { useLatestRelease } from '../hooks/useLatestRelease'
import { CONFIG } from '../config'

function LinkCard({
  href, accent, icon, title, subtitle, tag, primary
}: {
  href: string
  accent: string
  icon: React.ReactNode
  title: string
  subtitle: string
  tag: string
  primary?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        padding: '1.75rem',
        borderRadius: '12px',
        border: `1px solid ${hovered ? accent + '44' : 'rgba(255,255,255,0.07)'}`,
        background: primary
          ? hovered ? 'rgba(45,212,191,0.08)' : 'rgba(45,212,191,0.04)'
          : hovered ? 'rgba(255,255,255,0.04)' : '#111520',
        transition: 'all 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? `0 8px 32px ${accent}22` : 'none',
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '10px',
        background: `${accent}18`,
        color: accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
      }}>
        {icon}
      </div>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: '1.1rem',
        color: '#e8eaf0',
        marginBottom: '0.4rem',
      }}>
        {title}
      </div>
      <div style={{
        color: '#6b7280',
        fontSize: '0.85rem',
        marginBottom: '1rem',
        fontWeight: 300,
      }}>
        {subtitle}
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: accent,
        fontSize: '0.8rem',
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        <span>{tag}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
    </a>
  )
}

export default function DownloadSection() {
  const latestVersion = useLatestRelease()

  const dynamicReleases = [
    { version: `v${latestVersion}`, date: 'Jul 7, 2026', tag: 'Latest', notes: 'Improved SRT handshake stability, fixed multi-monitor scaling on Windows.' },
    { version: 'v2.4.0', date: 'Jun 18, 2026', tag: null, notes: 'QUIC transport backend, real-time analytics panel, macOS 15 support.' },
    { version: 'v2.3.5', date: 'May 29, 2026', tag: null, notes: 'Security patch for TLS certificate validation edge case.' },
  ]

  return (
    <section
      id="download"
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(45,212,191,0.03) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: '#2dd4bf',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Get StreamFlow
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#e8eaf0',
            margin: '0 0 1.25rem',
            letterSpacing: '-0.025em',
          }}>
            Download &amp; Links
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', margin: 0, fontWeight: 300 }}>
            Free and open-source. Always will be.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '4rem',
        }}>
          <LinkCard
            href={`https://github.com/${CONFIG.githubRepo}/releases/latest`}
            accent="#2dd4bf"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            }
            title="Download"
            subtitle="Latest stable release"
            tag={`v${latestVersion}`}
            primary
          />
          <LinkCard
            href={`https://github.com/${CONFIG.githubRepo}/releases`}
            accent="#7c3aed"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            }
            title="Releases"
            subtitle="All versions and changelogs"
            tag="GitHub"
          />
          <LinkCard
            href={`https://github.com/${CONFIG.githubRepo}/issues`}
            accent="#f59e0b"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            }
            title="Issues"
            subtitle="Report bugs and request features"
            tag="GitHub"
          />
        </div>

        {/* Release history */}
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: '#6b7280',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Recent releases
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {dynamicReleases.map((r, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: '1.25rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: '#e8eaf0',
                  }}>{r.version}</span>
                  {r.tag && (
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: '#2dd4bf',
                      background: 'rgba(45,212,191,0.1)',
                      border: '1px solid rgba(45,212,191,0.2)',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      letterSpacing: '0.06em',
                    }}>{r.tag}</span>
                  )}
                  <span style={{ color: '#6b7280', fontSize: '0.85rem', fontWeight: 300 }}>{r.notes}</span>
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#4b5563',
                  flexShrink: 0,
                }}>{r.date}</span>
              </div>
            ))}
          </div>
          <a
            href={`https://github.com/${CONFIG.githubRepo}/releases`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#6b7280',
              fontSize: '0.85rem',
              textDecoration: 'none',
              marginTop: '1.25rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#2dd4bf'}
            onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
          >
            View all releases
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
