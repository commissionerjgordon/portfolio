import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
  ];

  return (
    <nav className="sm:max-h-30 lg:max-h-40 fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl sm:max-h-30 lg:max-h-40 mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="pr-4 hover:text-emerald-400! transition-colors"
        >
          <h1 className="text-2xl font-bold tracking-tight hover:text-emerald-400! transition">
            {props.name}
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={props.github}
            target="_blank"
            className="max-[875px]:hidden hover:text-slate-400 pl-4 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={props.linkedin}
            target="_blank"
            className="max-[875px]:hidden hover:text-slate-400 transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="#contact"
            className="ml-4 bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-200 hover:text-emerald-400 transition"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col px-6 py-8 space-y-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6 border-t border-slate-700 flex flex-col gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="flex items-center gap-3 text-slate-300 hover:text-white"
              >
                <FaGithub size={24} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="flex items-center gap-3 text-slate-300 hover:text-white"
              >
                <FaLinkedin size={24} /> LinkedIn
              </a>
              <a
                href="#contact"
                className="mt-4 bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
