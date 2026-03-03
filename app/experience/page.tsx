import Image from "next/image";
import { Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="grid gap-8 md:grid-cols-[1.3fr_.7fr] items-start">
        <div>
          <p className="text-sm text-slate-500">Machine Learning • Data Science • Systems</p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Wyndham Woo
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed">
            I build ML systems end-to-end — from data pipelines to deployment —
            with a focus on efficient training (quantization, distributed training) and real-world products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
               href="mailto:wyndham_woo@berkeley.edu">
              <Mail size={16} /> Email
            </a>

            <a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
               href="https://linkedin.com/in/wyndham-woo" target="_blank">
              <Linkedin size={16} /> LinkedIn
            </a>

            {/* Put your resume at public/resume.pdf if you want this button */}
            <a className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800"
               href="/resume.pdf" target="_blank">
              <FileText size={16} /> Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Card title="Experience" desc="AWS (Trainium), Dattel, Finno — ML engineering + deployment."
                  href="/experience" />
            <Card title="Projects" desc="Fake news prediction, NLP pipelines, FastAPI deployments."
                  href="/projects" />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-3xl border bg-slate-50 p-4">
            <Image
              src="/me.jpg"
              alt="Photo of Wyndham Woo"
              width={320}
              height={320}
              className="rounded-2xl object-cover"
              priority
            />
            <p className="mt-3 text-sm text-slate-600">
              UC Berkeley • Data Science
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="group rounded-2xl border bg-white p-5 hover:bg-slate-50 transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <ArrowRight className="opacity-50 group-hover:opacity-100" size={18} />
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </Link>
  );
}