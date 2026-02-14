import { Routes, Route, Navigate, useParams } from "react-router-dom"

import Navbar from "@/components/navigation/Navbar"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"

type Lang = "en" | "ja"
const safeLang = (l?: string): Lang => (l === "ja" ? "ja" : "en")

function PortfolioPage({ lang }: { lang: Lang }) {
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
    </>
  )
}

function PortfolioRoute() {
  const { lang } = useParams()
  return <PortfolioPage lang={safeLang(lang)} />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang" element={<PortfolioRoute />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  )
}