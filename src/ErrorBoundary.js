import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export class ErrorBoundary extends React.Component {
    state = {};
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught:", error, info);
    }
    render() {
        if (this.state.error) {
            return (_jsxs("div", { style: { padding: 24 }, children: [_jsx("h2", { children: "App crashed" }), _jsx("pre", { children: String(this.state.error?.stack || this.state.error) })] }));
        }
        return this.props.children;
    }
}
