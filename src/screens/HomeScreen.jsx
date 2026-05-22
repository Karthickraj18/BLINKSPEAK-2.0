import React from 'react';

const actions = [
    { id: 'water', icon: '💧', label: 'Water Needed', color: 'var(--color-blue)' },
    { id: 'food', icon: '🍲', label: 'Food Needed', color: 'var(--color-teal)' },
    { id: 'medicine', icon: '💊', label: 'Medicine', color: 'var(--color-purple)' },
    { id: 'rest', icon: '🛏', label: 'Rest Needed', color: 'var(--color-primary)' },
    { id: 'emergency', icon: '🚨', label: 'Emergency', color: 'var(--color-red)' },
];

export default function HomeScreen({ status }) {
    const handleQuickAction = (action) => {
        console.log(`Sending mock confirmation for: ${action.label}`);
        // In a real app, this would send an API request to confirm caregiver action.
    };

    return (
        <div className="flex flex-col gap-4">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h1 className="text-2xl font-bold" style={{ background: 'linear-gradient(135deg, var(--color-text), var(--color-primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    BlinkSpeak
                </h1>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>👤</div>
            </div>

            {/* Header Card */}
            <div className="glass-card gradient-bg" style={{ position: 'relative', overflow: 'hidden', padding: '24px' }}>
                <div style={{ position: 'absolute', right: '-20px', top: '-20px', fontSize: '120px', opacity: 0.1 }}>
                    🧠
                </div>

                <h2 className="text-xl font-bold mb-4">Patient: John</h2>

                <div className="flex justify-between items-center text-sm" style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '12px' }}>
                    <div className="flex flex-col items-center">
                        <span style={{ fontSize: '20px', marginBottom: '4px' }}>
                            {status.connected ? '🟢' : '🔴'}
                        </span>
                        <span style={{ opacity: 0.8 }}>{status.connected ? 'Connected' : 'Offline'}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span style={{ fontSize: '20px', marginBottom: '4px' }}>🔋</span>
                        <span style={{ opacity: 0.8 }}>{status.battery}%</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span style={{ fontSize: '20px', marginBottom: '4px' }}>📡</span>
                        <span style={{ opacity: 0.8 }}>{status.signal}</span>
                    </div>
                </div>
            </div>

            {/* Live Status Indicator */}
            <div className="glass-card flex flex-col items-center justify-center p-4 mt-2">
                <div style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                }}>
                    {status.active && (
                        <div
                            className="animate-pulse-ring"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                background: 'rgba(16, 185, 129, 0.2)',
                                zIndex: 0
                            }}
                        />
                    )}
                    <div style={{
                        fontSize: '40px',
                        zIndex: 1,
                        textShadow: status.active ? '0 0 15px rgba(16, 185, 129, 0.8)' : 'none'
                    }}>
                        👁
                    </div>
                </div>
                <h3 className="font-semibold text-lg" style={{ color: status.active ? 'var(--color-green)' : 'var(--color-text)' }}>
                    {status.active ? 'Blink Detection Active' : 'Waiting for Device...'}
                </h3>
            </div>

            {/* Quick Action Buttons */}
            <h3 className="font-bold text-lg mt-4 mb-2">Quick Commands</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px'
            }}>
                {actions.map((action, index) => (
                    <button
                        key={action.id}
                        onClick={() => handleQuickAction(action)}
                        className="glass-card flex flex-col items-center justify-center p-4"
                        style={{
                            gridColumn: action.id === 'emergency' ? '1 / -1' : 'auto',
                            background: action.id === 'emergency' ? 'rgba(239, 68, 68, 0.2)' : 'var(--color-card)',
                            border: `1px solid ${action.id === 'emergency' ? 'var(--color-red)' : 'rgba(255,255,255,0.05)'}`,
                            transition: 'transform 0.1s, box-shadow 0.2s',
                            borderLeft: `4px solid ${action.color}`
                        }}
                    >
                        <span style={{ fontSize: '28px', marginBottom: '8px' }}>{action.icon}</span>
                        <span className="font-semibold text-sm">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
