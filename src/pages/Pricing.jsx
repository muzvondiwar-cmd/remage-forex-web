import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

const Pricing = () => {
    return (
        <div className="py-24 bg-remage-navy min-h-screen w-full flex-grow flex flex-col justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-remage-blue/30 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 text-center text-white mb-16 relative z-10">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Invest in Your Future</h1>
                    <p className="text-slate-300 text-lg">Transparent pricing. No hidden fees. Instant access.</p>
                </FadeIn>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 w-full relative z-10 items-center">

                {/* Basic Plan */}
                <FadeIn delay={0.1} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2">WhatsApp Community</h3>
                    <div className="text-4xl font-bold text-white mb-6">Free</div>
                    <ul className="space-y-4 mb-8 text-slate-300 text-left text-sm">
                        {['Market Updates', 'Basic Education', 'Weekly Analysis', 'Community Chat'].map(i => (
                            <li key={i} className="flex gap-3"><Check size={18} className="text-slate-500" /> {i}</li>
                        ))}
                    </ul>
                    <a href="https://wa.me/1234567890" className="block w-full py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors text-center">Join Now</a>
                </FadeIn>

                {/* PRO Plan (Highlighted) */}
                <FadeIn className="bg-white rounded-3xl p-8 border-4 border-remage-gold transform scale-105 shadow-[0_0_40px_rgba(251,191,36,0.3)] relative">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-remage-gold text-remage-navy px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg flex items-center gap-2">
                        <Star size={14} fill="currentColor" /> Best Value
                    </div>
                    <h3 className="text-2xl font-bold text-remage-navy mb-2">Cyprus-V1 Bot</h3>
                    <div className="flex items-end justify-center gap-2 mb-6">
                        <span className="text-5xl font-bold text-remage-navy">$200</span>
                        <span className="text-slate-400 line-through text-xl">$400</span>
                    </div>
                    <p className="text-xs text-center bg-green-100 text-green-700 py-2 rounded-lg font-bold mb-8">Pay 50% Upfront • 50% in 30 Days</p>
                    <ul className="space-y-4 mb-8 text-slate-700 text-left">
                        {['Lifetime License', 'Scalping & Swing Modes', 'Works on MT5 (Android/PC)', 'News Filter Included', 'Priority Support'].map(i => (
                            <li key={i} className="flex gap-3"><Check size={20} className="text-remage-gold" /> {i}</li>
                        ))}
                    </ul>
                    <Link
                        to="/checkout"
                        className="block w-full py-4 bg-remage-navy text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg text-center"
                    >
                        Get Access
                    </Link>
                </FadeIn>

                {/* Service Plan */}
                <FadeIn delay={0.2} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2">Account Linking</h3>
                    <div className="text-4xl font-bold text-white mb-6">ZAR 500</div>
                    <ul className="space-y-4 mb-8 text-slate-300 text-left text-sm">
                        {['Hands-Free Trading', 'Automated Copier', 'No VPS Required', 'Risk Managed by Us'].map(i => (
                            <li key={i} className="flex gap-3"><Check size={18} className="text-remage-green" /> {i}</li>
                        ))}
                    </ul>
                    <a href="https://wa.me/1234567890" className="block w-full py-3 bg-remage-green text-white rounded-xl font-bold hover:bg-green-600 transition-colors text-center">Link Account</a>
                </FadeIn>

            </div>
        </div>
    );
};

export default Pricing;