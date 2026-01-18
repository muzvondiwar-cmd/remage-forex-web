import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';

// Import Pages
import Home from './pages/Home';
import CyprusBot from './pages/CyprusBot';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import TestimonialsPage from './pages/TestimonialsPage';
import Checkout from './pages/Checkout'; // <--- IMPORT THIS
import Admin from './pages/Admin';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cyprus-bot" element={<CyprusBot />} />
                    <Route path="services" element={<Services />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="testimonials" element={<TestimonialsPage />} />

                    {/* NEW CHECKOUT ROUTE */}
                    <Route path="checkout" element={<Checkout />} />
                </Route>

                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
}

export default App;