import React from 'react';

const FeaturesSection = () => {
    const features = [
        { title: "Single Eye Detection", desc: "Optimised Haar Cascade computer vision tracks one pupil accurately even in low light via a goggle mount.", icon: "👁️" },
        { title: "Real-Time Classification", desc: "Custom AI immediately identifies 1 blink (navigate), 2 blinks (select), and 3 blinks (back) natively.", icon: "⚡" },
        { title: "Emergency Alert", desc: "Holding eyes closed for 5 seconds triggers a high-priority SOS alarm bypassing menus.", icon: "🚨" },
        { title: "TFT Display Interface", desc: "Powered by a high-contrast ILI9488 480x320 screen providing crystal clear navigation feedback.", icon: "📱" },
        { title: "Text-to-Speech Output", desc: "Instant audio feedback powered by espeak-ng, giving patients a clear and immediate physical voice.", icon: "🔊" },
        { title: "5 Built-In Categories", desc: "Pre-configured for Basic Needs, Emergency, Movement, Comfort, and Social Communication right out of the box.", icon: "🗂️" }
    ];

    return (
        <section id="features" style={{ backgroundColor: 'rgba(10, 14, 39, 0.5)' }}>
            <div className="max-w-7xl">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }} className="fade-in-up section-title">
                        Purpose-Built <span className="text-cyan">Hardware</span>
                    </h2>
                    <p style={{ color: 'rgba(240, 244, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }} className="fade-in-up">
                        Every component is carefully engineered to provide reliability when it matters most.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {features.map((feat, idx) => (
                        <div key={idx} className="glass-card fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{feat.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{feat.title}</h3>
                            <p style={{ color: 'rgba(240, 244, 255, 0.6)', fontSize: '0.95rem' }}>{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
