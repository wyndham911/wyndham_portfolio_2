import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-10 font-sans">

      <h1 className="text-4xl font-bold mb-2">Wyndham Woo</h1>
      <p className="text-gray-600 mb-6">
        Machine Learning Engineer • Data Science @ UC Berkeley
      </p>

      <div className="mb-10">
        <a className="mr-4 text-blue-600" href="https://linkedin.com/in/wyndham-woo">
          LinkedIn
        </a>

        <a className="mr-4 text-blue-600" href="mailto:wyndham_woo@berkeley.edu">
          Email
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>

        <p>
          <strong>University of California, Berkeley</strong>
        </p>

        <p>B.A. Data Science</p>
        <p className="text-gray-600">GPA: 3.75</p>

      </section>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>

        <div className="mb-6">
          <h3 className="font-bold">AWS (Annapurna Labs) — ML Engineer Intern</h3>

          <ul className="list-disc ml-6">
            <li>Implemented distributed eager-mode training for quantized transformers on AWS Trainium</li>
            <li>Developed fused quantized matmul kernels using NKI</li>
            <li>Integrated distributed sharding with PyTorch distributed APIs</li>
          </ul>
        </div>


        <div className="mb-6">
          <h3 className="font-bold">Dattel Consumer Intelligence — Data Scientist</h3>

          <ul className="list-disc ml-6">
            <li>Built LLM-driven market intelligence pipeline using OpenAI API</li>
            <li>Improved SQL generation accuracy and reduced hallucinations</li>
            <li>Developed churn prediction models with XGBoost and LightGBM</li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold">Finno Insurance — ML Engineer Intern</h3>

          <ul className="list-disc ml-6">
            <li>Developed lead conversion prediction models</li>
            <li>Built feature engineering pipelines for CRM data</li>
          </ul>
        </div>

      </section>


      <section className="mb-10">

        <h2 className="text-2xl font-semibold mb-3">Research</h2>

        <p><strong>Predicting Fake News</strong></p>

        <ul className="list-disc ml-6">
          <li>Built NLP pipeline with TF-IDF + Logistic Regression</li>
          <li>Fine-tuned DistilBERT for classification</li>
          <li>Deployed inference endpoint with FastAPI</li>
        </ul>

      </section>


      <section>

        <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>

        <p>
          Python • Java • SQL • AWS • PyTorch • HuggingFace • FastAPI • Docker
        </p>

      </section>


    </main>
  )
}