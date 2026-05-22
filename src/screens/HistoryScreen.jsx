import React from 'react';

export default function HistoryScreen({ messages }) {
    // Mock data for the charts
    const stats = [
        { label: 'Water', count: 6, color: 'var(--color-blue)' },
        { label: 'Food', count: 3, color: 'var(--color-teal)' },
        { label: 'Medicine', count: 2, color: 'var(--color-purple)' },
        { label: 'Rest', count: 4, color: 'var(--color-primary)' },
        { label: 'Movement', count: 1, color: 'var(--color-green)' },
    ];

    const maxCount = Math.max(...stats.map(s => s.count));

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">History & Analytics</h1>

            <div className="glass-card">
                <h2 className="text-lg font-semibold mb-4 text-gray-300">Today's Summary</h2>
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-primary">16</span>
                        <span className="text-xs text-gray-400">Total Requests</span>
                    </div>
                    <div className="w-px h-10 bg-gray-600 opacity-50"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-green">2m</span>
                        <span className="text-xs text-gray-400">Avg Response Time</span>
                    </div>
                    <div className="w-px h-10 bg-gray-600 opacity-50"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-accent">0</span>
                        <span className="text-xs text-gray-400">Emergencies</span>
                    </div>
                </div>
            </div>

            <div className="glass-card">
                <h2 className="text-lg font-semibold mb-4 text-gray-300">Daily Needs Distribution</h2>

                <div className="flex flex-col gap-4">
                    {stats.map((stat, index) => {
                        const percentage = (stat.count / maxCount) * 100;
                        return (
                            <div key={index} className="flex flex-col">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{stat.label}</span>
                                    <span className="font-bold text-gray-400">{stat.count} reqs</span>
                                </div>
                                <div style={{
                                    height: '12px',
                                    width: '100%',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: '6px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${percentage}%`,
                                        backgroundColor: stat.color,
                                        borderRadius: '6px',
                                        transition: 'width 1s ease-out',
                                        boxShadow: `0 0 10px ${stat.color}88`
                                    }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {messages.length > 5 && (
                <div className="glass-card" style={{ background: 'rgba(59, 130, 246, 0.15)', borderLeft: '4px solid var(--color-blue)' }}>
                    <div className="flex items-center gap-2 mb-2">
                        <span style={{ fontSize: '20px' }}>🤖</span>
                        <h3 className="font-bold text-blue-400" style={{ color: 'var(--color-blue)' }}>AI Insight</h3>
                    </div>
                    <p className="text-sm">Patient has requested water 6 times today. Suggested hydration check and review of room temperature.</p>
                </div>
            )}
        </div>
    );
}
