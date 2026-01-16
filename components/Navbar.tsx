import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
                    NewGaijinPot<span className="text-foreground">.</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <div className="group relative cursor-pointer py-4">
                        <span className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                            Services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-background border border-foreground/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 flex flex-col gap-1 z-50">
                            <Link href="/#admin" className="text-sm px-4 py-2 hover:bg-foreground/5 rounded-lg text-left">Visa & Banking</Link>
                            <Link href="/#career" className="text-sm px-4 py-2 hover:bg-foreground/5 rounded-lg text-left">Jobs & Education</Link>
                            <Link href="/#living" className="text-sm px-4 py-2 hover:bg-foreground/5 rounded-lg text-left">Living Support</Link>
                        </div>
                    </div>
                    <Link href="/founders" className="text-sm font-medium hover:text-primary transition-colors">For Founders</Link>
                    <Link href="/sanuki" className="text-sm font-medium hover:text-primary transition-colors">Sanuki Hub</Link>
                    <Link href="#contact" className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        Start Free
                    </Link>
                </div>
            </div>
        </nav>
    );
}
