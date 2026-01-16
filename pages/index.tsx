import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
                Your Lifetime Gateway to Japan
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Live, Work, and <br />
                Thrive in <span className="text-primary italic">Japan</span>.
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-lg">
                Whether you're a founder, student, or job seeker, we provide AI-driven tools and physical setup support to build your life in Japan with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/founders" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30 text-center">
                  I am a Founder
                </Link>
                <button className="px-8 py-4 border border-foreground/10 rounded-full font-bold text-lg hover:bg-foreground/5 transition-colors text-center">
                  Start AI Visa Tool
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/5 bg-white p-2">
                <Image
                  src="/hero.png"
                  alt="Modern Japan Startup Hero"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* The 3 Pillars Section (Generalized) */}
        <section id="solution" className="py-24 bg-foreground/[0.01]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">The NewGaijinPot Way</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "AI-Driven Autonomy",
                  desc: "Utilize Claude Code and our specialized tools to handle visa applications and administrative threads yourself, without expensive lawyers.",
                  icon: "🤖"
                },
                {
                  title: "Physical Foundation",
                  desc: "We solve the 'deadlock' of bank accounts, housing, and offices through direct partnerships and physical setup support.",
                  icon: "🏠"
                },
                {
                  title: "Tailored Options",
                  desc: "From rural hubs like Sanuki City to nationwide talent matching, we find the optimal path for your specific goals.",
                  icon: "🎯"
                }
              ].map((pillar, i) => (
                <div key={i} className="p-8 bg-background rounded-3xl border border-foreground/5 shadow-sm">
                  <div className="text-4xl mb-6">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-secondary leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Tracks Funnel */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="p-12 bg-primary/5 rounded-[3rem] border border-primary/10 hover:border-primary/30 transition-all flex flex-col items-center">
                <h3 className="text-3xl font-bold mb-4">Founder-Focused</h3>
                <p className="text-secondary mb-8">Specific support for businessmanager visas, offices, and co-founder matching.</p>
                <Link href="/founders" className="mt-auto px-8 py-3 bg-primary text-white rounded-full font-bold">
                  View Founder Track
                </Link>
              </div>
              <div className="p-12 bg-foreground/[0.02] rounded-[3rem] border border-foreground/10 hover:border-foreground/30 transition-all flex flex-col items-center">
                <h3 className="text-3xl font-bold mb-4">Consider Sanuki</h3>
                <p className="text-secondary mb-8">Looking for the best entry point? Explore the benefits of living and building in Sanuki City.</p>
                <Link href="/sanuki" className="mt-auto px-8 py-3 border border-foreground rounded-full font-bold">
                  Compare Locations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 relative overflow-hidden bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Start Your Japan Journey</h2>
            <p className="text-background/60 text-xl mb-12">
              Join the waiting list for our next intake and gain access to our AI tools.
            </p>
            <div className="flex justify-center">
              <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xl hover:scale-105 transition-transform">
                Join the Community
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
