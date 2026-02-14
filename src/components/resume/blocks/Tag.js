import { jsx as _jsx } from "react/jsx-runtime";
const tones = {
    neutral: 'border-zinc-800/70 bg-zinc-950/40 text-zinc-200',
    accent: 'border-sky-500/25 bg-sky-500/10 text-sky-200',
    success: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-200',
    warning: 'border-amber-500/25 bg-amber-500/10 text-amber-200',
};
export default function Tag({ children, tone = 'neutral', className = '' }) {
    return (_jsx("span", { className: [
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xs leading-5',
            'whitespace-nowrap',
            tones[tone],
            className,
        ].join(' '), children: children }));
}
