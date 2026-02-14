import { jsx as _jsx } from "react/jsx-runtime";
export default function Stack({ space = 'space-y-4', className = '', children, }) {
    return (_jsx("div", { className: `flex flex-col ${space} ${className}`, children: children }));
}
