import React from 'react';

export default function LiveMessagesScreen({ messages }) {
    // Color mapping logic handled partially in mockData, but we can enforce styles here
    const getColor = (type) => {
        switch (type) {
            case 'basic': return 'var(--color-blue)';
            case 'comfort': return 'var(--color-purple)';
            case 'movement': return 'var(--color-green)';
            case 'communication': return 'var(--color-teal)';
            case 'emergency': return 'var(--color-red)';
            default: return 'var(--color-primary)';
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 className="text-2xl font-bold">Live Messages</h1>
                <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-green)',
                    boxShadow: '0 0 10px var(--color-green)'
                }} />
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 mt-8">
                        <span style={{ fontSize: '40px', marginBottom: '10px', opacity: 0.5 }}>📭</span>
                        <p>No messages yet.</p>
                        <p className="text-sm mt-2">Waiting for BlinkSpeak...</p>
                    </div>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={msg.id}
                            className={`glass-card animate-slide-down`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '16px',
                                borderLeft: `5px solid ${getColor(msg.type)}`,
                                position: 'relative',
                                overflow: 'hidden',
                                background: msg.type === 'emergency' ? 'rgba(239, 68, 68, 0.15)' : 'var(--color-card)'
                            }}
                        >
                            <div style={{ fontSize: '32px', marginRight: '16px', filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.5))` }}>
                                {msg.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                                    <h3 className="font-bold text-lg">{msg.message}</h3>
                                    <span className="text-xs text-gray-400 font-medium">{msg.time}</span>
                                </div>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '10px',
                                    textTransform: 'uppercase',
                                    padding: '2px 8px',
                                    borderRadius: '10px',
                                    backgroundColor: `${getColor(msg.type)}33`,
                                    color: getColor(msg.type),
                                    fontWeight: 'bold'
                                }}>
                                    {msg.type}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {messages.length > 0 && messages[0].type !== 'emergency' && (
                <div style={{ marginTop: '20px' }}>
                    <button style={{
                        width: '100%',
                        background: 'rgba(91, 108, 255, 0.1)',
                        border: '1px solid var(--color-primary)',
                        color: 'var(--color-primary)',
                        padding: '14px',
                        borderRadius: '12px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        <span>🎙️</span> Reply: "Help is coming"
                    </button>
                </div>
            )}
        </div>
    );
}
