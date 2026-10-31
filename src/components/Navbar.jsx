import { Menu, X, Languages } from "lucide-react";

export default function Navbar({ t, lang, setLang, mobileOpen, setMobileOpen, goTo }) {
  const ids = ["home", "about", "skills", "projects", "contact"];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => goTo("home")} className="text-xl font-extrabold tracking-tight text-ink">menna<span className="text-violet">.</span></button>
        <div className="hidden items-center gap-7 md:flex">
          {t.nav.map((item, i) => <button key={item} onClick={() => goTo(ids[i])} className="text-sm font-semibold text-muted transition hover:text-violet">{item}</button>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-bold text-ink transition hover:border-violet hover:text-violet"><Languages size={15}/>{lang === "en" ? "العربية" : "English"}</button>
          <button aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full p-2 text-ink md:hidden">{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
      </nav>
      {mobileOpen && <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-1">{t.nav.map((item,i)=><button key={item} onClick={()=>goTo(ids[i])} className="rounded-xl px-3 py-3 text-start text-sm font-semibold text-muted hover:bg-violet-50 hover:text-violet">{item}</button>)}</div>
      </div>}
    </header>
  );
}