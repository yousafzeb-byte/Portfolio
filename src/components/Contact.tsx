export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            I&apos;m currently open to full-time roles.
            Whether you have a position in mind or just want to say hello — my
            inbox is open.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=yousafzeb@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Say Hello →
            </a>
            <a
              href="https://www.linkedin.com/in/yousaf-zeb-5122702a7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yousafzeb-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
