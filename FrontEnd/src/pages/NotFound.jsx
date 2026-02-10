import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <SEO
                title="Page Not Found - Arvayon Pro Build Studio"
                description="The page you are looking for keeps moving or doesn't exist. Return to Arvayon Pro Build Studio homepage."
            />
            <div className="text-center">
                <h1 className="text-9xl font-black text-[#D4B878]">404</h1>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest rounded-full hover:bg-[#D4B878] transition-all duration-300 hover:-translate-y-1 shadow-xl"
                >
                    <Home size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
