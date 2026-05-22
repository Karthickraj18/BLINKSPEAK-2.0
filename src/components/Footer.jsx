import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '60px 20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="max-w-7xl" style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    marginBottom: '20px'
                }}>
                    BlinkSpeak <span className="text-cyan">2.0</span>
                </h3>
                <p style={{ color: 'rgba(240, 244, 255, 0.6)', marginBottom: '30px', fontSize: '1.1rem' }}>
                    Built with empathy, powered by open source.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                    <a href="#" className="interactive" style={{ color: 'var(--accent-cyan)', opacity: 0.8, transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>
                        GitHub Repository
                    </a>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <a href="#" className="interactive" style={{ color: 'var(--text-white)', opacity: 0.8, transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>
                        Documentation
                    </a>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <a href="#" className="interactive" style={{ color: 'var(--text-white)', opacity: 0.8, transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>
                        Contact
                    </a>
                </div>

                <div style={{ color: 'rgba(240, 244, 255, 0.4)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} BlinkSpeak Project. Speak with your eyes.
                </div>
            </div>

            {/* Decorative background glow */}
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '200px',
                background: 'var(--accent-cyan)',
                opacity: 0.05,
                filter: 'blur(100px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
        </footer>
    );
};

export default Footer;
