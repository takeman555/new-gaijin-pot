import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
                    NewGaijinPot<span className="text-foreground">.</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#problem" className="text-sm font-medium hover:text-primary transition-colors">The Problem</Link>
                    <Link href="#solution" className="text-sm font-medium hover:text-primary transition-colors">Our Solution</Link>
                    <Link href="#comparison" className="text-sm font-medium hover:text-primary transition-colors">Compare</Link>
                    <Link href="#contact" className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
