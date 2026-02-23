import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Logo Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <img src="/logo2.png" alt="Remage Logo" className="h-10 w-auto object-contain" />

                        </Link>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                            Empowering traders with institutional-grade algorithms and elite community support. Master the markets with Cyprus-V1.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-remage-gold hover:text-remage-navy transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-remage-gold hover:text-remage-navy transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-remage-gold hover:text-remage-navy transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-remage-gold transition-colors">Home</Link></li>
                            <li><Link to="/cyprus-bot" className="hover:text-remage-gold transition-colors">Cyprus-V1 Bot</Link></li>
                            <li><Link to="/services" className="hover:text-remage-gold transition-colors">Account Management</Link></li>
                            <li><Link to="/testimonials" className="hover:text-remage-gold transition-colors">Client Results</Link></li>
                            <li><Link to="/download" className="hover:text-remage-gold transition-colors">Download Portal</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-remage-gold flex-shrink-0 mt-0.5" />
                                <span>Sandton, South Africa<br />(Global Digital Operation)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-remage-gold flex-shrink-0" />
                                <span>+27 60 547 8465</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-remage-gold flex-shrink-0" />
                                <span>support@remageforex.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Stay Updated</h3>
                        <p className="text-sm text-slate-400 mb-4">Subscribe for weekly market analysis and bot updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-slate-900 text-sm border border-slate-800 rounded-l-xl px-4 py-2 w-full focus:outline-none focus:border-remage-gold text-white"
                            />
                            <button
                                type="button"
                                className="bg-remage-gold text-remage-navy px-4 py-2 rounded-r-xl font-bold hover:bg-yellow-400 transition-colors"
                            >
                                Go
                            </button>
                        </form>
                    </div>
                </div>

                {/* Risk Disclaimer (Crucial for Forex sites) */}
                <div className="border-t border-slate-800 pt-8 pb-4 text-center">
                    <p className="text-[10px] text-slate-500 max-w-4xl mx-auto leading-relaxed mb-4">
                        <strong>Risk Warning:</strong> Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.
                    </p>
                    <p className="text-xs text-slate-400">
                        &copy; {currentYear} Remage Trading Management. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;