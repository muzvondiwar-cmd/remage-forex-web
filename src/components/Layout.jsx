import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* 1. The Global Navbar */}
            <Navbar />

            {/* 2. The Page Content */}
            {/* The pt-24 (padding-top) is crucial! It prevents the content from hiding behind the fixed Navbar */}
            <main className="flex-grow pt-24 flex flex-col">
                <Outlet />
            </main>

            {/* 3. The Global Footer */}
            <Footer />
        </div>
    );
};