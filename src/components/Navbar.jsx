import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Dynamic Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when changing pages
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Cyprus-V1 Bot', path: '/cyprus-bot' },
        { name: 'Services', path: '/services' },
        { name: 'Results', path: '/testimonials' },
        { name: 'Pricing', path: '/pricing' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
                scrolled
                    ? 'bg-remage-navy/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] py-3'
                    : 'bg-remage-navy py-4 shadow-lg border-b border-white/5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* LOGO SECTION */}
                    <Link to="/" className="flex items-center gap-3 z-50 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-remage-gold blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                            <img src="/logo.png" alt="Remage Logo" className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105" />
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative text-sm font-medium transition-colors duration-300 py-2 ${
                                        isActive ? 'text-remage-gold' : 'text-slate-300 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                    {/* Animated Hover Underline */}
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-remage-gold to-yellow-300 transition-all duration-300 ease-out rounded-full ${
                                            isActive ? 'w-full' : 'w-0 hover:w-full'
                                        }`}
                                        style={{ left: '50%', transform: 'translateX(-50%)' }} // Center the underline growth
                                    ></span>
                                    {/* Invisible hover trigger box to make the underline grow smoothly */}
                                    <span className="absolute inset-0 w-full h-full group-hover:w-full hover:w-full peer"></span>
                                    <style>{`a:hover span:nth-child(1) { width: 100%; }`}</style>
                                </Link>
                            );
                        })}

                        {/* CTA BUTTON */}
                        <Link
                            to="/contact"
                            className="relative group overflow-hidden bg-gradient-to-r from-remage-gold to-yellow-500 text-remage-navy px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center gap-2"
                        >
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <Sparkles size={16} className="text-remage-navy" />
                            Contact Us
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-remage-gold transition-transform duration-300 focus:outline-none"
                            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE NAVIGATION DROPDOWN (Floating Glass Card) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-2 md:hidden"
                    >
                        <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col space-y-2 relative overflow-hidden">
                            {/* Decorative background glow inside mobile menu */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-remage-gold/10 rounded-full blur-3xl -z-10"></div>

                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`flex items-center justify-between text-base font-medium p-4 rounded-xl transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-gradient-to-r from-remage-gold/20 to-transparent text-remage-gold border border-remage-gold/20'
                                                    : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                                            }`}
                                        >
                                            {link.name}
                                            <ChevronRight size={18} className={isActive ? 'text-remage-gold' : 'text-slate-600'} />
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                className="pt-4 mt-2 border-t border-slate-800/50"
                            >
                                <Link
                                    to="/contact"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-remage-gold to-yellow-500 text-remage-navy px-5 py-4 rounded-xl font-bold shadow-lg"
                                >
                                    <Sparkles size={18} /> Contact Support
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;