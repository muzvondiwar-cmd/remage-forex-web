import React from 'react';
import { MessageCircle, Facebook, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const Contact = () => {
    return (
        <div className="bg-slate-50 w-full flex-grow flex flex-col items-center justify-center py-20 px-4">
            <div className="max-w-5xl mx-auto w-full">
                <FadeIn className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-remage-navy mb-6">Let's Talk Business</h1>
                    <p className="text-slate-600 text-lg">
                        Have questions about the Cyprus-V1 Bot or our mentorship? <br className="hidden md:block"/>
                        The fastest way to reach us is directly via WhatsApp.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* PRIMARY METHOD: WHATSAPP */}
                    <FadeIn direction="right" className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>

                        <div className="relative mb-8">
                            <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                            <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle size={48} />
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold text-remage-navy mb-2">WhatsApp Us</h3>
                        <p className="text-slate-500 mb-8">Average Response: &lt; 15 mins</p>

                        <a
                            href="https://wa.me/+27605478465"
                            className="bg-remage-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                            Start Chat <ArrowUpRight size={18} />
                        </a>
                    </FadeIn>

                    {/* SECONDARY METHODS */}
                    <FadeIn direction="left" className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-6 hover:-translate-x-2 transition-transform cursor-pointer">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                <Facebook size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-remage-navy text-lg">Facebook</h4>
                                <p className="text-slate-500">Join our public group</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-6 hover:-translate-x-2 transition-transform cursor-pointer">
                            <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-remage-navy text-lg">Email Support</h4>
                                <p className="text-slate-500">support@remageforex.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-6 hover:-translate-x-2 transition-transform cursor-pointer">
                            <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-remage-navy text-lg">Location</h4>
                                <p className="text-slate-500">Global Online Academy</p>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </div>
    );
};

export default Contact;