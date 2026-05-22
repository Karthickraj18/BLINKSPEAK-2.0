import React, { useState } from 'react';

export default function CustomCommandsScreen() {
    const [commands, setCommands] = useState([
        { id: 1, text: 'Water Needed', category: 'Basic Needs' },
        { id: 2, text: 'Food Needed', category: 'Basic Needs' },
        { id: 3, text: 'Medicine Needed', category: 'Basic Needs' },
        { id: 4, text: 'I am tired', category: 'Comfort' },
        { id: 5, text: 'I need rest', category: 'Comfort' },
        { id: 6, text: 'Turn On TV', category: 'Entertainment' },
        { id: 7, text: 'Call Daughter', category: 'Communication' },
    ]);

    const [newCommandText, setNewCommandText] = useState('');

    const addCommand = (e) => {
        e.preventDefault();
        if (!newCommandText.trim()) return;
        const newCmd = {
            id: Date.now(),
            text: newCommandText,
            category: 'Custom'
        };
        setCommands([...commands, newCmd]);
        setNewCommandText('');
    };

    const removeCommand = (id) => {
        setCommands(commands.filter(cmd => cmd.id !== id));
    };

    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            <div>
                <h1 className="text-2xl font-bold mb-2">Custom Commands</h1>
                <p className="text-sm text-gray-400">Edit commands shown on the BlinkSpeak device menu. Changes sync automatically.</p>
            </div>

            <form onSubmit={addCommand} className="glass-card flex gap-2" style={{ padding: '12px' }}>
                <input
                    type="text"
                    value={newCommandText}
                    onChange={(e) => setNewCommandText(e.target.value)}
                    placeholder="e.g. Open Window"
                    style={{
                        flex: 1,
                        background: 'rgba(0,0,0,0.2)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        color: 'white',
                        outline: 'none',
                        fontSize: '16px'
                    }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px 16px' }}>
                    + Add
                </button>
            </form>

            <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                {commands.map((cmd) => (
                    <div key={cmd.id} className="glass-card flex items-center justify-between" style={{ padding: '16px' }}>
                        <div>
                            <div className="font-semibold text-lg">{cmd.text}</div>
                            <div className="text-xs text-gray-400 mt-1">{cmd.category}</div>
                        </div>
                        <button
                            onClick={() => removeCommand(cmd.id)}
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(239, 68, 68, 0.1)',
                                color: 'var(--color-red)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                border: '1px solid rgba(239, 68, 68, 0.3)'
                            }}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            <div className="fixed bottom-[90px] left-0 right-0 max-w-[600px] mx-auto px-5">
                <button className="btn-primary w-full shadow-lg flex items-center justify-center gap-2">
                    <span>🔄</span> Sync to BlinkSpeak Device
                </button>
            </div>
        </div>
    );
}
