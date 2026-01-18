import React, { useState, useEffect } from 'react';
import { Trash2, Plus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [reviews, setReviews] = useState([]);
    const [form, setForm] = useState({ name: '', text: '', rating: 5 });
    const navigate = useNavigate();

    // Load Data
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('remageReviews')) || [];
        setReviews(saved);
    }, []);

    // Handle Add
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { id: Date.now(), ...form };
        const updated = [newReview, ...reviews];
        setReviews(updated);
        localStorage.setItem('remageReviews', JSON.stringify(updated));
        setForm({ name: '', text: '', rating: 5 }); // Reset form
    };

    // Handle Delete
    const handleDelete = (id) => {
        const updated = reviews.filter(r => r.id !== id);
        setReviews(updated);
        localStorage.setItem('remageReviews', JSON.stringify(updated));
    };

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-remage-navy">Admin Dashboard</h1>
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-600 hover:text-remage-navy">
                        <LogOut size={20} /> Back to Site
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Add Form */}
                    <div className="bg-white p-6 rounded-xl shadow-lg h-fit">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Plus size={20} className="text-remage-green" /> Add Testimonial
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Client Name</label>
                                <input
                                    required
                                    className="w-full border p-2 rounded focus:outline-none focus:border-remage-blue"
                                    value={form.name}
                                    onChange={e => setForm({...form, name: e.target.value})}
                                    placeholder="e.g. John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Rating (1-5)</label>
                                <select
                                    className="w-full border p-2 rounded"
                                    value={form.rating}
                                    onChange={e => setForm({...form, rating: Number(e.target.value)})}
                                >
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="3">3 Stars</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Testimonial</label>
                                <textarea
                                    required
                                    className="w-full border p-2 rounded h-24 focus:outline-none focus:border-remage-blue"
                                    value={form.text}
                                    onChange={e => setForm({...form, text: e.target.value})}
                                    placeholder="What did they say?"
                                />
                            </div>
                            <button className="w-full bg-remage-navy text-white py-2 rounded font-bold hover:bg-slate-800 transition-colors">
                                Post Testimonial
                            </button>
                        </form>
                    </div>

                    {/* List of Reviews */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Current Reviews ({reviews.length})</h2>
                        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                            {reviews.map(r => (
                                <div key={r.id} className="p-4 border rounded-lg flex justify-between items-start bg-slate-50">
                                    <div>
                                        <div className="font-bold text-remage-navy">{r.name} <span className="text-remage-gold text-sm ml-2">★ {r.rating}</span></div>
                                        <p className="text-sm text-slate-600 mt-1">{r.text}</p>
                                    </div>
                                    <button onClick={() => handleDelete(r.id)} className="text-red-400 hover:text-red-600 p-1">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                            {reviews.length === 0 && <p className="text-slate-400 text-center py-4">No reviews yet.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

/*https://remage-api.onrender.com*/