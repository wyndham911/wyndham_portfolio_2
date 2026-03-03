const links = {
  linkedin: "https://linkedin.com/in/wyndham-woo",
  github: "https://github.com/woohoufeng",
  email: "mailto:wyndham.woo@berkeley.edu",
};

const experience = [
  {
    company: "Amazon Web Services (Annapurna Labs)",
    role: "Machine Learning Engineer Intern",
    time: "2026 — Present",
    bullets: [
      "Implemented distributed eager-mode training for quantized transformer models on AWS Trainium using TorchAO + custom NKI kernels (int8/int4 weight + activation quantization).",
      "Developed fused quantized matmul, dequant, bias, and GELU kernels using TorchNeuron distributed primitives; reduced memory bandwidth by ~35% and improved throughput.",
      "Integrated FSDP2 and tensor-parallel hybrid sharding with PyTorch distributed + XLA backends; achieved >80% scaling efficiency across multi-node NeuronCore deployments.",
    ],
  },
  {
    company: "Dattel Consumer Intelligence",
    role: "Data Science Intern",
    time: "2025",
    bullets: [
      "Architected an LLM-driven market intelligence pipeline (OpenAI API, LangChain, FAISS) integrating 4 enterprise datasets for automated target-market generation.",
      "Designed entropy-weighted dataset aggregation + schema-aware SQL generation with structured prompts; improved grounding fidelity and reduced hallucinations by ~40% in evaluation.",
      "Implemented RAG with embeddings, MySQL/Pandas indexing, and a containerized FastAPI inference service; reduced manual segmentation workload by ~60%.",
      "Built churn prediction models (XGBoost/LightGBM) with Bayesian updating + SHAP explanations, producing interpretable dashboards.",
    ],
  },
  {
    company: "Finno Insurance",
    role: "Machine Learning Engineer Intern",
    time: "2024",
    bullets: [
      "Developed lead-acquisition prediction models on 250k+ CRM records; improved AUC from 0.72 → 0.84.",
      "Implemented ensemble tuning + n_estimators optimization with OOB minimization; improved top-decile targeting accuracy by ~9%.",
      "Built feature pipelines (encoding, imputation, time-window aggregation, calibration) integrated into lead allocation workflow.",
    ],
  },
];

const projects = [
  {
    title: "Predicting Fake News",
    time: "2023 — 2025",
    bullets: [
      "Built NLP pipeline (TF-IDF + Logistic Regression) and fine-tuned DistilBERT/RoBERTa; strong F1 via stratified CV on 100k+ articles.",
      "Applied mixed-precision training (FP16), attention visualization, SHAP explainability, and ablations comparing classical ML vs transformers.",
      "Deployed a FastAPI endpoint with ONNX export + post-training quantization for latency optimization.",
    ],
    tags: ["NLP", "Transformers", "FastAPI", "ONNX"],
  },
];

const skills = [
  "Python","Java","C++","MySQL","Pandas","Matplotlib","AWS","Scikit-learn",
  "PyTorch","Git","Docker","FastAPI","Flask","Hugging Face","REST APIs",
];

const awards = [
  "Math Olympiad — Gold Medal for IMO National Selection Test & Singapore & Asian Schools Mathematics Olympiad",
  "Hackathons — Winner, 2024 Evergreen Grand Hackathon; Winner, Spring Hacks 2024",
  "High School Valedictorian",
];

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
    {children}
  </div>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
    {children}
  </span>
);

const LinkBtn = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    className={
      "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition " +
      (props.className ?? "")
    }
  />
);

const PrimaryBtn = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    className={
      "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500/90 via-fuchsia-500/80 to-cyan-400/80 px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition " +
      (props.className ?? "")
    }
  />
);

export default function Page() {
  return (
    <main>
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Wyndham Woo</a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#awards">Awards</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <LinkBtn href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</LinkBtn>
            <LinkBtn href={links.github} target="_blank" rel="noreferrer">GitHub</LinkBtn>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <Card>
            <div className="p-7">
              <Chip>Data Science @ UC Berkeley • ML + Systems</Chip>

              <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Building fast, reliable ML systems — from quantized kernels to product pipelines.
              </h1>

              <p className="mt-4 text-white/70 leading-relaxed">
                I’m Wyndham. I’ve worked on distributed quantized training on AWS Trainium, and built LLM/RAG pipelines
                for real business workflows. I like shipping measurable improvements.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryBtn href="#projects">View Projects →</PrimaryBtn>
                <LinkBtn href={links.email}>Email</LinkBtn>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Quantization", "Distributed Training", "NLP", "RAG", "FastAPI"].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-7">
              <h3 className="font-semibold">Quick Info</h3>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/50">Location</span><span>Berkeley, CA</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/50">Degree</span><span>B.A. Data Science</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/50">Grad</span><span>Expected 2028</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/50">GPA</span><span>3.75</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/70">
                  Tip: after you deploy, share your Vercel link on LinkedIn and pin it on GitHub.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-10">
          <Section
            id="experience"
            title="Experience"
            subtitle="Impact-focused work across ML engineering, LLM systems, and production pipelines."
          >
            <div className="grid gap-4">
              {experience.map((job) => (
                <Card key={job.company}>
                  <div className="p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{job.company}</h3>
                        <p className="text-sm text-white/60">{job.role}</p>
                      </div>
                      <p className="text-sm text-white/50">{job.time}</p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc pl-5">
                      {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects" subtitle="Selected projects with measurable outcomes and deployment focus.">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((p) => (
                <Card key={p.title}>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-white/50">{p.time}</p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc pl-5">
                      {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => <Chip key={t}>{t}</Chip>)}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="awards" title="Awards" subtitle="Competitions and recognition.">
            <Card>
              <div className="p-6">
                <ul className="space-y-2 text-sm text-white/75 list-disc pl-5">
                  {awards.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            </Card>
          </Section>

          <Section id="skills" title="Technical Skills" subtitle="Tools I use to build ML systems and ship products.">
            <Card>
              <div className="p-6 flex flex-wrap gap-2">
                {skills.map((s) => <Chip key={s}>{s}</Chip>)}
              </div>
            </Card>
          </Section>

          <Section id="contact" title="Contact" subtitle="Want to chat? Send me a message.">
            <Card>
              <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-white/80 font-medium">wyndham.woo@berkeley.edu</p>
                  <p className="text-sm text-white/60">Best for internships, research, collabs, or coffee chats.</p>
                </div>
                <div className="flex gap-3">
                  <PrimaryBtn href={links.email}>Email Me →</PrimaryBtn>
                  <LinkBtn href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</LinkBtn>
                </div>
              </div>
            </Card>
          </Section>

          <footer className="pb-6 pt-2 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Wyndham Woo • Built with Next.js + Tailwind • Deployed on Vercel
          </footer>
        </div>
      </div>
    </main>
  );
}