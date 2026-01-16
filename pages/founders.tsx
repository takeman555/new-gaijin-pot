import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Founders() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Head>
                <title>For Founders | Nihon Gateway Sanuki Hub</title>
            </Head>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-primary/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Exclusively for Founders
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl">
                            Focus on Your <span className="text-primary italic">Product</span>. <br />
                            We Handle the Rest.
                        </h1>
                        <p className="text-xl text-secondary mb-12 max-w-2xl leading-relaxed">
                            Founders face unique hurdles in Japan—from complex office regulations to securing global talent and ensuring family stability. Our Sanuki hub is built to solve these burdens for you.
                        </p>
                    </div>
                </section>

                {/* Founder Challenges Section */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 italic">Challenges unique to Founders</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                {
                                    title: "The Office 'Door' Rule",
                                    desc: "Immigration requires a physical, separate office with a lockable door. We provide pre-vetted, compliant spaces in Sanuki instantly."
                                },
                                {
                                    title: "Talent Acquisition",
                                    desc: "Finding the right mix of local and global talent is hard. Our hub directly connects you with high-potential students and job seekers."
                                },
                                {
                                    title: "Family & Legacy",
                                    desc: "Moving a family? We provide direct support for international schooling and high-quality living, so you can focus on scale."
                                },
                                {
                                    title: "Claude Code Integration",
                                    desc: "Don't waste days on paperwork. Use our Claude Code tools to automate your own visa applications and administrative threads."
                                },
                                {
                                    title: "Capital & Network",
                                    desc: "Access WAOJE Sanuki and KIB networks to find investors, partners, and mentors who have already walked the path."
                                },
                                {
                                    title: "CTO Matching",
                                    desc: "Need a technical co-founder? The PLH Generative AI Club is home to top-tier AI solo-preneurs ready to join high-impact startups."
                                }
                            ].map((item, i) => (
                                <div key={i} className="border-l-4 border-primary pl-8 py-2">
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Triple Community Callout */}
                <section className="py-24 bg-foreground text-background">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Your Local Board of Advisors</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                <h4 className="text-2xl font-bold text-primary mb-4">WAOJE Sanuki</h4>
                                <p className="text-background/70 text-sm">Advice from Japanese founders who've scaled globally. Your bridge to the world.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                <h4 className="text-2xl font-bold text-primary mb-4">Kagawa Innovation Base</h4>
                                <p className="text-background/70 text-sm">Direct connection to the local ecosystem. English-first mentorship and local partnerships.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                <h4 className="text-2xl font-bold text-primary mb-4">PLH GenAI Club</h4>
                                <p className="text-background/70 text-sm">Find your CTO or automate your workflow. Pure technical execution and AI strategy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-primary">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic">Ready to Lead?</h2>
                        <button className="px-12 py-5 bg-white text-primary rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            Apply for Founder Support
                        </button>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-foreground/5 text-center text-secondary text-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="mb-4">© 2026 Kirirom Group - Nihon Gateway Project. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-60 text-[10px] uppercase tracking-widest font-medium">
                        <span>Recruitment License: Kirirom Digital Co., Ltd.</span>
                        <span>Real Estate License: vKirirom Japan Co., Ltd.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
