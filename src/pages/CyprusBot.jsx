import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, BarChart, Check, Smartphone, Lock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

const CyprusBot = () => {
    return (
        <div className="bg-slate-50 w-full flex-grow flex flex-col">

            {/* 1. HOLOGRAPHIC HERO SECTION */}
            <section className="bg-remage-navy relative overflow-hidden py-24 px-4 min-h-[60vh] flex items-center">
                {/* Animated Backgrounds */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-remage-gold/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-remage-green/20 rounded-full blur-[100px]"></div>

                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <FadeIn direction="right">
            <span className="inline-block py-1 px-3 rounded-full bg-remage-gold/20 text-remage-gold border border-remage-gold/50 text-xs font-bold uppercase tracking-wider mb-4">
              Version 1.0 Live
            </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Cyprus-V1 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-remage-gold to-yellow-200">
                Trading Core
              </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            The 3-in-1 automated algorithm designed for MT5. Precision scalping, steady swings, and rigorous risk management in one powerful tool.
                        </p>
                        <div className="flex gap-4">
                            <a href="#pricing" className="bg-white text-remage-navy px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
                                View Pricing
                            </a>
                        </div>
                    </FadeIn>

                    {/* Abstract Bot Visual */}
                    <FadeIn direction="left" delay={0.2} className="relative">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-remage-blue/30 blur-[60px]"></div>

                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <Activity className="text-remage-green animate-pulse" />
                                    <span className="text-white font-mono">System Status: ONLINE</span>
                                </div>
                                <span className="text-remage-gold font-bold">99.9% Uptime</span>
                            </div>
                            <div className="space-y-4 font-mono text-sm relative z-10">
                                <div className="flex justify-between text-slate-300">
                                    <span>Algorithm:</span> <span className="text-white">Hybrid-Neural</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Target Pair:</span> <span className="text-white">XAUUSD / US30</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Risk Setting:</span> <span className="text-remage-green">Dynamic (Low)</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full mt-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 2 }}
                                        className="h-full bg-remage-gold"
                                    ></motion.div>
                                </div>
                                <p className="text-right text-xs text-remage-gold mt-1">Optimization Complete</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. FEATURES GRID (Tech Style) */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-remage-navy">Engineered for Profit</h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Zap />, title: "Scalping Mode", desc: "High-frequency entries catching rapid market movements during London & NY sessions.", color: "text-remage-blue", bg: "bg-blue-50" },
                        { icon: <BarChart />, title: "Swing Mode", desc: "Holds trades for larger pip counts, filtering out market noise for maximum trend capture.", color: "text-remage-gold", bg: "bg-yellow-50" },
                        { icon: <Lock />, title: "Risk Shield", desc: "Hard-coded equity protection stops the bot if drawdown reaches your specified limit.", color: "text-remage-green", bg: "bg-green-50" }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="group p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all bg-white">
                            <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <div className={`${item.color} w-8 h-8`}>{item.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-remage-navy mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* 3. PRICING CALL TO ACTION */}
            <section id="pricing" className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-remage-navy/80"></div>
                <div className="max-w-4xl mx-auto relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
            LIMITED TIME OFFER
          </span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-2">$200 <span className="text-2xl text-slate-400 line-through font-normal">$400</span></h2>
                    <p className="text-remage-gold text-xl mb-8 font-medium">50% Off — Pay Half Now, Half Later</p>

                    <div className="grid md:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
                        {['Lifetime License', 'Free Updates', 'Setup Guide PDF', '1-on-1 Support'].map((feat) => (
                            <div key={feat} className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
                                <span className="text-slate-200">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        to="/checkout"
                        className="inline-block w-full md:w-auto bg-remage-green hover:bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-green-900/20 transition-all scale-100 hover:scale-105 text-center"
                    >
                        Buy Now ($200)
                    </Link>
                    <p className="mt-4 text-xs text-slate-500">Instant download after payment confirmation.</p>
                </div>
            </section>
        </div>
    );
};

export default CyprusBot;