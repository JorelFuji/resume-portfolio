import { Routes, Route, Navigate, useParams } from 'react-router-dom';

import Navbar from '@/components/navigation/Navbar';
import Docs from '@/components/sections/Docs';
import HowIBuild from '@/components/sections/HowIBuild';
import Metrics from '@/components/sections/Metrics';

type Lang = 'en' | 'ja';
const safeLang = (l?: string): Lang => (l === 'ja' ? 'ja' : 'en');

function PortfolioPage({ lang }: { lang: Lang }) {
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <Docs lang="en" />
        <HowIBuild lang="en" />
        <Metrics lang="en" />
      </main>
    </>
  );
}

function PortfolioRoute() {
  const { lang } = useParams();
  return <PortfolioPage lang={safeLang(lang)} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang" element={<PortfolioRoute />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
