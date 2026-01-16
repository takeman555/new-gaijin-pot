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

        {/* Pre-arrival & Career Core Services */}
        <section id="solution" className="py-24 bg-foreground/[0.01]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 inline-block">Support from Day Zero</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Your Bridge to a Career in Japan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                {
                  title: "AI School Apps",
                  desc: "Simplified pre-arrival support. Our AI helps you find and apply to the best language schools in Japan with ease.",
                  icon: "🏫"
                },
                {
                  title: "Job Guarantee",
                  desc: "Study with confidence. We guarantee job placement after you achieve JLPT N4/N3 levels at our partner schools.",
                  icon: "💼"
                },
                {
                  title: "Nihongo AI Data",
                  desc: "Showcase your potential. We analyze your learning speed and IQ through the Nihongo app to find your perfect job match.",
                  icon: "🧠"
                },
                {
                  title: "Free Learning",
                  desc: "Lowering the entry barrier. Access N5 and N4 level Japanese courses for free on our platform.",
                  icon: "🎁"
                }
              ].map((service, i) => (
                <div key={i} className="p-8 bg-background rounded-3xl border border-foreground/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col items-start min-h-[300px]">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-secondary leading-relaxed text-sm mb-6">{service.desc}</p>
                  <div className="mt-auto group flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>

            {/* J-Linka Integration Callout */}
            <div className="mt-20 p-8 md:p-12 bg-primary text-white rounded-[3rem] shadow-2xl shadow-primary/20 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 italic">Integrated with J-Linka</h3>
              <p className="text-white/80 text-lg mb-8">Direct connection to Japan's premier job matching platform for foreign talent. Your career starts here.</p>
              <div className="flex justify-center flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">Global Network</span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">Bilingual Opportunities</span>
                <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">Visa-Sponsoring Companies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nihongo Learning & Evaluation */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Data-Driven Success with <span className="text-primary italic">Nihongo App</span></h2>
              <p className="text-lg text-secondary mb-10 leading-relaxed">
                We go beyond self-reported skills. By integrating your learning data from the Nihongo app, we provide a verifiable profile to Japanese employers.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Verifiable Potential", desc: "We track your learning speed and consistency to quantify your 'IQ' and 'Adaptability' for recruiters." },
                  { title: "Free Entry Level Courses", desc: "Start your journey without limits. All N5 and N4 level Japanese courses are free on our platform." },
                  { title: "Smart Interview Matching", desc: "Employers receive data-backed recommendations, ensuring you interview with companies that value your unique pace." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl border border-foreground/5 hover:bg-primary/5 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-full flex items-center justify-center p-12">
                <div className="w-full h-full bg-white rounded-3xl shadow-2xl p-8 border border-foreground/5 relative overflow-hidden">
                  {/* Mock Evaluation Graph */}
                  <div className="absolute inset-0 bg-primary/5 p-8 flex flex-col justify-end">
                    <div className="w-full h-1/2 flex items-end gap-2">
                      <div className="w-1/4 h-3/4 bg-primary rounded-t-lg animate-pulse" />
                      <div className="w-1/4 h-1/2 bg-primary/60 rounded-t-lg" />
                      <div className="w-1/4 h-full bg-primary rounded-t-lg animate-pulse" />
                      <div className="w-1/4 h-2/3 bg-primary/60 rounded-t-lg" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-black mb-2 relative z-10">AI Evaluated IQ: 124</h4>
                  <p className="text-secondary text-sm relative z-10 font-bold text-primary uppercase">Adaptability: Exceptional</p>
                </div>
              </div>
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
