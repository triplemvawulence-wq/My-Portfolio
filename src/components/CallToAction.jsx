import { useEffect, useRef } from 'react';

const CallToAction = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }
    }, { threshold: 0.2 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="pt-20 pb-[100px] bg-[var(--surface)] border-t border-[var(--border)]"
    >
      <div className="max-w-[1100px] mx-auto px-7">

        {/* Section label */}
        <div className="reveal mb-4">
          <div className="flex items-center gap-3.5">
            <span className="font-mono text-[11px] text-[var(--accent)] tracking-[0.14em] uppercase">
              Contact
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </div>

        {/* Big CTA card */}
        <div className="reveal delay-1 relative overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center bg-[var(--card)] border border-[var(--border)] rounded-[20px] p-8 md:p-[56px_48px]">
          
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,232,122,0.06)_0%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-['Syne'] font-extrabold text-[clamp(28px,4vw,48px)] tracking-[-0.03em] text-white leading-[1.1] mb-4">
              Have a project in mind?<br />
              <span className="text-[var(--accent)]">Let's talk.</span>
            </h2>
            <p className="font-['DM_Sans'] text-base text-[var(--muted)] leading-[1.7] max-w-[440px]">
              Whether it's a landing page, a dashboard build, or admin support — send me a message and I'll reply within a few hours.
            </p>
          </div>

          {/* Contact options */}
          <div className="flex flex-col gap-3 relative z-10 min-w-0 md:min-w-[200px]">
            <a
              href="mailto:samueldzambwa@gmail.com"
              className="flex items-center gap-3 p-[14px_20px] rounded-[11px] bg-[var(--accent)] text-black no-underline transition-opacity duration-200 hover:opacity-85"
            >
              <span className="text-18px text-lg">✉</span>
              <div>
                <div className="font-['Syne'] font-bold text-[13px] leading-none">Send an Email</div>
                <div className="font-mono text-[10px] opacity-75 mt-0.5">samueldzambwa@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/2349129606487"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-[14px_20px] rounded-[11px] bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] no-underline transition-colors duration-200 hover:border-[rgba(0,232,122,0.3)]"
            >
              <span className="text-18px text-lg">💬</span>
              <div>
                <div className="font-['Syne'] font-bold text-[13px] leading-none">WhatsApp</div>
                <div className="font-mono text-[10px] text-[var(--muted)] mt-0.5">+234 912 960 6487</div>
              </div>
            </a>
          </div>
        </div>

        {/* Availability line */}
        <div className="reveal delay-2 mt-6 flex items-center gap-2.5 justify-center">
          <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-[pulseDot_2s_ease-in-out_infinite]" />
          <span className="font-['DM_Sans'] text-sm text-[var(--muted)]">
            Currently available for new freelance projects
          </span>
        </div>
      </div>

      {/* Kept solely for the custom dot animation scaling keys */}
      <style>{`
        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.8); }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;