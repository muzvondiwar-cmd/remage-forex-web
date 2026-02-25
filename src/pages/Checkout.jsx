import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Wallet, Building2, Lock, ShieldCheck, CheckCircle, Copy, ArrowLeft } from 'lucide-react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

const Checkout = () => {
    const [method, setMethod] = useState('card');
    const [copied, setCopied] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // 1. DYNAMIC ORDER DATA
    // This grabs the item details sent from the Pricing/Services page.
    // If someone directly types /checkout in the URL without clicking a product, it defaults to the Bot.
    const location = useLocation();
    const order = location.state || {
        item: "Cyprus-V1 Trading Bot",
        price: 400,
        discount: 200,
        total: 200,
        type: "Lifetime License"
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        setTimeout(() => {
            // 2. DYNAMIC WHATSAPP MESSAGE
            const message = `*NEW ORDER ID: #${Math.floor(Math.random() * 10000)}*\n\nHi Remage Team, I would like to complete my payment.\n\n*Item:* ${order.item}\n*Total:* $${order.total}\n*Method:* ${method.toUpperCase()}\n\nPlease confirm where I should send the funds/proof of payment.`;
            const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            setIsProcessing(false);
        }, 2000);
    };

    return (
        <div className="bg-slate-50 min-h-screen w-full flex-grow flex flex-col pt-8 pb-20 px-4">
            <div className="max-w-6xl mx-auto w-full">

                <Link to="/pricing" className="inline-flex items-center gap-2 text-slate-500 hover:text-remage-navy mb-8 transition-colors font-medium">
                    <ArrowLeft size={18} /> Back to Pricing
                </Link>

                <FadeIn className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-remage-navy">Secure Checkout</h1>
                    <div className="flex items-center justify-center gap-2 mt-3 text-sm font-medium text-green-600 bg-green-50 w-fit mx-auto px-4 py-1 rounded-full border border-green-100">
                        <Lock size={14} /> 256-Bit SSL Encrypted
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* LEFT COLUMN: Payment Methods */}
                    <div className="lg:col-span-2 space-y-6">

                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                            <h3 className="text-xl font-bold text-remage-navy mb-6">Select Payment Method</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <button onClick={() => setMethod('card')} className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${method === 'card' ? 'border-remage-blue bg-blue-50/50 text-remage-blue shadow-sm' : 'border-slate-100 hover:border-slate-300 text-slate-500'}`}>
                                    <CreditCard size={28} />
                                    <span className="font-bold text-sm">Credit Card</span>
                                </button>
                                <button onClick={() => setMethod('crypto')} className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${method === 'crypto' ? 'border-remage-gold bg-yellow-50/50 text-yellow-600 shadow-sm' : 'border-slate-100 hover:border-slate-300 text-slate-500'}`}>
                                    <Wallet size={28} />
                                    <span className="font-bold text-sm">USDT / Crypto</span>
                                </button>
                                <button onClick={() => setMethod('bank')} className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${method === 'bank' ? 'border-remage-green bg-green-50/50 text-green-600 shadow-sm' : 'border-slate-100 hover:border-slate-300 text-slate-500'}`}>
                                    <Building2 size={28} />
                                    <span className="font-bold text-sm">Bank Transfer</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 min-h-[400px] relative overflow-hidden">
                            <AnimatePresence mode="wait">

                                {method === 'card' && (
                                    <motion.form key="card" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} onSubmit={handlePayment} className="space-y-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-bold text-lg text-remage-navy">Card Details</h3>
                                        </div>
                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Cardholder Name</label>
                                                <input type="text" placeholder="e.g. John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-remage-blue" required />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Card Number</label>
                                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-remage-blue font-mono" required />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Expiry Date</label>
                                                    <input type="text" placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-remage-blue font-mono" required />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">CVC</label>
                                                    <input type="text" placeholder="123" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-remage-blue font-mono" required />
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" disabled={isProcessing} className="w-full mt-4 bg-remage-navy text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex justify-center items-center gap-2 shadow-lg shadow-blue-900/10">
                                            {isProcessing ? 'Processing...' : `Pay Securely $${order.total}`}
                                        </button>
                                    </motion.form>
                                )}

                                {method === 'crypto' && (
                                    <motion.div key="crypto" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="text-center pt-4">
                                        <div className="w-20 h-20 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-yellow-100">
                                            <Wallet size={40} />
                                        </div>
                                        <h3 className="font-bold text-2xl text-remage-navy mb-2">Pay via USDT (TRC20)</h3>
                                        <p className="text-slate-500 mb-8 max-w-sm mx-auto">Send exactly <strong className="text-remage-navy">${order.total}</strong> to the address below.</p>

                                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center justify-between mb-3 group hover:border-remage-gold cursor-pointer" onClick={() => handleCopy("TFjX8...[YOUR_WALLET]...xK2")}>
                                            <code className="text-sm text-slate-700 font-mono break-all px-2">TFjX8...[YOUR_WALLET]...xK2</code>
                                            <button className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                                                {copied ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                                            </button>
                                        </div>

                                        <button onClick={handlePayment} className="w-full mt-8 bg-remage-gold text-remage-navy py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-lg">
                                            I Have Sent The Crypto
                                        </button>
                                    </motion.div>
                                )}

                                {method === 'bank' && (
                                    <motion.div key="bank" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                        <h3 className="font-bold text-xl mb-6 text-remage-navy flex items-center gap-2">
                                            <Building2 className="text-remage-green" /> Banking Details
                                        </h3>

                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 text-sm text-slate-600 mb-8">
                                            <div className="flex justify-between items-center border-b border-slate-200/50 pb-3"><span className="text-slate-400">Bank Name</span><span className="font-bold text-remage-navy">FNB South Africa</span></div>
                                            <div className="flex justify-between items-center border-b border-slate-200/50 pb-3"><span className="text-slate-400">Account Holder</span><span className="font-bold text-remage-navy">Remage Trading</span></div>
                                            <div className="flex justify-between items-center border-b border-slate-200/50 pb-3"><span className="text-slate-400">Account Number</span><span className="font-bold text-remage-navy font-mono">62000000000</span></div>
                                            <div className="flex justify-between items-center pt-1"><span className="text-slate-400">Reference</span><span className="font-bold text-white bg-remage-navy px-2 py-1 rounded text-xs">YOUR NAME</span></div>
                                        </div>

                                        <button onClick={handlePayment} className="w-full bg-remage-green text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg">
                                            Upload Proof of Payment (WhatsApp)
                                        </button>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Summary */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                        <h3 className="text-xl font-bold text-remage-navy mb-6">Order Summary</h3>

                        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-remage-navy to-slate-800 rounded-xl flex items-center justify-center text-white shadow-md">
                                <ShieldCheck />
                            </div>
                            <div>
                                <h4 className="font-bold text-remage-navy text-lg">{order.item}</h4>
                                <p className="text-xs text-remage-gold font-bold bg-yellow-50 px-2 py-1 rounded-md inline-block mt-1">{order.type}</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-slate-500">
                                <span>Original Price</span>
                                <span className={order.discount > 0 ? "line-through" : ""}>${order.price}.00</span>
                            </div>
                            {order.discount > 0 && (
                                <div className="flex justify-between text-green-600 font-medium bg-green-50 p-2 rounded-lg">
                                    <span>Discount Applied</span>
                                    <span>-${order.discount}.00</span>
                                </div>
                            )}
                            <div className="h-px bg-slate-100 my-2"></div>
                            <div className="flex justify-between items-end">
                                <span className="font-bold text-slate-700">Total Due</span>
                                <span className="text-3xl font-bold text-remage-navy">${order.total}.00</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;