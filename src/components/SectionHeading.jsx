export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-extrabold tracking-[.2em] text-violet">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">{title} {accent && <span className="text-violet">{accent}</span>}</h2>
      {description && <p className="mt-4 leading-7 text-muted">{description}</p>}
    </div>
  );
}