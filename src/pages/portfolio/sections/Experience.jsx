export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-30 lg:scroll-mt-40">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-12">
          {/* Freelance */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/30 transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  Independent Software Engineer
                </h3>
                <p className="text-emerald-400 sm:text-center md:text-left">
                  Freelance • Remote
                </p>
              </div>
              <p className="text-slate-400 font-medium">Jun 2024 - Present</p>
            </div>
            <ul className="list-disc space-y-3 text-slate-300 text-left pl-8">
              <li>
                Designed and developed{' '}
                <a
                  href="https://mitjaa.org"
                  target="_blank"
                  className="text-emerald-400 hover:text-emerald-300 transition"
                >
                  mitjaa.org
                </a>{' '}
                for the MIT Jewish Alumni Association, implementing CI/CD
                pipelines with GitHub Actions for automated deployments
              </li>
              <li>
                Built multiple AI powered web applications using Gradio, Hugging
                Face, and open-source LLMs, including a debate skills coach for
                teenagers
              </li>
              <li>
                Developing a Los Angeles Lakers merchandise aggregator that
                consolidates products across multiple marketplaces
              </li>
              <li>
                Creating a geo guessing web game focused on Los Angeles County
                using Google Maps API
              </li>
              <li>
                Deployed a PiWall multi-screen display system on Raspberry Pi
                for a local artist
              </li>
            </ul>
          </div>

          {/* Spring Labs */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/30 transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold">DevOps Engineer</h3>
                <p className="text-emerald-400 sm:text-center md:text-left">
                  Spring Labs
                </p>
              </div>
              <p className="text-slate-400 font-medium">Jun 2023 - Jun 2024</p>
            </div>
            <ul className="list-disc space-y-3 text-slate-300 text-left pl-8">
              <li>
                Designed and maintained Terraform infrastructure as code,
                significantly streamlining infrastructure provisioning in a fast
                paced startup
              </li>
              <li>
                Built and optimized CI/CD pipelines using GitHub Actions and
                Ansible Tower, reducing build times through advanced Docker
                caching, and increasing production release reliability
              </li>
              <li>
                Managed production systems and led smooth deployment of software
                releases and infrastructure changes
              </li>
              <li>
                Automated server maintenance and upgraded Python and serverless
                components to latest major versions, enhancing security and long
                term reliability
              </li>
            </ul>
          </div>

          {/* Verishop */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/30 transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  Software Engineer - E-Commerce Backend
                </h3>
                <p className="text-emerald-400 sm:text-center md:text-left">
                  Verishop
                </p>
              </div>
              <p className="text-slate-400 font-medium">Nov 2021 - Jan 2023</p>
            </div>
            <ul className="list-disc space-y-3 text-slate-300 text-left pl-8">
              <li>
                Designed and implemented a scalable order management system and
                product ingestion pipeline supporting 3000+ merchants
              </li>
              <li>
                Developed and maintained TypeScript serverless backend APIs,
                ensuring high availability for frontend teams
              </li>
              <li>
                Integrated with external platforms including Shopify, Mirakl,
                and Stripe via REST APIs and webhook systems
              </li>
              <li>
                Built internal tools that improved operational efficiency for
                the merchant support team
              </li>
            </ul>
          </div>

          {/* AT&T / DirecTV Combined */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/30 transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold sm:text-center md:text-left">
                  Senior Specialist Software Engineer - Developer Experience
                  Team
                </h3>
                <p className="text-emerald-400 sm:text-center md:text-left">
                  AT&T Entertainment Group / DirecTV
                </p>
              </div>
              <p className="text-slate-400 font-medium">Aug 2019 - Nov 2021</p>
            </div>
            <ul className="list-disc space-y-3 text-slate-300 text-left pl-8">
              <li>
                Led development of tools and automation that significantly
                improved developer experience and reduced upgrade friction for
                cloud SDKs
              </li>
              <li>
                Designed and built a full-stack developer portal to streamline
                Software Development Life Cycle processes
              </li>
              <li>
                Managed a team of developers while remediating all security
                vulnerabilities across Node.js microservices
              </li>
              <li>
                Championed chaos engineering initiatives, hosted internal
                community of practice, and attended Chaos Conf
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/30 transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  Contractor - Cloud Platform Team
                </h3>
                <p className="text-emerald-400 sm:text-center md:text-left">
                  AT&T Entertainment Group / DirecTV
                </p>
              </div>
              <p className="text-slate-400 font-medium">Nov 2016 - Aug 2018</p>
            </div>
            <ul className="list-disc space-y-3 text-slate-300 text-left pl-8">
              <li>
                Developed a real time continuous delivery pipeline monitor and
                dashboard using Node.js, Express, and jQuery
              </li>
              <li>
                Implemented new features and maintained critical internal
                development lifecycle tools
              </li>
              <li>
                Supported developers across runtime, pipeline, and platform
                related challenges
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
