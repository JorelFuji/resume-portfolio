import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Section({ title, subtitle, right, className = '', children, }) {
    return (_jsxs("section", { className: ['space-y-4', className].join(' '), children: [_jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "min-w-0", children: [_jsx("h2", { className: "text-xs font-semibold tracking-widest text-zinc-400", children: title.toUpperCase() }), subtitle ? (_jsx("div", { className: "mt-2 text-sm leading-relaxed text-zinc-200 print:text-zinc-700", children: subtitle })) : null] }), right ? _jsx("div", { className: "shrink-0", children: right }) : null] }), _jsx("div", { className: "space-y-4", children: children })] }));
}
