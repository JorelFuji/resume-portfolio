import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Container from '@/components/layout/Container';
export default function Footer() {
    return (_jsx("footer", { className: "border-t border-zinc-800/60", children: _jsx(Container, { className: "py-10 text-sm text-zinc-400", children: _jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Jarrel Spiller. All rights reserved."] }), _jsx("p", { className: "text-zinc-500", children: "Built with Vite, React, Tailwind." })] }) }) }));
}
