const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>

        
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 28, height: 28, borderRadius: 7,
              background: 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 13, color: '#000',
            }}>S</span>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: '#fff' }}>Samuel Zambwa</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--muted)' }}>Frontend Dev · Virtual Assistant</div>
            </div>
          </div>

 
          <div style={{ display: 'flex', gap: 20 }}>
            {['#about', '#services', '#contact'].map((href, i) => (
              <a key={i} href={href} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                color: 'var(--muted)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{['About', 'Services', 'Contact'][i]}</a>
            ))}
          </div>

          
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>
            © {year} Samuel Zambwa
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
