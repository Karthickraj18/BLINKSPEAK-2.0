import React from 'react';

const UseCasesSection = () => {
    const stories = [
        {
            name: "ALS Patients",
            desc: "Providing a consistent voice as motor function declines, ensuring patients can always communicate basic needs.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--highlight-gold)" strokeWidth="1.5" className="w-12 h-12 mb-4">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5m10.5-8.5v4c0 1.1-.9 2-2 2h-4l-3 3v-3H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2z" />
                </svg>
            )
        },
        {
            name: "Locked-In Syndrome",
            desc: "A reliable secondary or primary communication tool for individuals with total paralysis except for eye movement.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--highlight-gold)" strokeWidth="1.5" className="w-12 h-12 mb-4">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M8 11h8M12 7v8" />
                </svg>
            )
        },
        {
            name: "Post-Surgery ICU",
            desc: "Temporary assistive communication for intubated patients when traditional speaking is impossible.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--highlight-gold)" strokeWidth="1.5" className="w-12 h-12 mb-4">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            )
        }
    ];

    return (
        <section id="about" style={{ backgroundColor: 'rgba(255, 215, 0, 0.03)' }}>
            <div className="max-w-7xl">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }} className="fade-in-up section-title">
                        Built for <span className="text-gold">Humanity</span>
                    </h2>
                    <p style={{ color: 'rgba(240, 244, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }} className="fade-in-up">
                        Technology is only as good as the lives it touches. BlinkSpeak was designed to give independence back to those who need it most.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px'
                }}>
                    {stories.map((story, idx) => (
                        <div key={idx} className="fade-in-up" style={{
                            background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.8) 0%, rgba(10, 14, 39, 0.4) 100%)',
                            border: '1px solid rgba(255, 215, 0, 0.15)',
                            borderRadius: '24px',
                            padding: '40px 30px',
                            animationDelay: `${idx * 0.2}s`,
                            transition: 'transform 0.3s ease, border-color 0.3s ease'
                        }} onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                        }} onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.15)';
                        }}>
                            <div style={{ width: '48px', height: '48px' }}>
                                {story.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-white)' }}>{story.name}</h3>
                            <p style={{ color: 'rgba(240, 244, 255, 0.7)', lineHeight: 1.7 }}>
                                {story.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
