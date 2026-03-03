import Link from "next/link";
import {
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Briefcase,
  FolderGit2,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* Hero */}
        <section className="rounded-3xl border bg-white/80 p-8 shadow-sm backdrop-blur">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Sparkles size={16} className="text-indigo-600" />
            <span>Machine Learning • Data Science • Systems</span>
          </div>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Wyndham Woo
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
            I build ML systems end-to-end — from data pipelines to deployment —
            with a focus on efficient training (quantization, distributed
            training) and real-world products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              href="mailto:wyndham_woo@berkeley.edu"
            >
              <Mail size={16} /> Email
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              href="https://linkedin.com/in/wyndham-woo"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={16} /> Resume
            </a>
          </div>
        </section>

        {/* Cards */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card
            icon={<Briefcase size={18} className="text-indigo-600" />}
            title="Experience"
            desc="AWS (Trainium), Dattel, Finno — ML engineering + deployment."
            href="/experience"
          />
          <Card
            icon={<FolderGit2 size={18} className="text-indigo-600" />}
            title="Projects"
            desc="Fake news prediction, NLP pipelines, FastAPI deployments."
            href="/projects"
          />
        </section>

        {/* Footer line */}
        <p className="mt-10 text-sm text-slate-500">
          Built with Next.js + Tailwind • Deployed on Vercel
        </p>
      </div>
    </main>
  );
}

function Card({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold">{title}</h3>
        </div>
        <ArrowRight size={18} className="text-slate-400 group-hover:text-indigo-600" />
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </Link>
  );
}