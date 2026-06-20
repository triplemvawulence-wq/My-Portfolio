import { useEffect, useRef } from 'react';
import zambwa from '../assets/zamb.webp';

const skills = [
  'React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Virtual Assistant', 'Data Entry', 'Web Research', 'Admin Support',
  'React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Virtual Assistant', 'Data Entry', 'Web Research', 'Admin Support'
];

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => el.classList.add('visible'));
  }, []);

  return (
    <section 
      id="home" 
      ref={ref} 
      className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div 
        className="absolute -top-52 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(0,232,122,0.07)_0%,transparent_65%)] pointer-events-none" 
      />

      {/* Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_30%,transparent_100%)] pointer-events-none" 
      />

      <div className="w-full max-w-[1100px] mx-auto px-7 relative z-10">

        {/* Top badge */}
        <div className="reveal mb-8">
          <span className="inline-flex items-center gap-2 bg-[var(--accent-dim)] border border-[rgba(0,232,122,0.22)] rounded-full px-4 py-1.5 font-mono text-[11px] text-[var(--accent)] tracking-wider">
            <span className="w-1.75 h-1.75 w-[7px] h-[7px] bg-[var(--accent)] rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
            OPEN FOR FREELANCE · NIGERIA
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[60px]">

          {/* Text column */}
          <div className="flex-1 min-w-[340px] flex flex-col gap-5">
            <h1 className="reveal delay-1 font-['Syne'] text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.05] tracking-tight text-white">
              Samuel<br />
              <span className="text-[var(--accent)]">Dauda</span>{' '}
              Zambwa
            </h1>

            <div className="reveal delay-2 inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl self-start">
              <span className="font-mono text-xs text-[var(--muted)]">
                Frontend Developer
              </span>
              <span className="w-1 h-1 bg-[var(--accent)] rounded-full" />
              <span className="font-mono text-xs text-[var(--muted)]">
                Virtual Assistant
              </span>
            </div>

            <p className="reveal delay-3 text-base text-[var(--muted)] leading-relaxed font-['DM_Sans'] max-w-[440px]">
              I build clean, responsive React interfaces and provide reliable virtual assistance —
              fast delivery, clear communication, zero surprises.
            </p>

            <div className="reveal delay-4 flex flex-wrap gap-3 mt-1">
              <a 
                href="#contact" 
                className="px-7 py-3 rounded-[9px] bg-[var(--accent)] text-black font-['Syne'] font-bold text-sm no-underline tracking-wide transition-all duration-200 inline-flex items-center gap-2 hover:opacity-90"
              >
                Let's Work Together →
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 rounded-[9px] bg-transparent text-[var(--text)] border border-[var(--border)] font-['DM_Sans'] font-medium text-sm no-underline transition-all duration-200 hover:bg-[rgba(255,255,255,0.02)]"
              >
                View Services
              </a>
            </div>

            {/* Social links */}
            <div className="reveal delay-5 flex gap-2.5 mt-1">
              {[
                { label: 'Email', href: 'mailto:samueldzambwa@gmail.com', icon: '✉' },
                { label: 'WhatsApp', href: 'https://wa.me/2349129606487', icon: '💬' },
                { label: 'Upwork', href: '#', icon: '🔗' },
              ].map(s => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  title={s.label} 
                  className="w-10 h-10 bg-[var(--card)] border border-[var(--border)] rounded-[9px] flex items-center justify-center text-base no-underline transition-colors duration-200 hover:border-[var(--accent)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Photo column */}
          <div className="reveal delay-2 shrink-0 relative mt-6 md:mt-0">
            <div className="w-[260px] h-[300px] rounded-[20px] bg-[var(--card)] border border-[var(--border)] overflow-hidden relative">
              <img 
                src={zambwa} 
                alt="Samuel Zambwa" 
                decoding="async" 
                fetchPriority="high" 
                loading="eager" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,15,0.5)] to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[var(--accent)] rounded-xl p-[10px_14px]">
              <div className="font-['Syne'] font-extrabold text-lg text-black Regal leading-none">100%</div>
              <div className="font-['DM_Sans'] text-[10px] text-black/70 font-semibold mt-0.5">COMMITTED</div>
            </div>
          </div>

        </div>
      </div>

      {/* Skills ticker */}
      <div className="mt-20 border-t border-b border-[var(--border)] py-3.5 overflow-hidden bg-[var(--surface)]">
        <div className="flex gap-10 w-max animate-[marquee_22s_linear_infinite]">
          {skills.map((s, i) => (
            <span 
              key={i} 
              className={`font-mono text-xs tracking-wider white-space-nowrap flex items-center gap-10 ${
                i % 4 === 0 ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
              }`}
            >
              {s}
              {i % 2 === 1 && <span className="text-[var(--accent)] text-[8px]">◆</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Global CSS Inject for Marquee Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;