import React from 'react';

const TechStack = () => {
    const technologies = [
        "Python", "OpenCV", "Raspberry Pi", "PIL/Pillow", "Luma.LCD",
        "espeak-ng", "ILI9488 TFT", "Haar Cascade Eye Detection"
    ];

    // Duplicate for seamless infinite scroll
    const marqueeItems = [...technologies, ...technologies, ...technologies];

    return (
        <section style={{
            padding: '40px 0',
            borderTop: '1px solid rgba(0, 245, 255, 0.1)',
            borderBottom: '1px solid rgba(0, 245, 255, 0.1)',
            backgroundColor: 'rgba(10, 14, 39, 0.8)',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative'
        }}>
            {/* Fade Edges */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100px',
                height: '100%',
                background: 'linear-gradient(90deg, var(--bg-navy) 0%, transparent 100%)',
                zIndex: 2
            }} />
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100%',
                background: 'linear-gradient(-90deg, var(--bg-navy) 0%, transparent 100%)',
                zIndex: 2
            }} />

            <style>
                {`
          @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .marquee-container {
            display: inline-flex;
            gap: 40px;
            animation: scrollMarquee 20s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}
            </style>

            <div className="marquee-container">
                {marqueeItems.map((tech, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: 'rgba(240, 244, 255, 0.6)',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-heading)'
                    }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                        {tech}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
