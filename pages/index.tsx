import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Head>
        <title>NewGaijinPot | Breaking the Deadlock for Foreign Founders in Japan</title>
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Next-Gen Relocation Support
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Break the <span className="text-primary italic">Deadlock</span>. <br />
                Build in Japan.
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-lg">
                Going beyond information. We provide the physical setup, legal bridging, and infrastructure needed to launch your life and business in Japan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30">
                  Launch Your Startup
                </button>
                <button className="px-8 py-4 border border-foreground/10 rounded-full font-bold text-lg hover:bg-foreground/5 transition-colors">
                  Watch the Concept
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/5">
                <Image
                  src="/hero.png"
                  alt="Modern Japan Startup Hero"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section id="problem" className="py-24 bg-foreground/[0.02]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">The "Deadlock" Crisis</h2>
            <p className="text-xl text-secondary mb-16 leading-relaxed">
              In Japan, you need a bank account for a visa, a visa for a mobile phone, and a phone for a bank account.
              We resolve this cycle with a boots-on-the-ground approach.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: "Visa & Office", desc: "No more paper-only services. We secure the physical space required for Business Manager visas." },
                { title: "Financial Bridge", desc: "Direct hand-holding to open accounts with foreigner-friendly banks like SBI Shinsei." },
                { title: "Mobility", desc: "Solving the months-long license conversion wait through streamlined booking and prep." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-background rounded-2xl shadow-sm border border-foreground/5 hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 4 Pillars Section */}
        <section id="solution" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Ecosystem</h2>
                <p className="text-xl text-secondary italic">A MECE (Mutually Exclusive, Collectively Exhaustive) structure for your success.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: "01",
                  title: "Legal & Admin",
                  points: ["Management Visa Package", "Office Space Guarantee", "Bank Liaison"],
                  color: "bg-blue-500"
                },
                {
                  id: "02",
                  title: "Career & Edu",
                  points: ["Job-Guaranteed Language Prep", "AI-Driven IQ Evaluation", "Social Etiquette Coaching"],
                  color: "bg-indigo-500"
                },
                {
                  id: "03",
                  title: "Infrastructure",
                  points: ["Expats Transport Network", "Family/Education Support", "Adoption of Bilingual Staff"],
                  color: "bg-purple-500"
                },
                {
                  id: "04",
                  title: "Community",
                  points: ["Workaway Trial Program", "Clear Filter/Exit Rules", "Value-Aligned Networking"],
                  color: "bg-pink-500"
                },
              ].map((pillar, i) => (
                <div key={i} className="group p-8 rounded-3xl border border-foreground/5 hover:bg-foreground/[0.01] transition-all relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${pillar.color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity`} />
                  <span className="text-4xl font-black text-foreground/5 mb-4 block group-hover:text-primary/10 transition-colors">
                    {pillar.id}
                  </span>
                  <h3 className="text-2xl font-bold mb-6">{pillar.title}</h3>
                  <ul className="space-y-4">
                    {pillar.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-secondary text-sm">
                        <span className="text-primary mt-1">→</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 bg-foreground/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 italic">Beyond Information</h2>
            <div className="overflow-x-auto rounded-3xl border border-foreground/10 bg-background shadow-2xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-foreground/10 bg-foreground/[0.02]">
                    <th className="p-8 text-xl font-bold">Feature</th>
                    <th className="p-8 text-xl font-bold text-secondary">Legacy Platforms</th>
                    <th className="p-8 text-xl font-bold text-primary">NewGaijinPot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5">
                  {[
                    ["Target Audience", "In-Japan Expats", "Foreign Founders & Future Residents"],
                    ["Career Path", "Job Matchmaker only", "Study-to-Hire Guarantee (Jelinka)"],
                    ["Housing", "Information & Ads", "Office/Living Setup Support"],
                    ["Rural Access", "Urban Focused", "Regional Infrastructure (Sanuki, etc.)"],
                    ["Support Type", "Digital/Web Main", "Physical Hand-holding & Setup"]
                  ].map((row, i) => (
                    <tr key={i} className="group">
                      <td className="p-8 font-semibold">{row[0]}</td>
                      <td className="p-8 text-secondary italic">{row[1]}</td>
                      <td className="p-8 text-primary font-bold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 relative overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Build Your <br /> Future in Japan?</h2>
            <p className="text-white/80 text-xl mb-12">
              Join the waiting list for our next Workaway program and start your journey today.
            </p>
            <button className="px-12 py-5 bg-white text-primary rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
              Apply for Initial Batch
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-foreground/5 text-center text-secondary text-sm">
        <p>© 2026 Kirirom Group - NewGaijinPot Project (Tentative). All rights reserved.</p>
      </footer>
    </div>
  );
}
