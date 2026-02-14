import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/app/lib';
const sizes = {
    sm: 'max-w-4xl',
    md: 'max-w-6xl',
    lg: 'max-w-7xl',
};
export default function Container({ className, size = 'md', children, }) {
    return (_jsx("div", { className: cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className), children: children }));
}
