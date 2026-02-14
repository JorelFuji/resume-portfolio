import { useContext } from 'react';
import { LangContext } from './lang-context';
export function useLang() {
    const v = useContext(LangContext);
    if (!v)
        throw new Error('useLang must be used inside <LangProvider>');
    return v;
}
