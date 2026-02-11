import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@/components/layout/Container';
export default function Page({ title, subtitle, size = 'md', children, }) {
    return (_jsx("section", { className: "py-10 sm:py-14", children: _jsxs(Container, { size: size, children: [(title || subtitle) && (_jsxs("header", { className: "mb-8", children: [title && (_jsx("h1", { className: "text-2xl font-semibold tracking-tight sm:text-3xl", children: title })), subtitle && (_jsx("p", { className: "mt-2 max-w-prose text-zinc-400", children: subtitle }))] })), children] }) }));
}
