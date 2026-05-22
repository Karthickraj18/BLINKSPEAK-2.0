import React from 'react';

const HeroSection = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px', // account for navbar
            position: 'relative',
            overflow: 'hidden'
        }}>

            {/* Animated Eye Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                maxWidth: '800px',
                maxHeight: '800px',
                border: '1px solid rgba(0, 245, 255, 0.05)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 0
            }}>
                <div style={{
                    position: 'absolute',
                    width: '70%',
                    height: '70%',
                    border: '1px solid rgba(0, 245, 255, 0.1)',
                    borderRadius: '50%',
                    animation: 'pulseIris 8s infinite ease-in-out'
                }} />
                <div style={{
                    position: 'absolute',
                    width: '40%',
                    height: '40%',
                    border: '1px solid rgba(0, 245, 255, 0.2)',
                    borderRadius: '50%',
                    animation: 'pulseIris 8s infinite ease-in-out reverse'
                }} />
                <div style={{
                    position: 'absolute',
                    width: '10%',
                    height: '10%',
                    backgroundColor: 'rgba(0, 245, 255, 0.1)',
                    boxShadow: '0 0 50px rgba(0, 245, 255, 0.5)',
                    borderRadius: '50%'
                }} />
            </div>

            {/* Content */}
            <div className="max-w-7xl" style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px'
            }}>

                {/* Floating Badge */}
                <div className="fade-in-up visible" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 16px',
                    background: 'rgba(0, 245, 255, 0.05)',
                    border: '1px solid rgba(0, 245, 255, 0.2)',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                    boxShadow: '0 0 20px rgba(0, 245, 255, 0.1)',
                    animationDelay: '0.1s'
                }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)', boxShadow: '0 0 8px var(--accent-cyan)' }} />
                    Assistive Tech • Open Source • Built for Humanity
                </div>

                <h1 className="fade-in-up visible" style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    lineHeight: '1.1',
                    margin: 0,
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #A0AEC0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    animationDelay: '0.2s'
                }}>
                    Speak With<br />
                    <span style={{
                        background: 'linear-gradient(135deg, var(--accent-cyan) 0%, #0088FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        Your Eyes
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: 0,
                            width: '100%',
                            height: '30%',
                            background: 'var(--accent-cyan)',
                            opacity: 0.15,
                            filter: 'blur(15px)',
                            zIndex: -1
                        }} />
                    </span>
                </h1>

                <p className="fade-in-up visible" style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                    maxWidth: '600px',
                    color: 'rgba(240, 244, 255, 0.7)',
                    lineHeight: 1.6,
                    animationDelay: '0.3s'
                }}>
                    BlinkSpeak 2.0 gives a voice to those who cannot speak —
                    powered by blink detection and real-time AI.
                </p>

                <div className="fade-in-up visible" style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center', animationDelay: '0.4s' }}>
                    <button className="btn-cyan">See How It Works</button>
                    <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--bg-navy)" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
