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
      if (e.isIntersecting) {
        ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={ref} 
      className="pt-[110px] pb-20 bg-[var(--surface)] border-t border-b border-[var(--border)]"
    >
      <div className="max-w-[1100px] mx-auto px-7">

        {/* Section label */}
        <div className="reveal mb-4">
          <div className="flex items-center gap-[14px]">
            <span className="font-mono text-[11px] text-[var(--accent)] tracking-[0.14em] uppercase">
               Services
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </div>

        {/* Heading Container */}
        <div className="reveal delay-1 mb-14">
          <h2 className="font-['Syne'] font-extrabold text-[clamp(28px,4vw,44px)] tracking-[-0.03em] text-white leading-[1.1]">
            What I Can Do<br />
            <span className="text-[var(--accent)]">For You</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, si) => (
            <div 
              key={si} 
              className={`reveal delay-${si + 1} bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden`}
            >
              {/* Card header */}
              <div className="p-[22px_24px] border-b border-[var(--border)] flex items-center gap-3">
                <span 
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg border"
                  style={{ backgroundColor: svc.colorDim, borderColor: `${svc.color}30` }}
                >
                  {svc.icon}
                </span>
                <span className="font-['Syne'] font-bold text-[17px] text-white">
                  {svc.category}
                </span>
              </div>

              {/* Services list */}
              <div className="py-2">
                {svc.items.map((item, ii) => (
                  <div 
                    key={ii} 
                    className={`p-[16px_24px] flex gap-4 items-start ${
                      ii < svc.items.length - 1 ? 'border-b border-[var(--border2)]' : ''
                    }`}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" 
                      style={{ backgroundColor: svc.color }}
                    />
                    <div>
                      <div className="font-['DM_Sans'] font-semibold text-sm text-[var(--text)] mb-0.5">
                        {item.title}
                      </div>
                      <div className="font-['DM_Sans'] text-[13px] text-[var(--muted)] leading-[1.6]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;