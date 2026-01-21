import React from 'react';
import { Link as LinkIcon, Users, Video, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const Services = () => {
    const services = [
        {
            title: "Account Linking",
            price: "ZAR 500 / $30",
            description: "Connect your account to our master terminal. We trade, you profit. 100% automated copy trading.",
            icon: <LinkIcon size={32} />,
            color: "blue",
            link: "https://wa.me/+27605478465?text=Hi,%20I'm%20interested%20in%20Account%20Linking"
        },
        {
            title: "Forex Mentorship",
            price: "Inquire for Pricing",
            description: "Master the psychology and technicals behind the charts. Zero to Hero curriculum.",
            icon: <Users size={32} />,
            color: "gold",
            link: "https://wa.me/+27605478465?text=Hi,%20I'm%20interested%20in%20Mentorship"
        },
        {
            title: "Live Signals",
            price: "Free Community",
            description: "Join our WhatsApp community for daily market breakdowns and potential setups.",
            icon: <Video size={32} />,
            color: "green",
            link: "https://wa.me/+27605478465"
        }
    ];

    return (
        <div className="bg-slate-50 w-full flex-grow flex flex-col">
            <div className="bg-remage-navy py-20 px-4 text-center">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Ecosystem</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">Everything you need to succeed in the financial markets.</p>
                </FadeIn>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10 pb-20 relative z-10 w-full">
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:border-remage-gold/50 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-remage-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${service.color === 'gold' ? 'yellow' : service.color}-50 text-remage-${service.color} group-hover:scale-110 transition-transform`}>
                                    <div className={service.color === 'gold' ? 'text-yellow-600' : service.color === 'green' ? 'text-green-600' : 'text-blue-600'}>
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-remage-navy mb-2">{service.title}</h3>
                                <p className="text-remage-green font-bold text-lg mb-4">{service.price}</p>
                                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{service.description}</p>

                                <a
                                    href={service.link}
                                    className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-slate-50 text-remage-navy font-bold group-hover:bg-remage-navy group-hover:text-white transition-all"
                                >
                                    Start Now <ArrowRight size={18} />
                                </a>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;