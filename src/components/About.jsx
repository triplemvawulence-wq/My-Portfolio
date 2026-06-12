import { useEffect, useRef } from 'react';

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '2+', label: 'Skills Areas' },
  { value: '24h', label: 'Response Time' },
  { value: '100%', label: 'Dedication' },
];

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      ref.current
  ?.querySelectorAll('.reveal')
  .forEach(el =>
    el.classList.toggle('visible', e.isIntersecting)
  ); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: '110px 0 80px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>

        {/* Section label */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>02 / About</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h2 className="reveal" style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.03em',
              color: '#fff', lineHeight: 1.1,
            }}>
              Building interfaces<br />
              <span style={{ color: 'var(--accent)' }}>that actually work.</span>
            </h2>

            <p className="reveal delay-1" style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--muted)', fontFamily: "'DM Sans', sans-serif" }}>
              I build clean, responsive web interfaces using <strong style={{ color: 'var(--text)', fontWeight: 600 }}>React</strong> and <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Tailwind CSS</strong> — interfaces that are fast, visually consistent across all screen sizes, and structured for easy maintenance.
            </p>

            <p className="reveal delay-2" style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--muted)', fontFamily: "'DM Sans', sans-serif" }}>
              Based in Nigeria, I'm open to freelance work globally. I specialize in landing pages, admin dashboards, and converting Figma designs into precise, production-ready React components.
            </p>

            <div className="reveal delay-3" style={{
              display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4,
            }}>
              {['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Figma → Code', 'Google Sheets', 'Web Research', 'Admin Support'].map(skill => (
                <span key={skill} style={{
                  padding: '5px 13px', borderRadius: 6,
                  background: 'var(--card)', border: '1px solid var(--border)',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  color: 'var(--muted)',
                }}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Stats grid */}
            <div className="reveal delay-1" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 8,
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '20px', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 800,
                    fontSize: 28, color: 'var(--accent)', lineHeight: 1, marginBottom: 4,
                  }}>{s.value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'var(--muted)' }}>{s.label}</div>
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 48, height: 48,
                    background: 'radial-gradient(circle, var(--accent-dim), transparent)',
                    borderRadius: '50%',
                  }} />
                </div>
              ))}
            </div>

            {/* Commitment list */}
            {[
              { icon: '→', text: 'Clean, readable code — not just code that "works"' },
              { icon: '→', text: 'Mobile-first layouts that hold on every device' },
              { icon: '→', text: 'Consistent communication — no gaps, no silence' },
              { icon: '→', text: 'Honest estimates on scope before I start anything' },
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${i + 2}`} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '14px 16px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 10,
              }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--text)', lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
