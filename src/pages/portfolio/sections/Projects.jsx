import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 sm:scroll-mt-30 lg:scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Angeleno Guessr */}
          <div className="bg-slate-800 rounded-3xl overflow-hidden group hover:scale-[1.02] transition">
            <div className="h-52 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-6xl">
              🗺️
            </div>
            <div className="p-7">
              <h3 className="font-semibold text-xl mb-2">Angeleno Guessr</h3>
              <p className="text-slate-400 mb-4 text-left">
                Think you know Los Angeles? This game will help you prove it!
                Angeleno Guessr is a game for guessing locations specifically
                within Los Angeles County using Google Maps API. When you are
                ready to play, it will drop you into a random location within
                the county on Street View, allowing you to look around a short
                distance. Once you think you know where you are, just click on
                the map to drop your pin!
              </p>
              <div className="flex flex-wrap pt-2 gap-2 mb-6">
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Google Maps API
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Vite
                </span>
              </div>
              {/* <a
                href="#"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 group-hover:gap-3 transition"
              >
                View Project <ExternalLink size={18} />
              </a> */}
            </div>
          </div>

          {/* DebateBot */}
          <div className="bg-slate-800 rounded-3xl overflow-hidden group hover:scale-[1.02] transition">
            <div className="h-52 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-6xl">
              🤖
            </div>
            <div className="p-7">
              <h3 className="font-semibold text-xl mb-2">DebateBot</h3>
              <p className="text-slate-400 mb-4 text-left">
                AI powered debate bot that will always challenge your ideas no
                matter how correct you are! This bot will surely hone your
                debate skills and sharpen your wit. Any time you are looking for
                feedback, just ask away, and the bot will give you a serious
                review of your skills and suggest how you can do better. Now,
                back to the debate!
              </p>
              <div className="flex flex-wrap pt-2 gap-2 mb-6">
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Node.js
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Vite
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  TailwindCSS
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Google Gemini
                </span>
              </div>
            </div>
          </div>

          {/* LakersVault */}
          <div className="bg-slate-800 rounded-3xl overflow-hidden group hover:scale-[1.02] transition">
            <div className="h-52 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-6xl">
              🏀
            </div>
            <div className="p-7">
              <h3 className="font-semibold text-xl mb-2">LakersVault</h3>
              <p className="text-slate-400 mb-4 text-left">
                Tired of searching around all the different sites to find
                quality Lakers merchandise? LakersVault aggregates across
                multiple websites to the work for you! Just scroll away to view
                all the items already found or try searching for something more
                specific. It's Lakers merchandise the whole way!
              </p>
              <div className="flex flex-wrap pt-2 gap-2 mb-6">
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Python
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Flask
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  SQLAlchemy
                </span>
                <span className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  Etsy API
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
