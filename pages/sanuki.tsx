import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Sanuki() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Head>
                <title>Consider Sanuki City | NewGaijinPot</title>
            </Head>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-left">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                                Why Sanuki City?
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                                Launch in <span className="text-primary italic">Sanuki</span>. <br />
                                Optimal Balance.
                            </h1>
                            <p className="text-xl text-secondary mb-10 leading-relaxed max-w-lg italic">
                                "We recommend Sanuki as your first entry point to Japan. Here is why it might be the best decision for your startup and family."
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/5 bg-white p-2">
                                <Image
                                    src="/hero.png"
                                    alt="Sanuki City Startup Hub"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 italic">Strategic Advantages</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-12">
                                {[
                                    { title: "Seamless Office Compliance", desc: "Forget high-priced urban offices. Our properties in Sanuki are guaranteed to meet immigration requirements instantly and affordably." },
                                    { title: "World-Class Family Life", desc: "With high-quality international schools and low cost of living, your family thrives while you build your legacy." },
                                    { title: "Immersive Japanese Mastery", desc: "Living in Sanuki accelerates language skills through natural community immersion compared to 'expat bubbles' in Tokyo." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                                            <p className="text-secondary leading-relaxed text-lg">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-foreground/[0.02] rounded-[3rem] p-12 border border-foreground/5 shadow-inner">
                                <h3 className="text-2xl font-bold mb-8">3 Specialized Communities</h3>
                                <div className="space-y-6">
                                    <div className="p-6 bg-background rounded-2xl border border-primary/10">
                                        <h4 className="font-bold text-primary mb-2">WAOJE Sanuki</h4>
                                        <p className="text-sm text-secondary">Global network of Japanese entrepreneurs.</p>
                                    </div>
                                    <div className="p-6 bg-background rounded-2xl border border-primary/10">
                                        <h4 className="font-bold text-primary mb-2">Kagawa Innovation Base</h4>
                                        <p className="text-sm text-secondary">The open gateway for everyone. Fully English-supported.</p>
                                    </div>
                                    <div className="p-6 bg-background rounded-2xl border border-primary/10">
                                        <h4 className="font-bold text-primary mb-2">PLH Generative AI Club</h4>
                                        <p className="text-sm text-secondary">Deep-tech automation and co-founder matching.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section (Moved from Home) */}
                <section id="comparison" className="py-24 bg-foreground/5">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 italic text-secondary">Urban Struggle vs. Sanuki Flow</h2>
                        <div className="overflow-x-auto rounded-3xl border border-foreground/10 bg-background shadow-2xl">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-foreground/10 bg-foreground/[0.02]">
                                        <th className="p-8 text-xl font-bold">Priority</th>
                                        <th className="p-8 text-xl font-bold text-secondary italic">Standard Path</th>
                                        <th className="p-8 text-xl font-bold text-primary">Sanuki Choice</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-foreground/5">
                                    {[
                                        ["Office Entry", "High Rent / Slow Screenings", "Instant Compliance in Sanuki"],
                                        ["Housing", "Complex Contracts / High Cost", "Affordable & High Quality"],
                                        ["Family Stability", "High-Cost Urban Struggle", "Elite Schooling / Low Cost of Living"],
                                        ["Implications", "Disconnected & Slow", "Integrated & Fast-Tracked"]
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

                {/* CTA */}
                <section className="py-32 bg-foreground text-background">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Interested in Sanuki?</h2>
                        <p className="text-background/60 text-xl mb-12">Get a consultation on how Sanuki supports your specific journey.</p>
                        <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            Book a Hub Tour
                        </button>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-foreground/5 text-center text-secondary text-sm">
                <p>© 2026 Kirirom Group - NewGaijinPot Project. All rights reserved.</p>
            </footer>
        </div>
    );
}
