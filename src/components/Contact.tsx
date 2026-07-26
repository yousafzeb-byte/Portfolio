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
            I&apos;m currently open to full-time roles. Whether you have a
            position in mind or just want to say hello — my inbox is open.
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
              title="LinkedIn"
              className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.983 1.983 0 0 1-1.98-1.981 1.98 1.98 0 1 1 1.98 1.981zm1.757 13.019H3.58V9h3.514v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/yousafzeb-byte"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-900 hover:text-slate-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
