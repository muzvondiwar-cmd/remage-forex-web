import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />

            {/* CHANGED: pt-24 is now pt-[73px] to perfectly match the Navbar height */}
            <main className="flex-grow pt-[73px] flex flex-col">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};