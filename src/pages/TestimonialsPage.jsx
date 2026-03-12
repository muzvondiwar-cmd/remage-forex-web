import React, { useState } from 'react';
import { Play, ZoomIn, Star, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

const TestimonialsPage = () => {
    // Placeholder Data - Replace these with your actual YouTube/Vimeo links
    const videos = [
        { id: 1, title: "Student turns $50 into $500", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: 2, title: "Cyprus-V1 Bot Live Trading", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: 3, title: "Weekly Profit Recap", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ];

    // Placeholder Images - Replace with your actual Imgur/Firebase links
    const screenshots = [
        { id: 1, caption: "Consistent Blue Screen 💙", url: "https://placehold.co/400x800/1e293b/fbbf24?text=Profit+Screenshot+1" },
        { id: 2, caption: "Withdrawal Successful", url: "https://placehold.co/400x600/10b981/white?text=Withdrawal+Proof" },
        { id: 3, caption: "Mentorship Student Results", url: "https://placehold.co/400x700/fbbf24/1e293b?text=Student+Chat" },
        { id: 4, caption: "Bot Performance News Event", url: "https://placehold.co/400x500/0f172a/white?text=News+Trading" },
        { id: 5, caption: "Passing Prop Firm Challenge", url: "https://placehold.co/400x800/1e293b/fbbf24?text=Prop+Firm+Pass" },
        { id: 6, caption: "Account Flipping Strategy", url: "https://placehold.co/400x600/10b981/white?text=Account+Flip" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen w-full flex-grow flex flex-col">

            {/* 1. PREMIUM HERO SECTION */}
            <section className="bg-remage-navy relative overflow-hidden py-24 px-4 min-h-[50vh] flex items-center justify-center">
                {/* Animated Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-remage-blue/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-remage-gold/10 rounded-full blur-[100px]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                            <Star size={16} className="text-remage-gold fill-current" />
                            <span className="text-white text-sm font-bold tracking-wide">VERIFIED RESULTS</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Numbers Don't <span className="text-transparent bg-clip-text bg-gradient-to-r from-remage-gold to-yellow-200">Lie.</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Don't just take our word for it. See the withdrawals, the live profit screens, and the success stories from the Remage community.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 2. STATS BANNER */}
            <div className="bg-slate-900 border-b border-slate-800 relative z-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-800">
                        <FadeIn delay={0.1}>
                            <div className="text-3xl font-bold text-white font-mono">500+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Active Traders</div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="text-3xl font-bold text-remage-green font-mono">92%</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Bot Win Rate</div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="text-3xl font-bold text-remage-gold font-mono">$2.4M</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Client Profits</div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="flex justify-center items-center h-full">
                                <ShieldCheck size={32} className="text-remage-blue" />
                            </div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">MyFxBook Verified</div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* 3. VIDEO TESTIMONIALS */}
            <section className="py-20 max-w-7xl mx-auto px-4 w-full">
                <FadeIn className="flex items-center gap-4 mb-12">
                    <div className="p-4 bg-red-500/10 rounded-2xl text-red-500">
                        <Play fill="currentColor" size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-remage-navy">Watch Live Proof</h2>
                        <p className="text-slate-500">Real trading history and client reviews.</p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <FadeIn key={video.id} delay={index * 0.15} direction="up">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:shadow-2xl hover:border-remage-gold/30 transition-all duration-300">
                                <div className="aspect-video w-full bg-slate-900 relative">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 z-10"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-remage-navy text-lg group-hover:text-remage-gold transition-colors">{video.title}</h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* 4. PROFIT GALLERY (Masonry Layout with Glass Hover) */}
            <section className="py-20 bg-slate-100 w-full relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <FadeIn className="flex items-center gap-4 mb-12">
                        <div className="p-4 bg-remage-blue/10 rounded-2xl text-remage-blue">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-remage-navy">The Blue Screen Gallery</h2>
                            <p className="text-slate-500">Daily withdrawals and profit shots from our VIP community.</p>
                        </div>
                    </FadeIn>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {screenshots.map((img, index) => (
                            <FadeIn key={img.id} delay={index * 0.1}>
                                <div className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group relative">
                                    <img src={img.url} alt={img.caption} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />

                                    {/* Glassmorphism Hover Caption */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-remage-navy/90 via-remage-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-remage-gold font-bold text-lg mb-1">{img.caption}</p>
                                            <p className="text-white text-xs flex items-center gap-1"><ZoomIn size={12}/> Verified by Remage</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION */}
            <section className="py-24 px-4 bg-white">
                <FadeIn className="max-w-4xl mx-auto bg-gradient-to-br from-remage-navy to-slate-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                    {/* Glowing orb effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-remage-gold/20 rounded-full blur-[80px] transform translate-x-1/2 -translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to post your own results?</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        Stop watching from the sidelines. Get the Cyprus-V1 bot or join our mentorship program today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                        <Link to="/pricing" className="w-full sm:w-auto bg-remage-gold text-remage-navy px-8 py-4 rounded-xl font-bold shadow-lg shadow-yellow-900/20 hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-2">
                            View Pricing <ArrowRight size={18} />
                        </Link>
                        <a href="https://wa.me/1234567890" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-center">
                            Chat on WhatsApp
                        </a>
                    </div>
                </FadeIn>
            </section>

        </div>
    );
};

export default TestimonialsPage;