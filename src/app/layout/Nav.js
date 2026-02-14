import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
const linkBase = 'text-sm text-zinc-300 hover:text-white transition-colors';
const active = 'text-white';
const nav = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/resume', label: 'Resume' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];
export default function Nav() {
    return (_jsx("nav", { className: "hidden items-center gap-5 md:flex", "aria-label": "Primary", children: nav.map((item) => (_jsx(NavLink, { to: item.to, className: ({ isActive }) => `${linkBase} ${isActive ? active : ''}`, children: item.label }, item.to))) }));
}
