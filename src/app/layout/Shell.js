import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header';
import Footer from './Footer';
export default function Shell({ className = '', children }) {
    return (_jsxs("div", { className: `min-h-dvh bg-zinc-950 text-zinc-100 ${className}`, children: [_jsx(Header, {}), _jsx("main", { id: "main", className: "min-h-[70dvh]", children: children }), _jsx(Footer, {})] }));
}
