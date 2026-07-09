import { CONFIG } from '../config'

const links = [
  { label: 'Download', href: `https://github.com/${CONFIG.githubRepo}/releases/latest` },
  { label: 'Releases', href: `https://github.com/${CONFIG.githubRepo}/releases` },
  { label: 'Issues', href: `https://github.com/${CONFIG.githubRepo}/issues` },
  { label: 'Source', href: `https://github.com/${CONFIG.githubRepo}` },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '3rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="14" fill="#2dd4bf" fillOpacity="0.12" />
            <polygon points="11,9 11,19 21,14" fill="#2dd4bf" />
          </svg>
          <span style={{
            fontFamily: "'Roboto Slab', serif",
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#4b5563',
          }}>StreamFlow</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            color: '#374151',
            marginLeft: '4px',
          }}>MIT License</span>
        </div>

        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4b5563',
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#2dd4bf'}
              onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: '#374151',
        }}>
          © 2026 StreamFlow Contributors
        </div>
      </div>
    </footer>
  )
}
