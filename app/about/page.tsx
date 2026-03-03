export default function Projects() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-slate-600">Selected work.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Project
          title="Predicting Fake News"
          desc="NLP pipeline + DistilBERT fine-tuning + FastAPI deployment."
          tags={["NLP", "Transformers", "FastAPI"]}
        />
        <Project
          title="LLM Market Intelligence Pipeline"
          desc="Target market generation using structured datasets + RAG."
          tags={["OpenAI", "LangChain", "RAG"]}
        />
      </div>
    </main>
  );
}

function Project({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 hover:bg-slate-50 transition">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border bg-slate-50 px-3 py-1 text-xs text-slate-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}