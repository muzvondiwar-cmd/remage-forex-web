import React from 'react';
import { Play, ZoomIn } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const TestimonialsPage = () => {
    // Placeholder Data - Replace these with your actual image/video links later
    const videos = [
        { id: 1, title: "Student turns $50 into $500", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Example Embed
        { id: 2, title: "Cyprus-V1 Bot Live Trading", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: 3, title: "Weekly Profit Recap", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ];

    const screenshots = [
        { id: 1, caption: "Consistent Blue Screen 💙", url: "https://placehold.co/400x800/1e3a8a/white?text=Profit+Screenshot+1" },
        { id: 2, caption: "Withdrawal Successful", url: "https://placehold.co/400x600/10b981/white?text=Withdrawal+Proof" },
        { id: 3, caption: "Mentorship Student Results", url: "https://placehold.co/400x700/fbbf24/black?text=Student+Chat" },
        { id: 4, caption: "Bot Performance News Event", url: "https://placehold.co/400x500/0f172a/white?text=News+Trading" },
        { id: 5, caption: "Passing Prop Firm Challenge", url: "https://placehold.co/400x800/1e3a8a/white?text=Prop+Firm+Pass" },
        { id: 6, caption: "Account Flipping Strategy", url: "https://placehold.co/400x600/10b981/white?text=Account+Flip" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen w-full flex-grow flex flex-col">
            {/* Header */}
            <div className="bg-remage-navy text-white py-20 text-center px-4">
                <FadeIn direction="down">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Real Results. Real Traders.</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Don't just take our word for it. See the withdrawals, the profit screens, and the stories from our community.
                    </p>
                </FadeIn>
            </div>

            {/* Video Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 w-full">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-red-100 rounded-full text-red-600">
                        <Play fill="currentColor" />
                    </div>
                    <h2 className="text-3xl font-bold text-remage-navy">Video Testimonials</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <FadeIn key={video.id} delay={index * 0.2}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                <div className="aspect-video w-full bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-remage-navy">{video.title}</h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Image Gallery (Masonry Style) */}
            <section className="py-16 bg-white w-full">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-remage-blue/10 rounded-full text-remage-blue">
                            <ZoomIn />
                        </div>
                        <h2 className="text-3xl font-bold text-remage-navy">Profit Gallery</h2>
                    </div>

                    <div className="columns-1 md:columns-3 gap-6 space-y-6">
                        {screenshots.map((img, index) => (
                            <FadeIn key={img.id} delay={index * 0.1}>
                                <div className="break-inside-avoid bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 group relative">
                                    <img src={img.url} alt={img.caption} className="w-full h-auto object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <p className="text-white font-bold">{img.caption}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold text-remage-navy mb-6">Ready to post your own results?</h2>
                <a href="https://wa.me/1234567890" className="inline-block bg-remage-green text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 transition-colors">
                    Join the Winning Team
                </a>
            </section>
        </div>
    );
};

export default TestimonialsPage;