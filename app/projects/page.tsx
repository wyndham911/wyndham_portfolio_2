export default function Experience() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold">Experience</h1>
      <p className="mt-2 text-slate-600">Internships and roles.</p>

      <div className="mt-8 grid gap-4">
        <Job
          title="AWS (Annapurna Labs) — ML Engineer Intern"
          meta="2026 – Present"
          bullets={[
            "Implemented distributed eager-mode training for quantized transformers on AWS Trainium.",
            "Developed fused quantized matmul kernels using NKI.",
            "Integrated distributed sharding with PyTorch distributed APIs.",
          ]}
        />
        <Job
          title="Dattel Consumer Intelligence — Data Scientist"
          meta="2025"
          bullets={[
            "Built LLM-driven market intelligence pipeline (OpenAI API, LangChain, FAISS).",
            "Improved grounding and reduced hallucinations.",
            "Developed churn prediction models (XGBoost, LightGBM).",
          ]}
        />
        <Job
          title="Finno Insurance — ML Engineer Intern"
          meta="2024"
          bullets={[
            "Developed lead conversion prediction models and feature pipelines.",
            "Built end-to-end processing for CRM data.",
          ]}
        />
      </div>
    </main>
  );
}

function Job({ title, meta, bullets }: { title: string; meta: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-sm text-slate-500">{meta}</span>
      </div>
      <ul className="mt-4 list-disc pl-5 text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="mt-1">{b}</li>
        ))}
      </ul>
    </div>
  );
}