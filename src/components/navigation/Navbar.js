import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import Container from '../layout/Container';
const LINKS = [
    { href: '#projects', label: 'Projects' },
    { href: '#docs', label: 'Docs' },
    { href: '#contact', label: 'Contact' },
];
function useActiveHash(ids) {
    const [active, setActive] = useState('');
    useEffect(() => {
        const els = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (!els.length)
            return;
        const io = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
            if (!visible)
                return;
            setActive(`#${visible.target.id}`);
        }, { root: null, threshold: [0.35, 0.5, 0.65] });
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [ids]);
    return active;
}
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const ids = useMemo(() => LINKS.map((l) => l.href.replace('#', '')), []);
    const active = useActiveHash(ids);
    return (_jsxs("header", { className: "sticky top-0 z-50 border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-bg))]/80 backdrop-blur", children: [_jsxs(Container, { className: "flex h-14 items-center justify-between", children: [_jsxs("a", { href: "#top", className: "flex items-baseline gap-2 font-semibold tracking-tight", children: [_jsx("span", { className: "text-[hsl(var(--color-text))]", children: "Runbook" }), _jsx("span", { className: "text-[hsl(var(--color-muted))]", children: "Portfolio" })] }), _jsx("nav", { className: "hidden sm:flex items-center gap-6 text-sm", children: LINKS.map((l) => {
                            const isActive = active === l.href;
                            return (_jsx("a", { href: l.href, className: [
                                    'transition-colors',
                                    isActive
                                        ? 'text-[hsl(var(--color-text))]'
                                        : 'text-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-text))]',
                                ].join(' '), children: l.label }, l.href));
                        }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { type: "button", className: "sm:hidden rounded-lg border border-[hsl(var(--color-border))] px-3 py-2 text-sm text-[hsl(var(--color-text))] hover:bg-[hsl(var(--color-surface))]", "aria-expanded": open, "aria-controls": "mobile-nav", onClick: () => setOpen((v) => !v), children: "Menu" }), _jsx("a", { href: "/downloads/resume.pdf", className: "rounded-lg border border-[hsl(var(--color-border))] px-3 py-2 text-sm text-[hsl(var(--color-text))] hover:bg-[hsl(var(--color-surface))]", children: "Resume" })] })] }), open && (_jsx("div", { id: "mobile-nav", className: "sm:hidden border-t border-[hsl(var(--color-border))]", children: _jsx(Container, { className: "py-3", children: _jsx("nav", { className: "flex flex-col gap-2 text-sm", children: LINKS.map((l) => {
                            const isActive = active === l.href;
                            return (_jsx("a", { href: l.href, onClick: () => setOpen(false), className: [
                                    'rounded-lg px-3 py-2 transition-colors',
                                    isActive
                                        ? 'bg-[hsl(var(--color-surface))] text-[hsl(var(--color-text))]'
                                        : 'text-[hsl(var(--color-muted))] hover:bg-[hsl(var(--color-surface))] hover:text-[hsl(var(--color-text))]',
                                ].join(' '), children: l.label }, l.href));
                        }) }) }) }))] }));
}
