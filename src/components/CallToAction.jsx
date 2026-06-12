import { useEffect, useRef } from 'react';

const CallToAction = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} style={{
      padding: '80px 0 100px',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>

        
        <div className="reveal" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>Contact</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
        </div>

        
        <div className="reveal delay-1" style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 20, padding: '56px 48px',
          position: 'relative', overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center',
        }}>
       
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(0,232,122,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em',
              color: '#fff', lineHeight: 1.1, marginBottom: 16,
            }}>
              Have a project in mind?<br />
              <span style={{ color: 'var(--accent)' }}>Let's talk.</span>
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 16,
              color: 'var(--muted)', lineHeight: 1.7, maxWidth: 440,
            }}>
              Whether it's a landing page, a dashboard build, or admin support — send me a message and I'll reply within a few hours.
            </p>
          </div>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: 12,
            position: 'relative', zIndex: 1, minWidth: 200,
          }}>
            <a
              href="mailto:samueldzambwa@gmail.com"
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 20px', borderRadius: 11,
                background: 'var(--accent)', color: '#000',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <span style={{ fontSize: 18 }}>✉</span>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, lineHeight: 1 }}>Send an Email</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, opacity: 0.7, marginTop: 2 }}>samueldzambwa@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/2349129606487"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 20px', borderRadius: 11,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text)', textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,232,122,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <span style={{ fontSize: 18 }}>💬</span>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, lineHeight: 1 }}>WhatsApp</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>+234 912 960 6487</div>
              </div>
            </a>
          </div>
        </div>

        
        <div className="reveal delay-2" style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
          <span style={{ width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%', animation: 'pulseDot 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--muted)' }}>
            Currently available for new freelance projects
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #contact > div > div:nth-child(2) > div:last-child { min-width: auto !important; }
        }
        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.8); }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
