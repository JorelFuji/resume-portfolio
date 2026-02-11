import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { LangContext } from './lang-context';
export function LangProvider({ children }) {
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem('lang');
        return saved === 'ja' ? 'ja' : 'en';
    });
    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);
    const value = useMemo(() => ({ lang, setLang }), [lang]);
    return _jsx(LangContext.Provider, { value: value, children: children });
}
