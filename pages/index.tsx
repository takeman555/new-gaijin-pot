import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Head>
        <title>NewGaijinPot | Your Lifetime Gateway to Startup Success in Japan</title>
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Sanuki City: The Best Entry Point for Foreign Founders
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Launch in <span className="text-primary italic">Sanuki</span>. <br />
                Scale to <span className="text-primary">Japan</span>.
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-lg">
                Solving everything from AI-driven visa applications to quality life for your family and employees. Sustainable success starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30">
                  Start AI Visa Application
                </button>
                <button className="px-8 py-4 border border-foreground/10 rounded-full font-bold text-lg hover:bg-foreground/5 transition-colors">
                  Explore Sanuki City
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/5 bg-white p-2">
                <Image
                  src="/hero.png"
                  alt="Sanuki City Startup Hub"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global vs Local Section */}
        <section id="solution" className="py-24 bg-foreground/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">A Three-Layer Ecosystem</h2>
              <p className="text-xl text-secondary">From global talent matching to local community support, we cover every aspect of your business and life.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Global & National",
                  desc: "AI-driven visa tools for Founders and a talent hub that connects global minds with your startup in Japan.",
                  features: ["AI Visa Self-App", "Talent Matching", "Market Data"],
                  icon: "🌐"
                },
                {
                  title: "Sanuki Local (The Hub)",
                  desc: "The fastest way to get your office, visa, and life set up with 100% compliance and zero friction.",
                  features: ["Instant Offices", "3 Support Communities", "Family Education"],
                  icon: "📍"
                },
                {
                  title: "Lifetime Support",
                  desc: "Ensuring long-term well-being for your family and employees, from education to community immersion.",
                  features: ["Family Integration", "Schooling Support", "Language Mastery"],
                  icon: "❤️"
                }
              ].map((layer, i) => (
                <div key={i} className="p-10 rounded-3xl bg-background border border-foreground/5 shadow-sm hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{layer.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{layer.title}</h3>
                  <p className="text-secondary mb-8 leading-relaxed">{layer.desc}</p>
                  <ul className="space-y-3">
                    {layer.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sanuki Section */}
        <section id="sanuki" className="py-24">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Sanuki City is the <span className="text-primary italic">Optimal Choice</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Seamless Office Compliance", desc: "Forget high-priced urban offices. Our properties are guaranteed to meet immigration requirements instantly and affordably." },
                  { title: "World-Class Family Life", desc: "With high-quality international schools and low cost of living, your family thrives while you build your legacy." },
                  { title: "Immersive Japanese Mastery", desc: "Living in Sanuki accelerates language skills through natural community immersion compared to 'expat bubbles'." },
                  { title: "Triple Community Power", desc: "Three specialized entrepreneur communities in Sanuki are ready to provide mentorship, networking, and local support." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-64 bg-slate-100 rounded-3xl" />
              <div className="h-64 bg-primary/10 rounded-3xl" />
              <div className="h-64 bg-primary rounded-3xl" />
              <div className="h-64 bg-slate-200 rounded-3xl" />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 bg-foreground/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 italic font-serif text-secondary">A Paradigm Shift in Startup Migration</h2>
            <div className="overflow-x-auto rounded-3xl border border-foreground/10 bg-background shadow-2xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-foreground/10 bg-foreground/[0.02]">
                    <th className="p-8 text-xl font-bold">Priority</th>
                    <th className="p-8 text-xl font-bold text-secondary italic">Standard Path</th>
                    <th className="p-8 text-xl font-bold text-primary">NewGaijinPot (Sanuki Focus)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5">
                  {[
                    ["Office Entry", "High Rent / Slow Screenings", "Instant Compliance in Sanuki"],
                    ["Visa Process", "Lawyer-dependent & Opaque", "AI-Driven Self-Application Tools"],
                    ["Family Stability", "High-Cost Urban Struggle", "Elite Schooling / Low Cost of Living"],
                    ["Talent Pipeline", "Competitive & Generic", "Direct Matching with Global Talent"],
                    ["Community", "Isolated & Fragmented", "3 Interlocked Local Communities"]
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
        <section id="contact" className="py-32 relative overflow-hidden bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build in Sanuki?</h2>
            <p className="text-background/60 text-xl mb-12">
              Start your journey with our AI Visa tool or book a tour of our Sanuki City hub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xl hover:scale-105 transition-transform">
                Launch AI Assistant
              </button>
              <button className="px-12 py-5 border border-white/20 text-white rounded-full font-black text-xl hover:bg-white/10 transition-colors">
                Contact the Hub
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-foreground/5 text-center text-secondary text-sm">
        <p>© 2026 Kirirom Group - NewGaijinPot Project (Tentative). All rights reserved.</p>
      </footer>
    </div>
  );
}
