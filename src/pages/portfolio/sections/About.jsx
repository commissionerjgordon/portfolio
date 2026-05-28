export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 sm:scroll-mt-30 lg:scroll-mt-40"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>

        <p className="text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">
          Senior Software Engineer with over <strong>8 years</strong> of
          experience building scalable backend systems, developer platforms, and
          cloud-native infrastructure. I specialize in creating high impact
          tools that improve developer experience and accelerate product
          delivery.
        </p>

        <p className="text-lg leading-relaxed text-slate-300 mt-6 max-w-3xl mx-auto">
          I've worked in fast paced environments ranging from large scale
          enterprise teams at
          <strong> AT&T / DirecTV</strong> on the Developer Experience and Cloud
          Platform teams, where I designed internal tools, led mentorship
          initiatives, and championed chaos engineering practices, to early
          stage startups like <strong>Spring Labs</strong>, where I wore
          multiple hats as a DevOps Engineer, managing infrastructure, CI/CD
          pipelines, and production systems.
        </p>

        <p className="text-lg leading-relaxed text-slate-300 mt-6 max-w-3xl mx-auto">
          In mid-2024, I transitioned to independent freelancing to focus on
          building AI powered applications. Since then, I've developed several
          impactful projects including intelligent chatbots using LLMs and
          Hugging Face, a Los Angeles Lakers merchandise aggregator, and
          location based web games.
        </p>

        <p className="text-lg leading-relaxed text-slate-300 mt-6 max-w-3xl mx-auto">
          I'm a graduate of MIT's prestigious{' '}
          <strong>Gordon Engineering Leadership (GEL)</strong> Program and am
          passionate about mentoring developers, improving developer experience,
          and creating elegant solutions to complex problems.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
          <div>
            <span className="block text-emerald-400 text-3xl font-semibold">
              8+
            </span>
            <span className="text-slate-400">Years Experience</span>
          </div>
          <div>
            <span className="block text-emerald-400 text-3xl font-semibold">
              50+
            </span>
            <span className="text-slate-400">Projects Delivered</span>
          </div>
          <div>
            <span className="block text-emerald-400 text-3xl font-semibold">
              ∞
            </span>
            <span className="text-slate-400">Developers Mentored</span>
          </div>
          <div>
            <span className="block text-emerald-400 text-3xl font-semibold">
              Startup + Enterprise
            </span>
            <span className="text-slate-400">Background</span>
          </div>
        </div>
      </div>
    </section>
  );
}
