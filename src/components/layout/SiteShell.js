import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
export default function SiteShell({ children, className = "" }) {
    return (_jsxs("div", { className: "min-h-screen bg-[hsl(var(--surface))] text-[hsl(var(--text))]", children: [_jsx("a", { href: "#content", className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999]\n                   rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]\n                   px-4 py-2 text-sm font-medium shadow-lg outline-none\n                   focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2", children: "Skip to content" }), _jsx(Navbar, {}), _jsx("main", { id: "content", className: `section-y ${className}`, children: children }), _jsx(Footer, {})] }));
}
