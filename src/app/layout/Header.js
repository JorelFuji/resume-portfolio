import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@/components/layout/Container';
import Nav from './Nav';
import SkipLink from './SkipLink';
export default function Header() {
    return (_jsxs("header", { className: "sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur", children: [_jsx(SkipLink, {}), _jsxs(Container, { className: "flex h-16 items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50", children: "JS" }), _jsxs("div", { className: "leading-tight", children: [_jsx("div", { className: "text-sm font-semibold", children: "Jarrel Spiller" }), _jsx("div", { className: "text-xs text-zinc-400", children: "Platform Engineer \u2022 Design-minded" })] })] }), _jsx(Nav, {})] })] }));
}
