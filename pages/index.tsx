import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Head>
        <title>Nihon Gateway | Your Lifetime Gateway to Success in Japan</title>
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                All-in-One Japan Migration Platform
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Break the <span className="text-primary italic">Deadlock</span>. <br />
                Start Your Life in Japan.
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-lg">
                "No visa without a job. No job without a visa." We solve this. <br />
                From learning Japanese to getting hired and securing your home—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30 text-center">
                  Start Learning (Free)
                </button>
                <Link href="/sanuki" className="px-8 py-4 border border-foreground/10 rounded-full font-bold text-lg hover:bg-foreground/5 transition-colors text-center">
                  Explore Sanuki Hub
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/5 bg-white p-2">
                <Image
                  src="/hero.png"
                  alt="Japan Migration Success"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 1. Admin & Legal (The Deadlock Breakers) */}
        <section id="admin" className="py-24 bg-foreground/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 inline-block">Step 1: The Foundation</span>
              <h2 className="text-3xl md:text-5xl font-bold">Solving the "Impossible" First Steps</h2>
              <p className="text-lg text-secondary mt-6">We handle the administrative hurdles that stop 90% of foreigners before they even start.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Visa Support", desc: "Total support for Business Manager & Work visas. We analyze your career consistency to satisfy Immigration requirements.", icon: "🛂" },
                { title: "Bank Accounts", desc: "Partnerships with Shinsei & JP Bank to open personal and corporate accounts without the usual rejections.", icon: "🏦" },
                { title: "Driver's License", desc: "Skip the months-long wait. We assist with booking, translation, and test prep for license switching.", icon: "🚗" }
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 rounded-3xl border border-foreground/5 shadow-sm">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-secondary leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Career & Education (Work & Study) */}
        <section id="career" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Guaranteed <span className="text-primary">Career Path</span></h2>
                <p className="text-lg text-secondary mb-10 leading-relaxed">
                  Don't just study; secure your future. We integrate language learning directly with job placement through our J-Linka partnership.
                </p>
                <ul className="space-y-6">
                  {[
                    { strong: "School + Job Set", text: "Enrolling in our partner schools guarantees a job interview upon reaching N4/N3 level." },
                    { strong: "AI Potential Evaluation", text: "Our Nihongo App analyzes your learning speed to prove your IQ and adaptability to employers, even before you speak fluent Japanese." },
                    { strong: "Japanese Staffing", text: "For founders, we provide 100% Japanese admin staff to handle tax and bureaucracy." }
                  ].map((li, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">✓</div>
                      <p className="text-secondary"><strong className="text-foreground">{li.strong}:</strong> {li.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 bg-foreground/5 rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-6">The Success Loop</h3>
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-foreground/5 text-center">Step A: Free N5 Learning (Nihongo App)</div>
                  <div className="text-center text-primary text-xl font-bold">↓</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-foreground/5 text-center">Step B: Apply to Language School (AI Support)</div>
                  <div className="text-center text-primary text-xl font-bold">↓</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-foreground/5 text-center border-b-4 border-primary">Step C: Guaranteed Job Match (J-Linka)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Living & Community (Sanuki & Hubs) */}
        <section id="living" className="py-24 bg-foreground/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 inline-block">Step 3: Quality of Life</span>
              <h2 className="text-3xl md:text-5xl font-bold">Live Well, Not Just "Survive"</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Guarantor-Free Housing", desc: "Rent beautiful homes and offices without a Japanese guarantor. We back you." },
                { title: "Rural Transport", desc: "Access our detailed network of car-shares and foreigner-friendly taxi services." },
                { title: "Family & Schools", desc: "International school support and online education for your children." },
                { title: "Culture Training", desc: "Master the unspoken rules (trash sorting, noise) to live harmoniously." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-foreground/5">
                  <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                  <p className="text-sm text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Sanuki Hub Callout */}
            <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-[3rem] p-10 md:p-16 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">Need a place to think?</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
                If you don't have a visa yet, or just want to test your fit in Japan, come to our <strong>Sanuki City Hub</strong>.
                Stay for 1-3 months, learn the culture, and plan your career with our "Workaway" model.
              </p>
              <Link href="/sanuki" className="inline-block px-10 py-4 bg-white text-primary rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                Check Sanuki Hub Program
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 relative overflow-hidden bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Start Your Japan Journey</h2>
            <p className="text-background/60 text-xl mb-12">
              Join the waiting list to get free access to N5 Japanese lessons and our visa consultation.
            </p>
            <div className="flex justify-center flex-col sm:flex-row gap-6">
              <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xl hover:scale-105 transition-transform">
                Start Free Learning
              </button>
              <Link href="/founders" className="px-12 py-5 border border-white/20 text-white rounded-full font-black text-xl hover:bg-white/10 transition-colors flex items-center justify-center">
                I am a Founder
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-foreground/5 text-center text-secondary text-sm">
        <p>© 2026 Kirirom Group - Nihon Gateway Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
