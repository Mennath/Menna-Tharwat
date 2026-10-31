import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Linkedin, Mail, Menu, X, Download, Sparkles } from "lucide-react";
import { projects, skills } from "./data";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

const copy = {
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Contact"],
    role: "FRONTEND DEVELOPER",
    hello: "Hello, I'm",
    name: "Menna Tharwat",
    intro: "I build thoughtful, responsive websites with clean code and delightful user experiences.",
    work: "View my work",
    contact: "Let's talk",
    scroll: "Scroll to explore",
    eyebrow: "A LITTLE ABOUT ME",
    aboutTitle: "Turning ideas into",
    aboutAccent: "digital experiences.",
    aboutText: "I'm a frontend developer who enjoys transforming ideas and designs into accessible, responsive, and user-friendly websites. I love learning new technologies and improving every detail of the experience.",
    aboutNote: "Currently focused on building modern interfaces with React.",
    skillsEyebrow: "WHAT I WORK WITH",
    skillsTitle: "Skills & technologies",
    skillsText: "The tools I use to bring ideas to life.",
    projectsEyebrow: "SELECTED WORK",
    projectsTitle: "Some things I've built",
    projectsText: "A selection of practice and personal projects. Replace the demo links with your live projects and repositories.",
    all: "All",
    react: "React",
    web: "Web",
    viewProject: "Live preview",
    source: "Source code",
    contactEyebrow: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let's create something",
    contactAccent: "great together.",
    contactText: "I'm open to opportunities, collaborations, and interesting conversations. Send me a message and let's connect.",
    email: "Email me",
    rights: "Designed & built with care by Menna Tharwat.",
    about: "About",
  },
  ar: {
    nav: ["الرئيسية", "نبذة عني", "المهارات", "المشاريع", "تواصل معي"],
    role: "مطورة واجهات أمامية",
    hello: "أهلاً، أنا",
    name: "منة ثروت",
    intro: "أصمم وأطور مواقع عصرية ومتجاوبة بكود منظم وتجربة استخدام بسيطة ومميزة.",
    work: "شاهدي أعمالي",
    contact: "تواصلي معي",
    scroll: "اسحبي لاكتشاف المزيد",
    eyebrow: "نبذة بسيطة عني",
    aboutTitle: "أحوّل الأفكار إلى",
    aboutAccent: "تجارب رقمية مميزة.",
    aboutText: "أنا مطورة واجهات أمامية أستمتع بتحويل الأفكار والتصميمات إلى مواقع سهلة الاستخدام ومتجاوبة مع مختلف الشاشات. أحب تعلم التقنيات الجديدة والاهتمام بكل تفاصيل تجربة المستخدم.",
    aboutNote: "أركز حالياً على بناء واجهات حديثة باستخدام React.",
    skillsEyebrow: "التقنيات التي أستخدمها",
    skillsTitle: "المهارات والتقنيات",
    skillsText: "الأدوات التي أستخدمها لتحويل الأفكار إلى واقع.",
    projectsEyebrow: "نماذج من أعمالي",
    projectsTitle: "مشاريع قمت بتنفيذها",
    projectsText: "مجموعة من المشاريع التدريبية والشخصية. يمكنكِ استبدال الروابط التجريبية بروابط مشاريعكِ الفعلية.",
    all: "الكل",
    react: "React",
    web: "مواقع ويب",
    viewProject: "معاينة المشروع",
    source: "الكود المصدري",
    contactEyebrow: "هل لديكِ مشروع؟",
    contactTitle: "دعينا نصنع شيئاً",
    contactAccent: "مميزاً معاً.",
    contactText: "متاحة للفرص الجديدة والتعاون والمحادثات المفيدة. ابعتي لي رسالة ويسعدني التواصل معكِ.",
    email: "راسليني",
    rights: "تم التصميم والتنفيذ بكل حب بواسطة منة ثروت.",
    about: "نبذة",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [filter, setFilter] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = copy[lang];
  const isAr = lang === "ar";
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className={isAr ? "font-arabic" : "font-sans"}>
      <Navbar t={t} lang={lang} setLang={setLang} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} goTo={goTo} />
      <section id="home" className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 text-xs font-bold tracking-[.18em] text-violet-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> {t.role}
            </div>
            <p className="mb-2 text-lg font-medium text-muted">{t.hello}</p>
            <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-6xl lg:text-7xl">{t.name}<span className="text-violet">.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">{t.intro}</p>
            <div className={`mt-9 flex flex-wrap gap-3 ${isAr ? "justify-start" : ""}`}>
              <button onClick={() => goTo("projects")} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-1 hover:bg-violet">
                {t.work} {isAr ? <ArrowDown size={17}/> : <ArrowRight size={17}/>}
              </button>
              <button onClick={() => goTo("contact")} className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-1 hover:border-violet hover:text-violet">{t.contact}</button>
            </div>
            <div className="mt-12 flex items-center gap-4 text-muted">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="social-link"><Github size={19}/></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={19}/></a>
              <a aria-label="Email" href="https://wa.me/201287630398" className="social-link"><Mail size={19}/></a>
              <span className="h-px w-12 bg-slate-200" />
              <span className="text-xs">{t.scroll}</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-5 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-violet-200 via-fuchsia-100 to-sky-100" />
            <div className="relative overflow-hidden rounded-[2.2rem] border-[10px] border-white bg-gradient-to-br from-[#eeeaff] via-[#f8f5ff] to-[#e7f3ff] shadow-soft">
              <div className="flex aspect-[4/4.5] flex-col items-center justify-center px-8 text-center">
                <div className="mb-5 flex h-52 w-52 items-center justify-center overflow-hidden rounded-full border-[8px] border-white bg-white shadow-xl sm:h-60 sm:w-60">
                  <img src="/profile.jpg" alt="Menna Tharwat profile" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.innerHTML = '<span class=&quot;text-6xl font-extrabold text-violet&quot;>MT</span>'; }} />
                </div>
                <span className="rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-bold text-violet-700"><Sparkles size={13} className="mr-1 inline"/> Creative mind · Clean code</span>
                <p className="mt-4 text-sm font-semibold text-slate-500">Frontend Developer</p>
              </div>
              <div className="absolute left-5 top-7 rounded-2xl border border-white bg-white/90 p-3 shadow-lg"><Code2 className="text-violet" size={22}/></div>
              <div className="absolute bottom-8 right-5 rounded-2xl border border-white bg-white/90 px-4 py-3 text-xs font-bold text-ink shadow-lg">React ✦ UI</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-wrap">
        <div className="grid gap-10 rounded-[2rem] bg-white p-7 shadow-soft sm:p-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div className="relative flex min-h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-100 to-sky-50">
            <div className="text-center"><div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-violet shadow-md"><Code2 size={38}/></div><p className="font-bold text-ink">Code · Create · Improve</p></div>
            <span className="absolute right-5 top-5 h-3 w-3 rounded-full bg-violet-400"/><span className="absolute bottom-6 left-7 h-5 w-5 rounded-full bg-sky-300"/>
          </div>
          <div>
            <SectionHeading eyebrow={t.eyebrow} title={t.aboutTitle} accent={t.aboutAccent}/>
            <p className="mt-5 leading-8 text-muted">{t.aboutText}</p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-violet-50 p-4 text-sm font-semibold text-violet-800"><Sparkles size={18}/>{t.aboutNote}</div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-wrap">
        <SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} description={t.skillsText}/>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => <div key={skill.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <div className="mb-5 flex items-center justify-between"><span className="font-bold text-ink">{skill.name}</span><span className="text-xs font-semibold text-muted">{skill.level}</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-violet to-fuchsia-400" style={{width:skill.width}}/></div>
          </div>)}
        </div>
      </section>

      <section id="projects" className="section-wrap">
        <SectionHeading eyebrow={t.projectsEyebrow} title={t.projectsTitle} description={t.projectsText}/>
        <div className="mt-8 flex flex-wrap gap-2">
          {[["All",t.all],["React",t.react],["Web",t.web]].map(([value,label]) => <button key={value} onClick={()=>setFilter(value)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${filter===value?"bg-ink text-white":"border border-slate-200 bg-white text-muted hover:border-violet hover:text-violet"}`}>{label}</button>)}
        </div>
        <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => <ProjectCard key={project.number} project={project} lang={lang} t={t}/>)}
        </div>
      </section>

      <section id="contact" className="section-wrap pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-center text-white shadow-soft sm:px-14 sm:py-20">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl"/><div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"/>
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-extrabold tracking-[.2em] text-violet-200">{t.contactEyebrow}</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{t.contactTitle}<br/>
            <span className="text-violet-300">{t.contactAccent}</span></h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-300">{t.contactText}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="https://wa.me/201287630398" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-ink transition hover:-translate-y-1 hover:bg-violet-100">{t.email}<Mail size={17}/></a><a href="tel:+201287630398" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10" dir="ltr">01287630398</a></div>
          </div>
        </div>
      </section>
      <Footer text={t.rights}/>
    </main>
  );
}