import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: scrolled ? '15px 40px' : '25px 40px',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 14, 39, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0, 245, 255, 0.1)' : '1px solid transparent',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    letterSpacing: '0.05em'
                }}>
                    BlinkSpeak <span className="text-cyan">2.0</span>
                </span>
            </div>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="hidden-mobile">
                <a href="#how-it-works" style={{ fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-white)'}>How It Works</a>
                <a href="#features" style={{ fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-white)'}>Features</a>
                <a href="#demo" style={{ fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-white)'}>Demo</a>
                <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-white)'}>About</a>
                <button style={{
                    background: 'rgba(0, 245, 255, 0.1)',
                    border: '1px solid var(--accent-cyan)',
                    color: 'var(--accent-cyan)',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.3s'
                }}
                    onMouseOver={e => {
                        e.target.style.background = 'var(--accent-cyan)';
                        e.target.style.color = 'var(--bg-navy)';
                    }}
                    onMouseOut={e => {
                        e.target.style.background = 'rgba(0, 245, 255, 0.1)';
                        e.target.style.color = 'var(--accent-cyan)';
                    }}>
                    GitHub
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
