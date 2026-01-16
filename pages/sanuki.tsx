import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Sanuki() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Head>
                <title>Consider Sanuki City | Nihon Gateway</title>
            </Head>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-left">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                                The Physical Solution
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                                PLH <span className="text-primary italic">Sanuki</span>. <br />
                                The Hub That Works.
                            </h1>
                            <p className="text-xl text-secondary mb-10 leading-relaxed max-w-lg italic">
                                "I had to live in Osaka for my daughter's school while my office was in Kagawa. I couldn't find a taxi. I was rejected for car share." <br />
                                <span className="text-sm font-bold not-italic mt-4 block text-foreground">— Rohan Shetty, Entrepreneur in Japan</span>
                            </p>
                            <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                                Book a Visit
                            </button>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/5 bg-white p-2">
                                <Image
                                    src="/hero.png"
                                    alt="PLH Sanuki Hub"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The "Rohan Paradox" Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 italic text-center">The "Sanuki Gap" Solved by <span className="text-primary">PLH</span></h2>
                        <div className="grid md:grid-cols-2 gap-16">
                            {/* Problem Column */}
                            <div className="space-y-12">
                                <h3 className="text-2xl font-bold text-red-500/80 mb-8 border-b border-red-100 pb-4">Real Struggles (Before PLH)</h3>
                                <div className="space-y-8">
                                    {[
                                        { title: "The 'Door' Requirement", desc: "Immigration demands a lockable individual office. Most local rentals don't qualify or won't rent to foreigners." },
                                        { title: "Transport Paralysis", desc: "No Uber. No Taxis. Foreign licenses rejected by car shares. You are literally stuck." },
                                        { title: "The 'Admin' Wall", desc: "You need a 100% Japanese admin to handle tax & city hall. You can't hire one easily in rural areas." },
                                        { title: "Schooling Exile", desc: "No international school nearby means your family has to live in a different prefecture (like Osaka)." }
                                    ].map((item, i) => (
                                        <div key={i} className="opacity-70 hover:opacity-100 transition-opacity">
                                            <h4 className="font-bold text-lg mb-2 text-foreground/80">✕ {item.title}</h4>
                                            <p className="text-sm text-secondary">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solution Column */}
                            <div className="space-y-12">
                                <h3 className="text-2xl font-bold text-primary mb-8 border-b border-primary/20 pb-4">The PLH Standard (Solved)</h3>
                                <div className="space-y-8">
                                    {[
                                        { title: "Pre-Approved Offices", desc: "PLH Sanuki offers ready-to-use private offices guaranteed to pass Immigration inspection instantly." },
                                        { title: "Foreigner-Friendly Mobility", desc: "専用のカーシェア and driver support system specifically for international residents." },
                                        { title: "Japanese Admin Staff", desc: "Our on-site bilingual staff handle your tax, city hall, and bureaucracy. You focus on business." },
                                        { title: "Education Support", desc: "We coordinate local international schooling options or high-quality hybrid education hubs for your kids." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                            <h4 className="font-bold text-lg mb-2 text-primary">✓ {item.title}</h4>
                                            <p className="text-sm text-secondary">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3 Communities (Already existing but refined) */}
                <section className="py-24 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h3 className="text-2xl font-bold mb-12">Backed by 3 Distinct Communities</h3>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {[
                                { name: "WAOJE Sanuki", desc: "Connecting you to global Japanese founders." },
                                { name: "Kagawa Innovation Base", desc: "The open door for all entrepreneurs in Kagawa." },
                                { name: "PLH Generative AI Club", desc: "Tech support and CTO matching for your startup." }
                            ].map((c, i) => (
                                <div key={i} className="p-8 bg-background border border-foreground/10 rounded-3xl">
                                    <h4 className="font-bold text-lg mb-4">{c.name}</h4>
                                    <p className="text-sm text-secondary">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-foreground text-background">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Sanuki is Ready. Are You?</h2>
                        <p className="text-background/60 text-xl mb-12">Perfect for Working Holiday Visa holders. Stay for 1 month, see if it fits.</p>
                        <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            Apply for PLH Sanuki Residency
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
