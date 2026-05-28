import { ArrowRight } from 'lucide-react';

export default function Hero(props) {
  return (
    <section
      id="hero"
      className="hero-bg min-h-screen flex items-center pt-54 pb-24 lg:pt-64 lg:pb-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-emerald-400 font-mono">Hello, I'm</p>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            {props.name}
          </h1>
          <p className="text-3xl text-slate-400">Senior Software Engineer</p>

          <p className="text-lg text-slate-300 max-w-lg">
            MIT trained Senior Software Engineer turned independent developer. I
            build scalable cloud systems, developer platforms, and AI powered
            applications. With experience across enterprise, startups, and now
            independent projects, I create elegant solutions that drive real
            impact.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="border border-slate-400 px-8 py-4 rounded-2xl font-medium hover:bg-slate-900 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-1.5 shadow-2xl">
            <img
              src="/portfolio/profile.jpeg"
              alt={props.name}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
