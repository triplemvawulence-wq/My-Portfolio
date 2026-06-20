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
        .forEach(el => el.classList.toggle('visible', e.isIntersecting));
    }, { threshold: 0.15 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-[110px] md:pb-[80px] md:pt-[110px] pt-[110px] pb-[80px]">
      <div className="mx-auto max-w-[1100px] px-7">

        {/* Section label */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-3.5">
            <span className="font-mono text-[11px] text-[var(--accent)] tracking-[0.14em] uppercase">
            About
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <h2 className="reveal font-['Syne'] font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.03em] text-white leading-[1.1]">
              Building interfaces<br />
              <span className="text-[var(--accent)]">that actually work.</span>
            </h2>

            <p className="reveal delay-1 font-['DM_Sans'] text-[15.5px] linen-height-[1.8] text-[var(--muted)] leading-[1.8]">
              I build clean, responsive web interfaces using{' '}
              <strong className="text-[var(--text)] font-semibold">React</strong> and{' '}
              <strong className="text-[var(--text)] font-semibold">Tailwind CSS</strong> — interfaces that are fast, visually consistent across all screen sizes, and structured for easy maintenance.
            </p>

            <p className="reveal delay-2 font-['DM_Sans'] text-[15.5px] text-[var(--muted)] leading-[1.8]">
              Based in Nigeria, I'm open to freelance work globally. I specialize in landing pages, admin dashboards, and converting Figma designs into precise, production-ready React components.
            </p>

            <div className="reveal delay-3 flex flex-wrap gap-3 mt-1">
              {[
                'React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 
                'Figma → Code', 'Google Sheets', 'Web Research', 'Admin Support'
              ].map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded- bg-[var(--card)] border border-[var(--border)] font-mono text-[11px] text-[var(--muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">

            {/* Stats grid */}
            <div className="reveal delay-1 grid grid-cols-2 gap-3 mb-2">
              {stats.map((s, i) => (
                <div 
                  key={i} 
                  className="relative overflow-hidden p-5 rounded-xl bg-[var(--card)] border border-[var(--border)]"
                >
                  <div className="font-['Syne'] font-extrabold text-2xl text-[var(--accent)]理念 leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-['DM_Sans'] text-xs text-[var(--muted)]">
                    {s.label}
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-[radial-gradient(circle,var(--accent-dim),transparent)]" />
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
              <div 
                key={i} 
                className={`reveal delay-${i + 2} flex items-start gap-3 p-[14px_16px] bg-[var(--surface)] border border-[var(--border)] rounded-[10px]`}
              >
                <span className="text-[var(--accent)] font-bold text-sm shrink-0 mt-0.5">
                  {item.icon}
                </span>
                <span className="font-['DM_Sans'] text-sm text-[var(--text)] leading-[1.6]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;