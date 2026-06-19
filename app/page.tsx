export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative px-8 pt-24 pb-16 overflow-hidden flex-grow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide uppercase">
            Engineering & Technical Consulting
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Engineering Partner</span>
          </h1>
          <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
            Professional technical consulting for embedded systems and hardware integration. 
            Providing expertise in firmware development, architecture, and engineering process optimization.
          </p>
          <div className="flex gap-4 justify-center">
            {/* ТУТ ВПИШІТЬ ВАШУ ПОШТУ ПІСЛЯ mailto: */}
            <a href="mailto:ВАША_ПОШТА@example.com" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all">
              Request Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-300">Areas of Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Embedded Systems", desc: "Expert C/C++ firmware development for industrial and consumer hardware solutions." },
            { title: "Hardware Prototyping", desc: "Full-cycle hardware design, from initial schematics to functional PCB prototypes." },
            { title: "Technical Audits", desc: "Independent review of system architecture, code quality, and hardware design integrity." },
            { title: "Process Automation", desc: "Developing custom tools to optimize engineering workflows and data collection." },
            { title: "Architecture Design", desc: "Strategic planning of complex systems to ensure scalability and reliability." },
            { title: "Integration Services", desc: "Seamless connection of hardware components with modern software infrastructures." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-neutral-900 border border-neutral-800 rounded-3xl hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="border-t border-neutral-900 py-12 px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-lg font-bold">Contact Details</h4>
            <p className="text-neutral-500 mt-2">Professional Engineering Services</p>
          </div>
          <div className="text-right">
            {/* ТУТ ТЕЖ ВПИШІТЬ ВАШУ ПОШТУ ПІСЛЯ mailto: */}
            <p className="text-neutral-300">Email: <a href="mailto:ВАША_ПОШТА@example.com" className="text-blue-400 hover:underline">ВАША_ПОШТА@example.com</a></p>
            <p className="text-neutral-300">Phone: <a href="tel:+380XXXXXXXXX" className="text-blue-400 hover:underline">+380 XX XXX XX XX</a></p>
          </div>
        </div>
        <div className="text-center mt-12 text-neutral-600 text-sm">
          © 2026 Engineering Consulting. All rights reserved.
        </div>
      </footer>
    </main>
  );
}