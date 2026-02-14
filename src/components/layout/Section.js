import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from './Container';
export default function Section({ id, title, subtitle, className = '', children, }) {
    return (_jsx("section", { id: id, className: `py-16 sm:py-20 ${className}`, children: _jsxs(Container, { children: [(title || subtitle) && (_jsxs("header", { className: "mb-10 space-y-2", children: [title && (_jsx("h2", { className: "text-2xl sm:text-3xl font-bold tracking-tight", children: title })), subtitle && (_jsx("p", { className: "max-w-3xl text-zinc-400", children: subtitle }))] })), children] }) }));
}
