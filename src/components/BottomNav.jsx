import React from 'react';

const navItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'live', icon: '🔔', label: 'Live' },
    { id: 'history', icon: '📊', label: 'History' },
    { id: 'commands', icon: '⚙️', label: 'Commands' },
    { id: 'settings', icon: '🎨', label: 'Settings' }
];

export default function BottomNav({ activeTab, setActiveTab }) {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingBottom: 'safe-area-inset-bottom',
            zIndex: 50
        }}>
            {navItems.map(item => {
                const isActive = activeTab === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '100%',
                            color: isActive ? 'var(--color-primary)' : 'var(--color-gray-400)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: isActive ? 'translateY(-4px)' : 'none'
                        }}
                    >
                        <div style={{
                            fontSize: '24px',
                            marginBottom: '4px',
                            filter: isActive ? 'drop-shadow(0 0 8px rgba(91, 108, 255, 0.5))' : 'none',
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                        }}>
                            {item.icon}
                        </div>
                        <span style={{
                            fontSize: '10px',
                            fontWeight: isActive ? '600' : '400',
                            opacity: isActive ? 1 : 0.7
                        }}>
                            {item.label}
                        </span>
                        {isActive && (
                            <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-primary)',
                                boxShadow: '0 0 8px var(--color-primary)'
                            }} />
                        )}
                    </button>
                );
            })}
        </div>
    );
}
