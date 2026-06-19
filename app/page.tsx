export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section з градієнтом */}
      <section className="relative px-8 pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide uppercase">
            Available for Engineering Projects
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mt-8 mb-6 tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Excellence</span>
          </h1>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Professional firmware development, hardware prototyping, and DeFi automation. 
            Turning complex technical challenges into scalable, secure solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
              Start Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack / Services */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-300">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Firmware Dev", desc: "Expert C/C++ development for Nuvoton, ESP32, and custom hardware architectures." },
            { title: "Crypto/DeFi", desc: "Building automated market-making bots and secure blockchain protocol interactions." },
            { title: "Prototyping", desc: "Full-cycle hardware design, from PCB layout to firmware implementation." },
            { title: "Consulting", desc: "System audits, reverse engineering, and technical optimization strategies." },
            { title: "Security", desc: "Automotive security systems, keyless entry research, and protocol analysis." },
            { title: "Automation", desc: "Custom scripts for data logging, testing, and system integration." }
          ].map((item, i) => (
            <div key={i} className="group p-8 bg-neutral-900 border border-neutral-800 rounded-3xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-neutral-800 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}