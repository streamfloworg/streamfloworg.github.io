import { CONFIG } from '../config'

interface NavProps {
  scrolled: boolean
}

export default function Nav({ scrolled }: NavProps) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,12,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="14" fill="#2dd4bf" fillOpacity="0.15" />
          <polygon points="11,9 11,19 21,14" fill="#2dd4bf" />
        </svg>
        <span style={{
          fontFamily: "'Roboto Slab', serif",
          fontWeight: 700,
          fontSize: '1.1rem',
          color: '#e8eaf0',
          letterSpacing: '-0.01em',
        }}>
          StreamFlow
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <a
          href={`https://github.com/${CONFIG.githubRepo}/releases`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#2dd4bf')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
        >
          Releases
        </a>
        <a
          href={`https://github.com/${CONFIG.githubRepo}/issues`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#2dd4bf')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
        >
          Issues
        </a>
        <a
          href={`https://github.com/${CONFIG.githubRepo}/releases/latest`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#2dd4bf',
            color: '#0a0c10',
            fontSize: '0.875rem',
            fontWeight: 600,
            textDecoration: 'none',
            padding: '0.5rem 1.1rem',
            borderRadius: '6px',
            transition: 'opacity 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Download
        </a>
      </div>
    </nav>
  )
}
