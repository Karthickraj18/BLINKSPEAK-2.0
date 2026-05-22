import React, { useState } from 'react';

export default function SettingsScreen({ status }) {
    const [settings, setSettings] = useState({
        alertSound: true,
        vibration: true,
        darkMode: true,
        voicePlayback: true
    });

    const toggleSetting = (key) => {
        setSettings({ ...settings, [key]: !settings[key] });
    };

    const ToggleSwitch = ({ label, isEnabled, onClick, icon }) => (
        <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-3">
                <span style={{ fontSize: '20px' }}>{icon}</span>
                <span className="font-medium">{label}</span>
            </div>
            <button
                onClick={onClick}
                style={{
                    width: '50px',
                    height: '28px',
                    borderRadius: '14px',
                    backgroundColor: isEnabled ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                    position: 'relative',
                    transition: 'background-color 0.3s'
                }}
            >
                <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '2px',
                    left: isEnabled ? '24px' : '2px',
                    transition: 'left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }} />
            </button>
        </div>
    );

    return (
        <div className="flex flex-col gap-6 pb-8">
            <h1 className="text-2xl font-bold">Settings</h1>

            <div className="glass-card">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Device Connection & Pairing</h2>
                <div className="flex items-center gap-4 mb-4" style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '12px' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        📟
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-lg">BlinkSpeak v2.0</h3>
                        <p className="text-sm" style={{ color: status.connected ? 'var(--color-green)' : 'var(--color-red)' }}>
                            {status.connected ? 'Connected via WiFi' : 'Disconnected'}
                        </p>
                    </div>
                </div>
                <button className="w-full py-3 rounded-xl font-semibold mt-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Configure New Device
                </button>
            </div>

            <div className="glass-card">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Preferences</h2>
                <ToggleSwitch
                    label="Alert Sound"
                    icon="🔊"
                    isEnabled={settings.alertSound}
                    onClick={() => toggleSetting('alertSound')}
                />
                <ToggleSwitch
                    label="Vibration"
                    icon="📳"
                    isEnabled={settings.vibration}
                    onClick={() => toggleSetting('vibration')}
                />
                <ToggleSwitch
                    label="Voice Playback (Read Aloud)"
                    icon="🗣️"
                    isEnabled={settings.voicePlayback}
                    onClick={() => toggleSetting('voicePlayback')}
                />
                <ToggleSwitch
                    label="Dark Mode"
                    icon="🌙"
                    isEnabled={settings.darkMode}
                    onClick={() => toggleSetting('darkMode')}
                />
            </div>

            <div className="glass-card flex flex-col items-center justify-center p-6 text-center">
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>👁️‍🗨️</div>
                <h3 className="font-bold text-xl mb-1 text-primary">BlinkSpeak App</h3>
                <p className="text-sm text-gray-400 mb-4">Version 1.0.0 (Build 42)</p>
                <p className="text-xs text-gray-500 max-w-[250px] mx-auto">
                    Empowering communication through advanced blink detection.
                </p>
            </div>
        </div>
    );
}
