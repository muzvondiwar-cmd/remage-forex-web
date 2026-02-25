import React from 'react';
import { Check, Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

const Pricing = () => {
    return (
        <div className="py-24 bg-remage-navy min-h-screen w-full flex-grow flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-remage-blue/30 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 text-center text-white mb-16 relative z-10">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Invest in Your Trading Career</h1>
                    <p className="text-slate-300 text-lg">Choose the path that fits your goals. Transparent pricing, instant access.</p>
                </FadeIn>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 w-full relative z-10 items-center">

                {/* PREMIUM SIGNALS */}
                <FadeIn delay={0.1} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><TrendingUp size={20} /></div>
                        <h3 className="text-xl font-bold text-white">Premium Signals</h3>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">$50 <span className="text-sm text-slate-400 font-normal">/Lifetime</span></div>
                    <ul className="space-y-4 mb-8 text-slate-300 text-left text-sm">
                        {['2-5 High Probability Setups Daily', 'Exact Entry, SL & TP Levels', 'VIP WhatsApp Group Access', 'Weekly Market Breakdowns'].map(i => (
                            <li key={i} className="flex gap-3"><Check size={18} className="text-blue-400" /> {i}</li>
                        ))}
                    </ul>
                    {/* SENDS SIGNALS DATA TO CHECKOUT */}
                    <Link to="/checkout" state={{ item: "VIP Premium Signals", price: 50, discount: 0, total: 50, type: "Lifetime VIP Access" }} className="block w-full py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors text-center">
                        Join VIP Group
                    </Link>
                </FadeIn>

                {/* PRO BOT (Highlighted) */}
                <FadeIn className="bg-white rounded-3xl p-8 border-4 border-remage-gold transform scale-105 shadow-[0_0_40px_rgba(251,191,36,0.3)] relative">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-remage-gold text-remage-navy px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg flex items-center gap-2">
                        <Star size={14} fill="currentColor" /> Best Value
                    </div>
                    <h3 className="text-2xl font-bold text-remage-navy mb-2">Cyprus-V1 Bot</h3>
                    <div className="flex items-end justify-center gap-2 mb-6">
                        <span className="text-5xl font-bold text-remage-navy">$200</span>
                        <span className="text-slate-400 line-through text-xl">$400</span>
                    </div>
                    <p className="text-xs text-center bg-green-100 text-green-700 py-2 rounded-lg font-bold mb-8">50% Off Launch Discount</p>
                    <ul className="space-y-4 mb-8 text-slate-700 text-left">
                        {['Lifetime License', 'Scalping & Swing Modes', 'Works on MT5 (Android/PC)', 'News Filter Included', 'Priority Support'].map(i => (
                            <li key={i} className="flex gap-3"><Check size={20} className="text-remage-gold" /> {i}</li>
                        ))}
                    </ul>
                    {/* SENDS BOT DATA TO CHECKOUT */}
                    <Link to="/checkout" state={{ item: "Cyprus-V1 Trading Bot", price: 400, discount: 200, total: 200, type: "Lifetime Software License" }} className="block w-full py-4 bg-remage-navy text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg text-center">
                        Download Bot
                    </Link>
                </FadeIn>

                {/* 1-ON-1 MENTORSHIP */}
                <FadeIn delay={0.2} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-500/20 text-green-400 rounded-lg"><Users size={20} /></div>
                        <h3 className="text-xl font-bold text-white">1-on-1 Mentorship</h3>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">$300 <span className="text-sm text-slate-400 font-normal">/Complete</span></div>
                    <ul className="space-y-4 mb-8 text-slate-300 text-left text-sm">
                        {['Direct Zoom Sessions', 'Master Institutional Concepts', 'Risk Management Strategy', 'Psychology Training', 'Free Access to Signals'].map(i => (
                            <li key={i} className="flex gap-3"><Check size={18} className="text-remage-green" /> {i}</li>
                        ))}
                    </ul>
                    {/* SENDS MENTORSHIP DATA TO CHECKOUT */}
                    <Link to="/checkout" state={{ item: "1-on-1 Mentorship Program", price: 300, discount: 0, total: 300, type: "Masterclass Curriculum" }} className="block w-full py-3 bg-remage-green text-white rounded-xl font-bold hover:bg-green-600 transition-colors text-center">
                        Enroll Now
                    </Link>
                </FadeIn>

            </div>
        </div>
    );
};

export default Pricing;