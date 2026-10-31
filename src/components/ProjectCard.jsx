import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, lang, t }) {
  const ar = lang === "ar";
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-soft">
      <div className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.tone}`}>
        <span className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs font-bold text-slate-500">{project.number}</span>
        <div className="flex h-28 w-40 rotate-[-5deg] items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-2xl font-extrabold tracking-widest text-violet shadow-xl transition duration-500 group-hover:rotate-0 group-hover:scale-110">{project.symbol}</div>
        <span className="absolute bottom-5 right-5 rounded-full bg-white/80 p-2 text-violet">
        <ArrowUpRight size={18}/></span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-ink">{ar ? project.titleAr : project.title}</h3>
        <p className="mt-2 min-h-[72px] text-sm leading-6 text-muted">{ar ? project.descriptionAr : project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-600">{tag}</span>)}</div>
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-extrabold text-violet hover:text-violet-800">{t.viewProject}<ArrowUpRight size={14}/></a>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="text-slate-400 transition hover:text-ink"><Github size={18}/></a>
        </div>
      </div>
    </article>
  );
}