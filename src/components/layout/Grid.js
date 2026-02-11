import { jsx as _jsx } from "react/jsx-runtime";
export default function Grid({ cols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', gap = 'gap-4', className = '', children, }) {
    return (_jsx("div", { className: `grid ${cols} ${gap} ${className}`, children: children }));
}
