import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-remage-navy/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 z-50">
                        {/* The Logo Image from the public folder */}
                        <img src="/logo.png" alt="Remage Logo" className="h-10 w-auto object-contain drop-shadow-lg" />
                        <span className="text-2xl font-bold text-white tracking-tight hidden sm:block">
              Remage <span className="text-remage-gold">Forex</span>
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-remage-gold ${location.pathname === link.path ? 'text-remage-gold' : 'text-slate-200'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-remage-gold text-remage-navy px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)]"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-remage-gold transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl md:hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`flex items-center justify-between text-lg font-medium p-3 rounded-xl transition-colors ${location.pathname === link.path ? 'bg-remage-navy text-remage-gold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                                >
                                    {link.name}
                                    <ChevronRight size={16} className={location.pathname === link.path ? 'text-remage-gold' : 'text-slate-600'} />
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-slate-800">
                                <Link
                                    to="/contact"
                                    className="w-full block text-center bg-remage-gold text-remage-navy px-5 py-3 rounded-xl font-bold"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;