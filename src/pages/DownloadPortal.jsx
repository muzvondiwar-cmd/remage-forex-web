import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Key, Lock, CheckCircle, AlertCircle, FileCode, Shield } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const DownloadPortal = () => {
    const [keyInput, setKeyInput] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    // MOCK VERIFICATION LOGIC
    // In a real app, this would send an API request to your backend to check MongoDB
    const handleVerify = (e) => {
        e.preventDefault();
        setStatus('loading');

        setTimeout(() => {
            // FOR DEMO: The key is "CYPRUS-DEMO"
            if (keyInput.toUpperCase() === 'CYPRUS-DEMO') {
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    const handleDownload = () => {
        // Replace this with your actual Google Drive link or file path
        window.open('https://your-google-drive-link-to-bot.zip', '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen w-full flex-grow flex flex-col pt-10 pb-20 px-4 items-center justify-center">
            <FadeIn className="max-w-xl w-full">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-remage-navy mb-2">Download Center</h1>
                    <p className="text-slate-500">Enter the unique license key sent to your WhatsApp to unlock your software.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">

                    {/* Header Visual */}
                    <div className="bg-remage-navy p-6 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto text-remage-gold relative z-10 mb-2">
                            {status === 'success' ? <CheckCircle size={32} /> : <Lock size={32} />}
                        </div>
                        <h2 className="text-white font-bold relative z-10">
                            {status === 'success' ? 'Access Granted' : 'Authentication Required'}
                        </h2>
                    </div>

                    <div className="p-8">
                        <AnimatePresence mode="wait">

                            {/* STATE 1: INPUT FORM */}
                            {status !== 'success' && (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    onSubmit={handleVerify}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">License Key</label>
                                        <div className="relative">
                                            <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                            <input
                                                type="text"
                                                value={keyInput}
                                                onChange={(e) => setKeyInput(e.target.value)}
                                                placeholder="XXXX-XXXX-XXXX"
                                                className={`w-full bg-slate-50 border ${status === 'error' ? 'border-red-500' : 'border-slate-200'} rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-remage-blue font-mono uppercase tracking-widest transition-colors`}
                                                required
                                            />
                                        </div>
                                        {status === 'error' && (
                                            <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                                                <AlertCircle size={12} /> Invalid License Key. Please check WhatsApp.
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-remage-navy text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex justify-center items-center gap-2"
                                    >
                                        {status === 'loading' ? 'Verifying...' : 'Unlock Download'}
                                    </button>
                                </motion.form>
                            )}

                            {/* STATE 2: DOWNLOAD SCREEN */}
                            {status === 'success' && (
                                <motion.div
                                    key="download"
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm border border-green-100">
                                        <strong>Success!</strong> Your license key is valid.
                                    </div>

                                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 hover:bg-slate-50 transition-colors">
                                        <FileCode size={40} className="mx-auto text-remage-blue mb-3" />
                                        <h3 className="font-bold text-remage-navy">Cyprus-V1_Installer.zip</h3>
                                        <p className="text-xs text-slate-400 mb-4">Version 1.0 • 15.4 MB</p>
                                        <button
                                            onClick={handleDownload}
                                            className="w-full bg-remage-green text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-all flex justify-center items-center gap-2 shadow-lg shadow-green-900/20"
                                        >
                                            <Download size={20} /> Download Now
                                        </button>
                                    </div>

                                    <div className="text-left space-y-3 pt-4 border-t border-slate-100">
                                        <h4 className="font-bold text-sm text-remage-navy">Installation Instructions:</h4>
                                        <ol className="list-decimal list-inside text-xs text-slate-500 space-y-2">
                                            <li>Unzip the file using WinRAR or 7Zip.</li>
                                            <li>Open MT5, go to <strong>File &gt; Open Data Folder</strong>.</li>
                                            <li>Paste the <code>.ex5</code> file into <strong>MQL5 &gt; Experts</strong>.</li>
                                            <li>Refresh your Expert Advisors panel.</li>
                                        </ol>
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>

                    <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                        <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                            <Shield size={10} /> This download is watermarked with your unique ID.
                        </p>
                    </div>

                </div>
            </FadeIn>
        </div>
    );
};

export default DownloadPortal;