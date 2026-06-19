export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8 md:p-24">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Engineering Solutions for <span className="text-blue-500">Complex Systems</span>
        </h1>
        <p className="text-xl text-neutral-400 mb-8 max-w-2xl">
          Expert consultant in firmware development, hardware prototyping, and blockchain automation. 
          Bridging the gap between embedded hardware and the decentralized web.
        </p>
        <button className="bg-white text-black px-8 py-3 font-semibold rounded-full hover:bg-neutral-200 transition">
          Book a Consultation
        </button>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto mt-32 grid md:grid-cols-3 gap-8">
        <div className="border border-neutral-800 p-6 rounded-2xl hover:border-blue-500 transition">
          <h3 className="text-xl font-bold mb-2">Firmware</h3>
          <p className="text-neutral-400 text-sm">C/C++ for Nuvoton, ESP32, and custom MCU architectures.</p>
        </div>
        <div className="border border-neutral-800 p-6 rounded-2xl hover:border-blue-500 transition">
          <h3 className="text-xl font-bold mb-2">Blockchain</h3>
          <p className="text-neutral-400 text-sm">DeFi protocol integration and automated trading systems.</p>
        </div>
        <div className="border border-neutral-800 p-6 rounded-2xl hover:border-blue-500 transition">
          <h3 className="text-xl font-bold mb-2">Consulting</h3>
          <p className="text-neutral-400 text-sm">Technical audits, architecture design, and security reviews.</p>
        </div>
      </section>
    </main>
  );
}