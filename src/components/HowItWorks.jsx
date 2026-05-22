import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            title: "Eye Detected",
            desc: "The goggle-mounted camera locks onto the pupil using infrared illumination.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    {/* Scan line effect */}
                    <line x1="2" y1="12" x2="22" y2="12" stroke="rgba(0,245,255,0.5)" strokeWidth="2" style={{ animation: 'scanline 2s infinite linear', transformOrigin: 'center' }} />
                </svg>
            )
        },
        {
            title: "Blink Pattern",
            desc: "Real-time AI classifies blink durations (1, 2, or 3 blinks) to trigger UI actions.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
                    <path d="M17 3v4M7 3v4M12 2v6M3 14h18M5 21h14" />
                    <circle cx="8" cy="14" r="2" fill="var(--accent-cyan)" />
                    <circle cx="16" cy="14" r="2" fill="var(--accent-cyan)" />
                </svg>
            )
        },
        {
            title: "Message Spoken",
            desc: "Selections are immediately spoken aloud via text-to-speech for caretakers.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="max-w-7xl">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }} className="fade-in-up section-title">
                        How It Works
                    </h2>
                    <p style={{ color: 'rgba(240, 244, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }} className="fade-in-up">
                        Our open-source platform translates eye movements into spoken words in three seamless steps.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    position: 'relative',
                    zIndex: 2
                }}>
                    {steps.map((step, idx) => (
                        <div key={idx} className="glass-card fade-in-up" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            animationDelay: `${idx * 0.2}s`
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'rgba(0, 245, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                border: '1px solid rgba(0,245,255,0.2)'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{step.title}</h3>
                            <p style={{ color: 'rgba(240, 244, 255, 0.7)', lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Decorative connecting line logic for desktop would go here via absolute positioning or SVG overlay */}
            </div>
        </section>
    );
};

export default HowItWorks;
