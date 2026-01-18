import React, { useEffect, useState } from 'react';
import { Star, User } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    // Load reviews from "Database" (LocalStorage for now)
    useEffect(() => {
        const savedReviews = JSON.parse(localStorage.getItem('remageReviews')) || [];
        // If empty, add some dummy data
        if (savedReviews.length === 0) {
            const defaults = [
                { id: 1, name: "Sarah M.", text: "The Cyprus-V1 bot paid for itself in the first week. Incredible accuracy!", rating: 5 },
                { id: 2, name: "David K.", text: "I was skeptical about account linking, but the transparency is unmatched.", rating: 5 },
                { id: 3, name: "Tinashe Z.", text: "Best mentorship in Zimbabwe. They actually teach you risk management.", rating: 4 }
            ];
            setReviews(defaults);
            localStorage.setItem('remageReviews', JSON.stringify(defaults));
        } else {
            setReviews(savedReviews);
        }
    }, []);

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-center text-remage-navy mb-12">Success Stories</h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <FadeIn key={review.id} delay={i * 0.2}>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
                                <div className="flex text-remage-gold mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-remage-gold" : "text-gray-300"} />
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-remage-navy rounded-full flex items-center justify-center text-white">
                                        <User size={20} />
                                    </div>
                                    <span className="font-bold text-remage-navy">{review.name}</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};