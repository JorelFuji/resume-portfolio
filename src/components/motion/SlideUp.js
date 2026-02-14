import { jsx as _jsx } from "react/jsx-runtime";
export default function SlideUp({ delay = 'delay-0', className = '', children, }) {
    return (_jsx("div", { className: `translate-y-4 opacity-0
        animate-[slideUp_0.6s_ease-out_forwards]
        ${delay} ${className}`, children: children }));
}
