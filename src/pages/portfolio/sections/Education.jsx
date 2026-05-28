export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900 sm:scroll-mt-30 lg:scroll-mt-40"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-10 hover:border-emerald-500/30 transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-semibold sm:text-center md:text-left">
                  Massachusetts Institute of Technology
                </h3>
                <p className="text-emerald-400 text-xl mt-2 sm:text-center md:text-left">
                  B.S. in Electrical Engineering and Computer Science
                </p>
              </div>
              <div className="sm:text-center md:text-right">
                <p className="text-slate-400">Cambridge, MA</p>
                <p className="text-slate-400 font-medium">
                  Graduated June 2019
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-emerald-400 font-semibold mb-4 text-center">
                Relevant Coursework
              </h4>
              <div className="grid md:grid-cols-2 text-left gap-3 text-slate-300">
                <ul className="list-disc space-y-3 pl-8">
                  <li>Artificial Intelligence</li>
                  <li>Computer System Engineering</li>
                  <li>Computer Language Engineering</li>
                  <li>Software Construction</li>
                  <li>Computer Architecture</li>
                  <li>Microcomputer Project Lab</li>
                </ul>
                <ul className="list-disc space-y-3 pl-8">
                  <li>Human Intelligence Enterprise</li>
                  <li>Circuits and Electronics</li>
                  <li>Digital Communication Systems</li>
                  <li>Differential Equations</li>
                  <li>Applied Physics Electricity and Magnetism</li>
                  <li>Electromagnetics and Applications</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-emerald-400 font-medium">
                Gordon Engineering Leadership (GEL) Program
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
