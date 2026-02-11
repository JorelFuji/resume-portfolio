import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ResumeLayout({ sidebar, header, className = '', children, }) {
    return (_jsx("div", { className: [
            // App background
            'min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]',
            // Print: make the page white/ink-friendly
            'print:bg-white print:text-black',
            className,
        ].join(' '), children: _jsx("div", { className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0", children: _jsxs("div", { className: [
                    'rounded-2xl border border-[var(--color-border)]',
                    'bg-[var(--color-surface)] shadow-[var(--shadow-md)]',
                    'print:rounded-none print:border-0 print:bg-white print:shadow-none',
                ].join(' '), children: [header && (_jsx("div", { className: "border-b border-[var(--color-border)] px-6 py-6 print:border-gray-200", children: header })), _jsxs("div", { className: [
                            'grid gap-8 px-6 py-8',
                            // mobile: stack, desktop: sidebar + main
                            sidebar ? 'lg:grid-cols-[320px_1fr]' : 'grid-cols-1',
                            'print:grid-cols-[260px_1fr] print:gap-6 print:px-8 print:py-8',
                        ].join(' '), children: [sidebar && (_jsx("aside", { className: "space-y-6 print:space-y-4", children: sidebar })), _jsx("main", { className: "space-y-8 print:space-y-6", children: children })] })] }) }) }));
}
