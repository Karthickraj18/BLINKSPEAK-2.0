import React, { useState } from 'react';

const DemoSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [isEmergency, setIsEmergency] = useState(false);
    const [blinkCount, setBlinkCount] = useState(0);

    const categories = ["Basic Needs", "Movement", "Comfort", "Communication"];
    const subItems = {
        "Basic Needs": ["Water", "Food", "Medicine"],
        "Movement": ["Sit Up", "Lie Down", "Turn Content"],
        "Comfort": ["Too Hot", "Too Cold", "Lights Off"],
        "Communication": ["Family", "Nurse", "Yes/No"]
    };

    const handleSimulateBlink = (count) => {
        setBlinkCount(count);
        setTimeout(() => setBlinkCount(0), 1000);

        if (count === 1) {
            // Navigate
            setSelectedCategory((prev) => (prev + 1) % categories.length);
        } else if (count === 2) {
            // Select (Mock selection flash)
            const el = document.getElementById(`menu-item-${selectedCategory}`);
            if (el) {
                el.style.backgroundColor = 'var(--accent-cyan)';
                el.style.color = 'var(--bg-navy)';
                setTimeout(() => {
                    el.style.backgroundColor = 'rgba(0,0,0,0.5)';
                    el.style.color = 'var(--text-white)';
                }, 300);
            }
        } else if (count === 5) {
            // Emergency
            setIsEmergency(true);
            setTimeout(() => setIsEmergency(false), 3000);
        }
    };

    return (
        <section id="demo" style={{ position: 'relative' }}>
            <div className="max-w-7xl">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }} className="fade-in-up section-title">
                        Try It <span className="text-cyan">Yourself</span>
                    </h2>
                    <p style={{ color: 'rgba(240, 244, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }} className="fade-in-up">
                        Simulate the patient experience. Click the buttons below to act as eye blinks and interact with the TFT screen UI.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px'
                }} className="fade-in-up">

                    {/* Simulated TFT Screen */}
                    <div style={{
                        width: '100%',
                        maxWidth: '480px',
                        height: '320px',
                        backgroundColor: '#000',
                        border: '8px solid #222',
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* Screen Glare */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
                            pointerEvents: 'none',
                            zIndex: 10
                        }} />

                        {isEmergency ? (
                            <div style={{
                                flex: 1,
                                backgroundColor: '#FF0000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                animation: 'flashEmergency 0.5s infinite alternate'
                            }}>
                                <span style={{ fontSize: '64px' }}>🚨</span>
                                <h2 style={{ color: '#FFF', fontSize: '32px', margin: 0, fontWeight: 800 }}>EMERGENCY</h2>
                            </div>
                        ) : (
                            <>
                                {/* Header */}
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: '#111',
                                    borderBottom: '2px solid var(--accent-cyan)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div style={{ border: '2px solid var(--accent-cyan)', width: '30px', height: '15px', borderRadius: '10px' }} />
                                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>MAIN MENU</span>
                                    <span style={{ color: '#0F0' }}>100%</span>
                                </div>

                                {/* Menu List */}
                                <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {categories.map((cat, idx) => (
                                        <div
                                            key={idx}
                                            id={`menu-item-${idx}`}
                                            style={{
                                                padding: '16px',
                                                backgroundColor: selectedCategory === idx ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
                                                color: selectedCategory === idx ? '#000' : '#FFF',
                                                borderRadius: '8px',
                                                fontWeight: selectedCategory === idx ? 'bold' : 'normal',
                                                fontSize: '18px',
                                                transition: 'all 0.2s',
                                                border: selectedCategory === idx ? '2px solid transparent' : '2px solid #333'
                                            }}
                                        >
                                            {cat}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Blink Indicator Overlay */}
                        {blinkCount > 0 && (
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '100px',
                                color: 'rgba(0, 245, 255, 0.8)',
                                zIndex: 20,
                                textShadow: '0 0 20px var(--accent-cyan)',
                                animation: 'fadeInOut 1s forwards'
                            }}>
                                👁️‍🗨️
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <button
                            className="btn-cyan interactive"
                            onClick={() => handleSimulateBlink(1)}
                            style={{ fontSize: '0.9rem', padding: '12px 24px' }}
                        >
                            1 Blink (Navigate)
                        </button>
                        <button
                            className="btn-cyan interactive"
                            onClick={() => handleSimulateBlink(2)}
                            style={{ fontSize: '0.9rem', padding: '12px 24px' }}
                        >
                            2 Blinks (Select)
                        </button>
                        <button
                            className="btn-cyan interactive"
                            onClick={() => handleSimulateBlink(3)}
                            style={{ fontSize: '0.9rem', padding: '12px 24px', opacity: 0.7 }}
                        >
                            3 Blinks (Back)
                        </button>
                        <button
                            className="interactive"
                            onClick={() => handleSimulateBlink(5)}
                            style={{
                                fontSize: '0.9rem',
                                padding: '12px 24px',
                                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                                border: '2px solid #EF4444',
                                color: '#EF4444',
                                borderRadius: '30px',
                                fontWeight: 600
                            }}
                        >
                            Hold 5s (Emergency)
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DemoSection;
