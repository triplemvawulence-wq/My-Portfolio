import { useEffect, useRef } from 'react';

const services = [
  {
    category: 'Frontend Development',
    icon: '⌨',
    color: 'var(--accent)',
    colorDim: 'var(--accent-dim)',
    items: [
      { title: 'Landing Pages', desc: 'Fast, responsive marketing pages built in React & Tailwind. Pixel-perfect from any design file.' },
      { title: 'Admin Dashboards', desc: 'Data-rich interfaces with charts, tables, sidebar nav, and dark/light mode.' },
      { title: 'Website Bug Fixes', desc: 'Layout issues, broken components, CSS fixes — diagnosed and resolved quickly.' },
      { title: 'Figma → React', desc: 'Convert your Figma design into production-ready JSX + Tailwind code.' },
    ],
  },
  {
    category: 'Virtual Assistant',
    icon: '📋',
    color: '#7C3AED',
    colorDim: 'rgba(124,58,237,0.1)',
    items: [
      { title: 'Data Entry', desc: 'Clean, accurate data entry and spreadsheet organization (Excel, Google Sheets).' },
      { title: 'Web Research', desc: 'Lead list building, competitor analysis, market research — structured and delivered.' },
      { title: 'File & Doc Management', desc: 'Organize, format, and manage documents, folders, and cloud storage systems.' },
      { title: 'Admin Support', desc: 'Email drafting, scheduling, task tracking, calendar management for busy owners.' },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} style={{
      padding: '110px 0 80px',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>

        {/* Section label */}
        <div className="reveal" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>03 / Services</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
        </div>

        <div className="reveal delay-1" style={{ marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em',
            color: '#fff', lineHeight: 1.1,
          }}>
            What I Can Do<br /><span style={{ color: 'var(--accent)' }}>For You</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {services.map((svc, si) => (
            <div key={si} className={`reveal delay-${si + 1}`} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 16, overflow: 'hidden',
            }}>
              {/* Card header */}
              <div style={{
                padding: '22px 24px',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: svc.colorDim,
                  border: `1px solid ${svc.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18,
                }}>{svc.icon}</span>
                <span style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: 17, color: '#fff',
                }}>{svc.category}</span>
              </div>

              {/* Services list */}
              <div style={{ padding: '8px 0' }}>
                {svc.items.map((item, ii) => (
                  <div key={ii} style={{
                    padding: '16px 24px',
                    borderBottom: ii < svc.items.length - 1 ? '1px solid var(--border2)' : 'none',
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: svc.color,
                      flexShrink: 0, marginTop: 6,
                    }} />
                    <div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                        fontSize: 14, color: 'var(--text)', marginBottom: 3,
                      }}>{item.title}</div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                        color: 'var(--muted)', lineHeight: 1.6,
                      }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
