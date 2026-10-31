import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ text }) {
  return (
    <footer className="border-t border-slate-100 bg-white px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
        <p className="text-xs font-medium text-muted">{text}</p>
        <div className="flex items-center gap-4 text-muted">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-violet"><Github size={17}/></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-violet"><Linkedin size={17}/></a>
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-violet"><Mail size={17}/></a>
        </div>
      </div>
    </footer>
  );
}