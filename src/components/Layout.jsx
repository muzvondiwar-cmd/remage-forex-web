import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, MessageCircle, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // UPDATED LINK LIST
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Testimonials', path: '/testimonials' }, // <--- New Link
        { name: 'Cyprus-V1 Bot', path: '/cyprus-bot' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-remage-navy text-white shadow-lg border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 font-bold text-xl tracking-wider">
                        <span className="text-remage-gold"><BarChart2 size={28} /></span>
                        <span className="text-xl">REMAGE<span className="text-remage-green">FX</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className="hover:text-remage-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                            <a href="https://wa.me/1234567890" className="bg-remage-green hover:bg-green-600 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-green-500/30">
                                Join WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-remage-gold focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-remage-navy border-t border-slate-800"
                >
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-800 hover:text-remage-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 w-full">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div>
                <div className="flex items-center space-x-2 font-bold text-xl mb-4 text-white">
                    <BarChart2 className="text-remage-gold" />
                    <span>REMAGE<span className="text-remage-green">FX</span></span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                    Empowering traders with expert mentorship and automated solutions. We bridge the gap between novice and pro with technology.
                </p>
            </div>
            <div>
                <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link to="/cyprus-bot" className="hover:text-remage-gold transition-colors">Cyprus-V1 Bot</Link></li>
                    <li><Link to="/services" className="hover:text-remage-gold transition-colors">Account Linking</Link></li>
                    <li><Link to="/contact" className="hover:text-remage-gold transition-colors">Support</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white text-lg font-bold mb-4">Risk Disclaimer</h3>
                <p className="text-xs text-slate-500 text-justify leading-relaxed">
                    Trading forex and CFDs involves significant risk. Past performance of Cyprus-V1 or manual signals does not guarantee future results. Trade with money you can afford to lose.
                </p>
            </div>
        </div>
        <div className="text-center text-xs mt-12 pt-8 border-t border-slate-800 text-slate-600">
            © {new Date().getFullYear()} Remage Forex Academy. All rights reserved.
        </div>
    </footer>
);

const FloatingWhatsApp = () => (
    <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 flex items-center justify-center"
    >
        <MessageCircle size={28} />
    </a>
);

export const Layout = () => (
    <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        {/* This main wrapper ensures content fills space and centers properly */}
        <main className="flex-grow flex flex-col w-full relative">
            <Outlet />
        </main>
        <FloatingWhatsApp />
        <Footer />
    </div>
);