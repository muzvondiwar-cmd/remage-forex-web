import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ value, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="text-center"
    >
        <div className="text-4xl md:text-5xl font-bold text-remage-gold mb-2 font-mono">
            {value}
        </div>
        <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">
            {label}
        </div>
    </motion.div>
);

const StatsSection = () => {
    return (
        <div className="bg-slate-900 py-16 border-y border-slate-800 relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-remage-blue/20 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatItem value="500+" label="Active Students" delay={0} />
                <StatItem value="92%" label="Win Rate" delay={0.1} />
                <StatItem value="$2.4M" label="Client Profit" delay={0.2} />
                <StatItem value="24/7" label="Support" delay={0.3} />
            </div>
        </div>
    );
};

export default StatsSection;