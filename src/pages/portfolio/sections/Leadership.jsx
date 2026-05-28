export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 bg-slate-950 scroll-mt-30 lg:scroll-mt-40"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Leadership & Mentorship
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mentorship Initiatives */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/30 transition">
            <h3 className="text-2xl font-semibold mb-6">
              Mentorship & Team Development
            </h3>
            <ul className="space-y-4 text-slate-300 text-left">
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>
                  <strong>AT&T / DirecTV</strong> - Mentored interns and junior
                  developers on cloud architecture, Kubernetes, and
                  microservices development
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>
                  <strong>Verishop</strong> - Trained backend team on Kubernetes
                  networking to ensure reliable communication between
                  microservices
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>
                  <strong>Spring Labs</strong> - Coached engineers on Docker
                  best practices, significantly reducing image sizes and
                  improving CI/CD performance through layer caching
                </span>
              </li>
            </ul>
          </div>

          {/* GEL Program */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/30 transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🎓</div>
              <div>
                <h3 className="text-2xl font-semibold">
                  Gordon Engineering Leadership Program
                </h3>
                <p className="text-emerald-400">MIT • 2018 - 2019</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-left">
              Graduated from MIT's prestigious Gordon Engineering Leadership
              (GEL) Program, which focuses on developing engineering leaders
              through project based learning, mentorship, and advanced
              leadership training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
