import { useEffect, useRef } from 'react';

const pillars = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most tasks delivered within the agreed deadline — no chasing, no silence.' },
  { icon: '💬', title: 'Clear Communication', desc: 'I respond within hours, ask smart questions upfront, and keep you updated.' },
  { icon: '🎯', title: 'Focused Effort', desc: 'Early career means your project is my priority — not one of twenty juggling acts.' },
  { icon: '🔍', title: 'Honest Scoping', desc: 'I tell you what I can build before I start, so there are no budget surprises.' },
  { icon: '📱', title: 'Mobile-First Builds', desc: 'Every interface I build is tested and polished on mobile before I call it done.' },
  { icon: '♻️', title: 'Clean, Reusable Code', desc: 'Structured components that are easy for any developer to pick up and extend.' },
];

const WWWMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: '110px 0 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>

        {/* Section label */}
        <div className="reveal" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>Why Me</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
        </div>

        <div className="reveal delay-1" style={{ marginBottom: 52 }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em',
            color: '#fff', lineHeight: 1.1, maxWidth: 540,
          }}>
            Why clients choose to<br />
            <span style={{ color: 'var(--accent)' }}>work with me</span>
          </h2>
        </div>

        {/* Quote */}
        <div className="reveal delay-2" style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderLeft: '3px solid var(--accent)',
          borderRadius: 12, padding: '20px 24px', marginBottom: 40,
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15.5, fontStyle: 'italic',
            color: 'var(--text)', lineHeight: 1.75,
          }}>
            "Hiring a beginner comes with questions — I get that. So here's my commitment: I respond fast, 
            I ask the right questions before I start, and I deliver on time even if that means working late. 
            Your project gets my full attention, not a fraction of it."
          </p>
          <div style={{ marginTop: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)' }}>
            — Samuel Zambwa
          </div>
        </div>

        {/* Pillars grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {pillars.map((p, i) => (
            <div key={i} className={`reveal delay-${(i % 3) + 1}`} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '20px',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,232,122,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ fontSize: 22, marginBottom: 10 }}>{p.icon}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 6 }}>{p.title}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default WWWMe;
