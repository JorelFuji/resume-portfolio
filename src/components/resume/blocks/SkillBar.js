import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const toneClasses = {
    sky: 'bg-sky-500/70',
    emerald: 'bg-emerald-500/70',
    amber: 'bg-amber-500/70',
    zinc: 'bg-zinc-300/50',
};
function clamp(n) {
    return Math.max(0, Math.min(100, n));
}
export default function SkillBar({ label, value, meta, tone = 'sky', className = '', ...rest }) {
    const v = clamp(value);
    return (_jsxs("div", { className: ['space-y-2', className].join(' '), ...rest, children: [_jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [_jsx("span", { className: "text-sm font-medium text-zinc-100", children: label }), _jsx("span", { className: "text-xs text-zinc-400", children: meta ?? `${v}%` })] }), _jsx("div", { className: "h-2 w-full overflow-hidden rounded-full bg-zinc-900/70 ring-1 ring-inset ring-zinc-800/70", role: "progressbar", "aria-label": label, "aria-valuenow": v, "aria-valuemin": 0, "aria-valuemax": 100, children: _jsx("div", { className: [
                        'h-full rounded-full',
                        toneClasses[tone],
                        'transition-[width] duration-500 ease-out',
                    ].join(' '), style: { width: `${v}%` } }) })] }));
}
