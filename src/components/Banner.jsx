import { useEffect, useRef } from 'react';
import zambwa from '../assets/zamb.webp';

const skills = ['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Virtual Assistant', 'Data Entry', 'Web Research', 'Admin Support', 'React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Virtual Assistant', 'Data Entry', 'Web Research', 'Admin Support'];

const Hero = () => {
  const ref = useRef(null);

 useEffect(() => {
  const elements =
    document.querySelectorAll('.reveal');

  elements.forEach((el) =>
    el.classList.add('visible')
  );
}, []);
  return (
    <section id="home" ref={ref} style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', paddingTop: 80, position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 500,
        background: 'radial-gradient(ellipse, rgba(0,232,122,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        {/* Top badge */}
        <div className="reveal" style={{ marginBottom: 32 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--accent-dim)', border: '1px solid rgba(0,232,122,0.22)',
            borderRadius: 100, padding: '6px 16px',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: 'var(--accent)', letterSpacing: '0.08em',
          }}>
            <span style={{
              width: 7, height: 7, background: 'var(--accent)', borderRadius: '50%',
              animation: 'pulseDot 2s ease-in-out infinite',
            }} />
            OPEN FOR FREELANCE · NIGERIA
          </span>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>

          {/* Text column */}
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h1 className="reveal delay-1" style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em',
              color: '#fff',
            }}>
              Samuel<br />
              <span style={{ color: 'var(--accent)' }}>Dauda</span>{' '}
              Zambwa
            </h1>

            <div className="reveal delay-2" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 10, alignSelf: 'flex-start',
            }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--muted)' }}>
                Frontend Developer
              </span>
              <span style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%' }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--muted)' }}>
                Virtual Assistant
              </span>
            </div>

            <p className="reveal delay-3" style={{
              fontSize: 16, color: 'var(--muted)', lineHeight: 1.75,
              fontFamily: "'DM Sans', sans-serif", maxWidth: 440,
            }}>
              I build clean, responsive React interfaces and provide reliable virtual assistance —
              fast delivery, clear communication, zero surprises.
            </p>

            <div className="reveal delay-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
              <a href="#contact" style={{
                padding: '12px 28px', borderRadius: 9,
                background: 'var(--accent)', color: '#000',
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
                textDecoration: 'none', letterSpacing: '0.01em',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                Let's Work Together →
              </a>
              <a href="#services" style={{
                padding: '12px 24px', borderRadius: 9,
                background: 'transparent', color: 'var(--text)',
                border: '1px solid var(--border)',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
                textDecoration: 'none', transition: 'all 0.2s',
              }}>
                View Services
              </a>
            </div>

            {/* Social links */}
            <div className="reveal delay-5" style={{ display: 'flex', gap: 10, marginTop: 4 }}>
              {[
                { label: 'Email', href: 'mailto:samueldzambwa@gmail.com', icon: '✉' },
                { label: 'WhatsApp', href: 'https://wa.me/2349129606487', icon: '💬' },
                { label: 'Upwork', href: '#', icon: '🔗' },
              ].map(s => (
                <a key={s.label} href={s.href} title={s.label} style={{
                  width: 40, height: 40,
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, textDecoration: 'none', transition: 'border-color 0.2s',
                }}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Photo column */}
          <div className="reveal delay-2" style={{ flex: '0 0 auto', position: 'relative' }}>
            <div style={{
              width: 260, height: 300,
              borderRadius: 20,
              background: 'var(--card)',
              border: '1px solid var(--border)',
              overflow: 'hidden', position: 'relative',
            }}>
              <img src={zambwa} alt="Samuel Zambwa" decoding='async' fetchPriority='high' loading='eager' style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(13,13,15,0.5) 0%, transparent 50%)',
              }} />
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: -16, right: -16,
              background: 'var(--accent)', borderRadius: 12,
              padding: '10px 14px',
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: '#000', lineHeight: 1 }}>100%</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(0,0,0,0.7)', fontWeight: 600, marginTop: 2 }}>COMMITTED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills ticker */}
      <div style={{
        marginTop: 80,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '14px 0',
        overflow: 'hidden',
        background: 'var(--surface)'
      }}>
        <div style={{
          display: 'flex', gap: 40, width: 'max-content',
          animation: 'marquee 22s linear infinite',
        }}>
          {skills.map((s, i) => (
            <span key={i} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
              color: i % 4 === 0 ? 'var(--accent)' : 'var(--muted)',
              letterSpacing: '0.08em', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 40,
            }}>
              {s}
              {i % 2 === 1 && <span style={{ color: 'var(--accent)', fontSize: 8 }}>◆</span>}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.8); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
