import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
function getSystemTheme() {
    if (typeof window === 'undefined')
        return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function getInitialTheme() {
    if (typeof window === 'undefined')
        return 'dark';
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark')
        return saved;
    return getSystemTheme();
}
export default function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme);
    useEffect(() => {
        // Apply to <html> so your CSS tokens can key off it
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem('theme', theme);
        }
        catch {
            // ignore
        }
    }, [theme]);
    // Optional: if user never chose a theme, track OS changes
    useEffect(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        if (saved === 'light' || saved === 'dark')
            return;
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => setTheme(mq.matches ? 'dark' : 'light');
        mq.addEventListener?.('change', onChange);
        return () => mq.removeEventListener?.('change', onChange);
    }, []);
    const label = useMemo(() => (theme === 'dark' ? 'Dark' : 'Light'), [theme]);
    return (_jsxs("button", { type: "button", onClick: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), className: [
            'inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm',
            'border-[var(--color-border)]',
            'bg-[var(--color-surface)] text-[var(--color-text-secondary)]',
            'hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]',
            'transition',
        ].join(' '), "aria-label": "Toggle theme", title: "Toggle theme", children: [_jsx("span", { className: "text-base", "aria-hidden": true, children: theme === 'dark' ? '🌙' : '☀️' }), _jsx("span", { className: "hidden sm:inline", children: label })] }));
}
