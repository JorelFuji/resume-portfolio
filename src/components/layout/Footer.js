import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from './Container';
const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#docs', label: 'Docs' },
    { href: '#contact', label: 'Contact' },
];
export default function Footer() {
    const year = new Date().getFullYear();
    return (_jsx("footer", { className: "border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-bg))]", children: _jsxs(Container, { className: "flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("p", { className: "text-sm text-[hsl(var(--color-muted))]", children: ["\u00A9 ", year, ' ', _jsx("span", { className: "text-[hsl(var(--color-text))] font-medium", children: "Melvin Spiller" }), ' ', _jsx("span", { className: "text-[hsl(var(--color-muted))]", children: "\u2022 Platform Engineer" })] }), _jsx("p", { className: "text-xs text-[hsl(var(--color-muted))]", children: "Built like a product, not a poster." })] }), _jsx("nav", { className: "flex flex-wrap gap-x-5 gap-y-2 text-sm", children: links.map((link) => (_jsx("a", { href: link.href, className: "text-[hsl(var(--color-muted))] transition-colors hover:text-[hsl(var(--color-text))]", children: link.label }, link.href))) })] }) }));
}
