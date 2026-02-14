import { jsx as _jsx } from "react/jsx-runtime";
export default function HoverLift({ className = '', children }) {
    return (_jsx("div", { className: `transition-transform duration-300 ease-out
        hover:-translate-y-1
        focus-within:-translate-y-1
        ${className}`, children: children }));
}
