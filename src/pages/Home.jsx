import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Shield, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { Testimonials } from '../components/Testimonials';
import TickerTape from '../components/TickerTape'; // Import Ticker
import StatsSection from '../components/StatsSection'; // Import Stats

const Home = () => {
    return (
        <div className="w-full flex-grow flex flex-col bg-slate-50">

            {/* 1. LIVE MARKET TICKER (Top of page) */}
            <div className="w-full h-12 bg-slate-900 z-40 relative">
                <TickerTape />
            </div>

            {/* 2. UPGRADED HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-remage-navy">

                {/* Animated Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-remage-blue/30 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-remage-green/20 rounded-full blur-[100px]"></div>
                </div>

                {/* Hero Content with Glass Effect */}
                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Text */}
                    <FadeIn direction="right" className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                            <span className="w-2 h-2 rounded-full bg-remage-green animate-pulse"></span>
                            <span className="text-remage-gold text-sm font-bold tracking-wide">V1 ROBOT NOW LIVE</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Master the Markets <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-remage-gold to-yellow-200">
                Automated.
              </span>
                        </h1>

                        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Stop guessing. Start executing. Join 500+ traders using our Cyprus-V1 Algorithm to generate consistent daily profits.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/cyprus-bot" className="bg-remage-gold text-remage-navy px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all flex items-center justify-center">
                                Get Access Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a href="https://wa.me/+27605478465" className="px-8 py-4 rounded-xl font-bold text-white border border-slate-600 hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
                                Join Community
                            </a>
                        </div>
                    </FadeIn>

                    {/* Right Visual (Glass Card) */}
                    <FadeIn direction="left" delay={0.3} className="hidden lg:block">
                        <div className="relative">
                            {/* Floating Cards Effect */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-remage-gold rounded-2xl rotate-12 opacity-20 blur-xl"></div>

                            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <p className="text-slate-400 text-sm">Current Balance</p>
                                        <h3 className="text-4xl font-mono text-white font-bold">$14,250.00</h3>
                                    </div>
                                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                        <TrendingUp size={14} /> +12.4%
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[1,2,3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <BarChart2 size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-sm">XAUUSD Buy</p>
                                                    <p className="text-slate-500 text-xs">0.50 Lot</p>
                                                </div>
                                            </div>
                                            <p className="text-remage-green font-mono font-bold">+$145.00</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 3. ANIMATED STATISTICS */}
            <StatsSection />

            {/* Features Grid (Refined) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-remage-blue font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-remage-navy mt-2">Professional Grade Tools</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 group hover:bg-remage-navy hover:text-white transition-all duration-300 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl">
                            <div className="w-14 h-14 bg-blue-100 group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                <TrendingUp className="text-remage-blue group-hover:text-white w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Precision Entries</h3>
                            <p className="text-slate-500 group-hover:text-slate-300">Sniper-like entries with our specialized algorithmic indicators.</p>
                        </div>

                        <div className="p-8 group hover:bg-remage-navy hover:text-white transition-all duration-300 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl">
                            <div className="w-14 h-14 bg-green-100 group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                <Shield className="text-remage-green group-hover:text-white w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Capital Protection</h3>
                            <p className="text-slate-500 group-hover:text-slate-300">Built-in equity protection and news filters to keep your funds safe.</p>
                        </div>

                        <div className="p-8 group hover:bg-remage-navy hover:text-white transition-all duration-300 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl">
                            <div className="w-14 h-14 bg-yellow-100 group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                <CheckCircle className="text-remage-gold group-hover:text-white w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Verified Results</h3>
                            <p className="text-slate-500 group-hover:text-slate-300">We don't just talk. We show live Myfxbook records and student withdrawals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Banner */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto bg-gradient-to-r from-remage-green to-emerald-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Start Your Profitable Journey</h2>
                    <p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto relative z-10">
                        Join the elite community of traders who have automated their financial freedom.
                    </p>
                    <a href="https://wa.me/+27605478465" className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform relative z-10">
                        Chat on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;