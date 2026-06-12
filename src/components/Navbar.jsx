import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: '#home',     label: 'Home',     id: 'home' },
    { href: '#about',    label: 'About',    id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#contact',  label: 'Contact',  id: 'contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(13,13,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 13, color: '#000',
          }}>S</span>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '-0.02em' }}>
            SamDev
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <li key={l.id}>
              <a href={l.href} style={{
                display: 'block', padding: '6px 14px', borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
                color: activeSection === l.id ? 'var(--accent)' : 'var(--muted)',
                textDecoration: 'none',
                background: activeSection === l.id ? 'var(--accent-dim)' : 'transparent',
                border: '1px solid',
                borderColor: activeSection === l.id ? 'rgba(0,232,122,0.2)' : 'transparent',
                transition: 'all 0.2s',
              }}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href="#contact"
            style={{
              padding: '8px 18px', borderRadius: 8,
              background: 'var(--accent)',
              color: '#000', fontWeight: 700, fontSize: 13,
              fontFamily: "'Syne', sans-serif",
              textDecoration: 'none', letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'none' }}
            className="show-mobile"
          >
            <div style={{ width: 20, height: 2, background: 'var(--text)', borderRadius: 2, marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <div style={{ width: 20, height: 2, background: 'var(--text)', borderRadius: 2, marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
            <div style={{ width: 20, height: 2, background: 'var(--text)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(13,13,15,0.97)', borderTop: '1px solid var(--border)',
          padding: '16px 28px 20px',
        }}>
          {links.map(l => (
            <a
              key={l.id} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 16,
                color: activeSection === l.id ? 'var(--accent)' : 'var(--text)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border2)',
              }}
            >{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
