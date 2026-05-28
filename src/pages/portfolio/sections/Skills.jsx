export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 scroll-mt-30 lg:scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {[
            { name: 'TypeScript', size: 'text-xl' },
            { name: 'Go', size: 'text-2xl' },
            { name: 'Kubernetes', size: 'text-2xl' },
            { name: 'Docker', size: 'text-xl' },
            { name: 'AWS', size: 'text-2xl' },
            { name: 'Terraform', size: 'text-xl' },
            { name: 'Node.js', size: 'text-lg' },
            { name: 'Python', size: 'text-xl' },
            { name: 'React', size: 'text-lg' },
            { name: 'LLMs & AI Chatbots', size: 'text-2xl' },
            { name: 'Hugging Face', size: 'text-xl' },
            { name: 'Gradio', size: 'text-lg' },
            { name: 'System Design', size: 'text-xl' },
            { name: 'Distributed Systems', size: 'text-xl' },
            { name: 'GitHub Actions', size: 'text-lg' },
            { name: 'CI/CD', size: 'text-xl' },
            { name: 'Microservices', size: 'text-lg' },
            { name: 'Serverless', size: 'text-lg' },
            { name: 'Java', size: 'text-lg' },
            { name: 'SQL', size: 'text-2xl' },
            { name: 'Express', size: 'text-base' },
            { name: 'Spring', size: 'text-lg' },
            { name: 'Django', size: 'text-base' },
            { name: 'Terragrunt', size: 'text-lg' },
            { name: 'Ansible', size: 'text-lg' },
            { name: 'EKS', size: 'text-lg' },
            { name: 'Redis', size: 'text-lg' },
            { name: 'Prometheus', size: 'text-base' },
            { name: 'Chaos Engineering', size: 'text-lg' },
            { name: 'Developer Experience', size: 'text-lg' },
            { name: 'Agile', size: 'text-lg' },
            { name: 'Prompt Engineering', size: 'text-base' },
            { name: 'Event Driven Architecture', size: 'text-base' },
            { name: 'GitOps', size: 'text-base' },
            { name: 'PostgreSQL', size: 'text-base' },
            { name: 'API Design', size: 'text-base' },
            { name: 'Angular', size: 'text-base' },
            { name: 'Scala', size: 'text-base' },
            { name: 'C++', size: 'text-base' },
            { name: 'Kustomize', size: 'text-base' },
            { name: 'Argo', size: 'text-base' },
            { name: 'Datadog', size: 'text-base' },
            { name: 'Jenkins', size: 'text-base' },
            { name: 'Apollo GraphQL', size: 'text-base' },
            { name: 'TypeORM', size: 'text-base' },
            { name: 'Shopify', size: 'text-base' },
            { name: 'Hugo', size: 'text-base' },
            { name: 'Linux', size: 'text-lg' },
            { name: 'Bash', size: 'text-base' },
          ].map((skill, index) => (
            <span
              key={index}
              className={`inline-block px-6 py-3 rounded-3xl 
                     bg-slate-800 hover:bg-emerald-900 
                     hover:text-emerald-300 hover:z-40
                     hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/10
                     active:scale-95 content-center
                     transition-all duration-300 ease-out
                     cursor-default border border-slate-700 hover:border-emerald-500 
                     ${skill.size} font-medium`}
            >
              {skill.name}
            </span>
          ))}
        </div>

        <p className="text-center text-slate-500 pt-2 mt-12 text-sm">
          And many more...
        </p>
      </div>
    </section>
  );
}
