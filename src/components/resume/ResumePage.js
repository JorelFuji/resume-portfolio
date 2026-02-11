import { jsx as _jsx } from "react/jsx-runtime";
import ResumeLayout from '@/components/layout/ResumeLayout';
import Navbar from '@/components/layout/Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
export default function ResumePage() {
    return (_jsx(ResumeLayout, { header: _jsx(Navbar, {}), sidebar: _jsx(Sidebar, {}), children: _jsx(MainContent, {}) }));
}
