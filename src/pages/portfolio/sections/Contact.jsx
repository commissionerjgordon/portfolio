import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact(props) {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 sm:scroll-mt-30 lg:scroll-mt-40"
    >
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-10">
          I'm currently available for <strong>freelance opportunities</strong>,
          particularly with non-profits and mission driven projects. If you have
          an interesting initiative, please reach out. I'd love to discuss how I
          can help bring it to life.
        </p>

        <div className="flex justify-center gap-8 text-4xl">
          <a
            href={`mailto:${props.email}`}
            className="hover:text-emerald-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href={props.github}
            target="_blank"
            className="hover:text-emerald-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href={props.linkedin}
            target="_blank"
            className="hover:text-emerald-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
